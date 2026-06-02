import { getTool, toolEvidenceSources, tools, workflows } from "./data";
import type { Tool, ToolEvidenceSource } from "./types";

export type EvidenceGraphLayer = "micro" | "workflow";

export type EvidenceSourceMixItem = {
  type: ToolEvidenceSource["sourceType"];
  count: number;
};

export type EvidenceGraphGroup = {
  key: string;
  slug: string;
  label: string;
  toolSlugs: string[];
  toolNames: string[];
  receipts: ToolEvidenceSource[];
  sourceMix: EvidenceSourceMixItem[];
  lastSeen: string;
};

const comparisonEvidencePattern = /\b(vs\.?|versus|comparison|compare|compared|alternatives?|alternative to|replacement for|competitors?|which should you choose|which is better)\b/i;
const listicleSpamEvidencePattern = /\b(top ai tools|best ai tools|100 ai tools|50 ai tools|must have ai tools|ultimate ai tools list)\b/i;

function evidenceText(item: ToolEvidenceSource) {
  return `${item.sourceTitle || ""} ${item.snippet || ""} ${item.sourceUrl || ""}`;
}

export function isToolEvidence(item: ToolEvidenceSource) {
  return !comparisonEvidencePattern.test(evidenceText(item)) && !listicleSpamEvidencePattern.test(evidenceText(item));
}

export function isCurrentToolOnlyEvidence(item: ToolEvidenceSource, tool: Tool) {
  return item.matchedTools.length === 1 && normalizeToolName(item.matchedTools[0]) === normalizeToolName(tool.name);
}

export function evidenceIncludesCurrentTool(item: ToolEvidenceSource, tool: Tool) {
  return item.matchedTools.some((toolName) => normalizeToolName(toolName) === normalizeToolName(tool.name));
}

export function evidenceGraphGroupsForTool(tool: Tool, evidenceItems: ToolEvidenceSource[], layer: EvidenceGraphLayer): EvidenceGraphGroup[] {
  return buildEvidenceGraphGroups(
    evidenceItems.filter((item) => evidenceIncludesCurrentTool(item, tool)),
    layer
  );
}

export function allEvidenceGraphGroups(layer: EvidenceGraphLayer) {
  return buildEvidenceGraphGroups(toolEvidenceSources.filter(isToolEvidence), layer);
}

export function getWorkflowEvidenceGroup(slug: string) {
  const exact = allEvidenceGraphGroups("workflow").find((group) => group.slug === slug);
  if (exact) return exact;

  const workflow = workflows.find((item) => item.slug === slug);
  if (!workflow) return undefined;
  const key = groupKeyForSlugs(workflow.toolSlugs);
  return allEvidenceGraphGroups("workflow").find((group) => group.key === key) ?? emptyGroup(workflow.toolSlugs, "workflow", workflow.name);
}

export function getMicroWorkflowEvidenceGroup(slug: string) {
  return allEvidenceGraphGroups("micro").find((group) => group.slug === slug);
}

export function relatedMicroWorkflowGroupsForWorkflow(group: EvidenceGraphGroup) {
  const workflowTools = new Set(group.toolSlugs);
  return allEvidenceGraphGroups("micro")
    .filter((microGroup) => microGroup.toolSlugs.every((toolSlug) => workflowTools.has(toolSlug)))
    .slice(0, 8);
}

export function relatedWorkflowGroupsForMicroWorkflow(group: EvidenceGraphGroup) {
  const microTools = new Set(group.toolSlugs);
  return allEvidenceGraphGroups("workflow")
    .filter((workflowGroup) => [...microTools].every((toolSlug) => workflowGroup.toolSlugs.includes(toolSlug)))
    .slice(0, 8);
}

export function sourceTypeLabel(type: ToolEvidenceSource["sourceType"]) {
  if (type === "x") return "X";
  if (type === "youtube") return "YouTube";
  if (type === "github") return "GitHub";
  if (type === "docs") return "Docs";
  if (type === "official") return "Official";
  if (type === "news") return "News";
  if (type === "newsletter_blog") return "Newsletter / Blog";
  if (type === "directory") return "Directory";
  if (type === "article") return "Articles";
  return "Other";
}

export function sourceMixLabel(sourceMix: EvidenceSourceMixItem[]) {
  return sourceMix.map((source) => sourceTypeLabel(source.type)).join(" • ") || "Sources pending";
}

export function rankEvidence(items: ToolEvidenceSource[]) {
  return [...items].sort((a, b) => evidenceStrength(b) - evidenceStrength(a));
}

export function receiptWord(count: number) {
  return count === 1 ? "receipt" : "receipts";
}

function buildEvidenceGraphGroups(evidenceItems: ToolEvidenceSource[], layer: EvidenceGraphLayer): EvidenceGraphGroup[] {
  const expectedLength = layer === "micro" ? 2 : 3;
  const knownTools = new Map(tools.map((item) => [normalizeToolName(item.name), item]));
  const groups = new Map<string, { toolSlugs: string[]; toolNames: string[]; receipts: ToolEvidenceSource[] }>();

  evidenceItems
    .filter((item) => layer === "micro" ? item.matchedTools.length === expectedLength : item.matchedTools.length >= expectedLength)
    .forEach((item) => {
      const matched = item.matchedTools
        .map((toolName) => knownTools.get(normalizeToolName(toolName)))
        .filter((matchedTool): matchedTool is Tool => Boolean(matchedTool))
        .filter((matchedTool, index, list) => list.findIndex((candidate) => candidate.slug === matchedTool.slug) === index);
      if (layer === "micro" && matched.length !== 2) return;
      if (layer === "workflow" && matched.length < 3) return;

      const sorted = [...matched].sort((a, b) => a.slug.localeCompare(b.slug));
      const key = groupKeyForSlugs(sorted.map((tool) => tool.slug));
      const existing = groups.get(key);
      if (existing) {
        existing.receipts.push(item);
        return;
      }

      groups.set(key, {
        toolSlugs: sorted.map((tool) => tool.slug),
        toolNames: sorted.map((tool) => tool.name),
        receipts: [item]
      });
    });

  return [...groups.entries()]
    .map(([key, group]) => {
      const uniqueReceipts = rankEvidence([...new Map(group.receipts.map((item) => [item.id, item])).values()]);
      return {
        key,
        slug: slugForToolSlugs(group.toolSlugs),
        label: group.toolNames.join(" + "),
        toolSlugs: group.toolSlugs,
        toolNames: group.toolNames,
        receipts: uniqueReceipts,
        sourceMix: sourceMixFor(uniqueReceipts),
        lastSeen: relativeLastSeen(uniqueReceipts[0]?.detectedAt)
      };
    })
    .sort((a, b) => b.receipts.length - a.receipts.length || evidenceStrength(b.receipts[0]) - evidenceStrength(a.receipts[0]));
}

function emptyGroup(toolSlugs: string[], layer: EvidenceGraphLayer, fallbackLabel: string): EvidenceGraphGroup {
  const resolvedTools = toolSlugs.map(getTool).filter((tool): tool is Tool => Boolean(tool));
  return {
    key: groupKeyForSlugs(toolSlugs),
    slug: slugForToolSlugs(toolSlugs),
    label: resolvedTools.length ? resolvedTools.map((tool) => tool.name).join(" + ") : fallbackLabel,
    toolSlugs,
    toolNames: resolvedTools.map((tool) => tool.name),
    receipts: [],
    sourceMix: [],
    lastSeen: "pending"
  };
}

function groupKeyForSlugs(toolSlugs: string[]) {
  return [...toolSlugs].sort().join("|");
}

function slugForToolSlugs(toolSlugs: string[]) {
  return [...toolSlugs].sort().join("-");
}

export function sourceMixFor(receipts: ToolEvidenceSource[]) {
  const types: ToolEvidenceSource["sourceType"][] = ["x", "youtube", "github", "docs", "official", "news", "newsletter_blog", "article", "directory", "other"];
  return types
    .map((type) => ({ type, count: receipts.filter((item) => item.sourceType === type).length }))
    .filter((source) => source.count > 0);
}

function normalizeToolName(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function relativeLastSeen(value?: string) {
  if (!value) return "recently";
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return formatEvidenceDate(value);
  const hours = Math.max(1, Math.round((Date.now() - date.getTime()) / (1000 * 60 * 60)));
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return `${days}d ago`;
}

export function formatEvidenceDate(value: string) {
  if (!value) return "";
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return value;
  return date.toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" });
}

export function evidenceStrength(item?: ToolEvidenceSource) {
  if (!item) return 0;
  const typeWeight: Record<ToolEvidenceSource["sourceType"], number> = {
    x: 32,
    youtube: 31,
    github: 30,
    docs: 26,
    official: 24,
    news: 22,
    newsletter_blog: 20,
    article: 18,
    directory: 3,
    other: 1
  };
  const workflowLanguage = /\b(workflow|build|deploy|automate|automation|agent|stack|integrat|template|tutorial|guide|using|with)\b/i.test(`${item.sourceTitle} ${item.snippet}`);
  const detectedAt = new Date(item.detectedAt).getTime();
  const recency = Number.isFinite(detectedAt) ? Math.min(8, Math.max(0, Math.round((detectedAt - Date.now() + 1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24 * 4)))) : 0;
  return item.matchedTools.length * 20 + typeWeight[item.sourceType] + (workflowLanguage ? 12 : 0) + recency;
}

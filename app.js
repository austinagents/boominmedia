const clients = [
  {
    name: "Ozark Trail",
    url: "https://theozarktrail.com",
    description:
      "Ozark Trail is a popular outdoor brand known for affordable, durable camping gear, coolers, and recreational equipment designed for everyday adventurers."
  },
  {
    name: "Tailgate Classics",
    url: "https://shoptailgateclassics.com",
    description:
      "Tailgate Classics is a lifestyle and apparel brand that celebrates sports culture, offering vintage-inspired clothing and merchandise for fans."
  },
  {
    name: "BucketGolf",
    url: "https://www.bucketgolfgame.com",
    description:
      "BucketGolf is an outdoor yard game that combines elements of golf and cornhole, using buckets as targets to create a fun, casual twist on traditional golf."
  },
  {
    name: "Spark Catch",
    url: "https://www.sparkcatch.com",
    description:
      "Spark Catch is a novelty baseball brand best known for its light-up baseballs, designed to make playing catch fun and engaging day or night."
  },
  {
    name: "Backyard Baseball Bros",
    url: "https://backyardbaseballbros.com",
    description:
      "Backyard Baseball Bros is a baseball-focused brand that creates and sells foam baseballs, designed to make the game safe and fun for both indoor play."
  }
];

const affiliateVideos = [
  { brand: "Spark Catch", caption: "Spins on a dime", className: "content-spark", posterSrc: "thumbnails/spark-catch-01.jpg", videoSrc: "videos/spark-catch-01.mp4", embedUrl: "" },
  { brand: "BucketGolf", caption: "Creator demo", className: "content-bucket", posterSrc: "thumbnails/bucketgolf-01.jpg", videoSrc: "videos/bucketgolf-01.mp4", embedUrl: "" },
  { brand: "BucketGolf", caption: "The best golf game?", className: "content-bucket", posterSrc: "thumbnails/bucketgolf-02.jpg", videoSrc: "videos/bucketgolf-02.mp4", embedUrl: "" },
  { brand: "Spark Catch", caption: "Night Play", className: "content-spark", posterSrc: "thumbnails/spark-catch-02.jpg", videoSrc: "videos/spark-catch-02.mp4", embedUrl: "" },
  { brand: "Shotgun Roulette", caption: "Is a blast!", className: "content-shotgun", posterSrc: "thumbnails/shotgun-roulette-01.jpg", videoSrc: "videos/shotgun-roulette-01.mp4", embedUrl: "" },
  { brand: "Crunch Cup", caption: "Fast product clip", className: "content-crunch", posterSrc: "thumbnails/crunch-cup-01.jpg", videoSrc: "videos/crunch-cup-01.mp4", embedUrl: "" }
];

const brandPartners = [
  { name: "Spark Catch", url: "https://www.sparkcatch.com", logo: "spark", logoSrc: "" },
  { name: "BucketGolf", url: "https://www.bucketgolfgame.com", logo: "bucket", logoSrc: "" },
  { name: "Shotgun Roulette", url: "#clients", logo: "shotgun", logoSrc: "" },
  { name: "Crunch Cup", url: "#clients", logo: "crunch", logoSrc: "" },
  { name: "Tailgate Classics", url: "https://shoptailgateclassics.com", logo: "tailgate", logoSrc: "" },
  { name: "Ozark Trail", url: "https://theozarktrail.com", logo: "ozark", logoSrc: "" }
];

const portfolioAccounts = [
  { platform: "Instagram", category: "Basketball", handle: "@puredunks", followers: "91.5k" },
  { platform: "Instagram", category: "Basketball", handle: "@Crossedups", followers: "76.1k" },
  { platform: "Instagram", category: "Basketball", handle: "@boominbball", followers: "68.1k" },
  { platform: "Instagram", category: "Basketball", handle: "@thelatenightfinds", followers: "32.6k" },
  { platform: "Instagram", category: "Basketball", handle: "@showcaseathletes", followers: "30.4k" },
  { platform: "Instagram", category: "Baseball", handle: "@boominathletics", followers: "134k" },
  { platform: "Instagram", category: "Baseball", handle: "@bsbhomerun", followers: "98.3k" },
  { platform: "Instagram", category: "Baseball", handle: "@bsbshowcase", followers: "66.5k" },
  { platform: "Instagram", category: "Baseball", handle: "@showcaseprospects", followers: "25.5k" },
  { platform: "Instagram", category: "Baseball", handle: "@bsbplayers", followers: "16.2k" },
  { platform: "Instagram", category: "Baseball", handle: "@goodcutsonly", followers: "10.5k" },
  { platform: "Instagram", category: "Football", handle: "@boominfball", followers: "148k" },
  { platform: "Instagram", category: "Football", handle: "@holysnag", followers: "84.9k" },
  { platform: "Instagram", category: "Football", handle: "@fballprospects", followers: "60.4k" },
  { platform: "Instagram", category: "Football", handle: "@sillyhits", followers: "54.8k" },
  { platform: "Instagram", category: "Football", handle: "@footballclears", followers: "28.4k" },
  { platform: "Instagram", category: "Football", handle: "@uniformaccess", followers: "26.3k" },
  { platform: "Instagram", category: "Golf", handle: "@golfmemesz", followers: "54.8k" },
  { platform: "Instagram", category: "Travel", handle: "@exploringcenter", followers: "75.5k" },
  { platform: "Instagram", category: "Travel", handle: "@earth.observe", followers: "52.4k" },
  { platform: "Instagram", category: "Travel", handle: "@boominlifestyles", followers: "24.1k" },
  { platform: "Instagram", category: "Apparel & Style", handle: "@oldschoolairway", followers: "188k" },
  { platform: "Instagram", category: "Pet", handle: "@catsrushh", followers: "157k" },
  { platform: "Instagram", category: "Pet", handle: "@catcuteclip", followers: "58.3k" },
  { platform: "Instagram", category: "Pet", handle: "@catcutecast", followers: "33k" },
  { platform: "Instagram", category: "Pet", handle: "@misskittenclips", followers: "18.5k" },
  { platform: "Instagram", category: "Other", handle: "@rapspeakz", followers: "28.9k" },
  { platform: "Instagram", category: "Other", handle: "@techrove", followers: "18.4k" },
  { platform: "Instagram", category: "Other", handle: "@bfluencepodnetwork", followers: "7k" },
  { platform: "TikTok", category: "Sports & Athletics", handle: "@athleticdeals", followers: "18.8k" },
  { platform: "TikTok", category: "Sports & Athletics", handle: "@bsbreel", followers: "15.2k" },
  { platform: "TikTok", category: "Health & Wellness", handle: "@soulclense", followers: "109.4k" },
  { platform: "TikTok", category: "Health & Wellness", handle: "@healthstiktok", followers: "19.2k" },
  { platform: "TikTok", category: "Health & Wellness", handle: "@yumwellness", followers: "2k" },
  { platform: "TikTok", category: "Other", handle: "@letha.l", followers: "1.7M" }
];

const featuredNetworkNodes = [
  "@letha.l",
  "@oldschoolairway",
  "@catsrushh",
  "@boominfball",
  "@boominathletics",
  "@bsbhomerun",
  "@puredunks",
  "@holysnag"
];

const networkAccountOverrides = {
  "@letha.l": { profileSrc: "", accountUrl: "", category: "Sports" },
  "@oldschoolairway": { profileSrc: "", accountUrl: "", category: "Lifestyle" },
  "@catsrushh": { profileSrc: "", accountUrl: "", category: "Entertainment" },
  "@boominfball": { profileSrc: "", accountUrl: "", category: "Sports" },
  "@boominathletics": { profileSrc: "", accountUrl: "", category: "Sports" },
  "@bsbhomerun": { profileSrc: "", accountUrl: "", category: "Baseball" },
  "@puredunks": { profileSrc: "", accountUrl: "", category: "Basketball" },
  "@holysnag": { profileSrc: "", accountUrl: "", category: "Sports" }
};

const results = [
  { brand: "BucketGolf", focus: "TikTok Shop affiliate content", reach: "2.8M", sales: "$92K", result: "6.4x ROAS" },
  { brand: "Spark Catch", focus: "Creator-led product demos", reach: "1.9M", sales: "$71K", result: "5.7x ROAS" },
  { brand: "Shotgun Roulette", focus: "Affiliate campaign testing", reach: "1.3M", sales: "$48K", result: "4.9x ROAS" },
  { brand: "Crunch Cup", focus: "UGC conversion angles", reach: "1.6M", sales: "$63K", result: "5.2x ROAS" }
];

const renderVideoGrid = () => {
  const grid = document.querySelector("#videoGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = affiliateVideos
    .map(
      (video) => `
        <article class="video-card">
          <div class="video-frame" data-video-src="${video.videoSrc}"${video.fallbackVideoSrc ? ` data-fallback-video-src="${video.fallbackVideoSrc}"` : ""}>
            <img class="video-thumbnail" src="${video.posterSrc}" alt="${video.brand} video thumbnail">
            <span class="play-dot" aria-hidden="true"></span>
            <span class="tiktok-ui tiktok-like" aria-hidden="true"></span>
            <span class="tiktok-ui tiktok-comment" aria-hidden="true"></span>
            <span class="tiktok-ui tiktok-share" aria-hidden="true"></span>
            <strong class="video-caption">${video.caption}</strong>
          </div>
          <div class="video-card-meta">
            <strong>${video.brand}</strong>
            <span class="client-badge">Current Client</span>
          </div>
        </article>
      `
    )
    .join("");

  bindVideoCardPlayback();
};

const bindVideoCardPlayback = () => {
  document.querySelectorAll(".video-frame").forEach((frame) => {
    frame.addEventListener("click", () => {
      let video = frame.querySelector("video");

      if (!video) {
        video = document.createElement("video");
        video.className = "video-asset";
        video.muted = true;
        video.playsInline = true;
        video.preload = "none";
        video.addEventListener("ended", () => {
          frame.classList.remove("is-playing");
          video.remove();
        });

        const source = document.createElement("source");
        source.src = frame.dataset.videoSrc;
        source.type = "video/mp4";
        video.append(source);

        if (frame.dataset.fallbackVideoSrc) {
          const fallbackSource = document.createElement("source");
          fallbackSource.src = frame.dataset.fallbackVideoSrc;
          fallbackSource.type = "video/mp4";
          video.append(fallbackSource);
        }

        frame.prepend(video);
      }

        frame.classList.add("is-playing");
        video.play();
    });
  });
};

const renderClientLogos = () => {
  const wall = document.querySelector("#clientLogoWall");
  if (!wall) {
    return;
  }

  wall.innerHTML = brandPartners
    .map(
      (client) => `
        <a class="logo-card" href="${client.url}" aria-label="${client.name}">
          <span class="logo-stage">${logoMarkup(client)}</span>
          <span class="client-badge">Current Client</span>
        </a>
      `
    )
    .join("");
};

const logoMarkup = (client) => {
  if (client.logoSrc) {
    return `<img class="brand-logo-img" src="${client.logoSrc}" alt="${client.name} logo">`;
  }

  const logos = {
    spark: `<span class="text-logo logo-mark logo-spark"><span class="script">Spark</span><span>Catch</span></span>`,
    bucket: `<span class="text-logo logo-mark logo-bucket"><span class="bucket-icon" aria-hidden="true"></span><span>BucketGolf</span></span>`,
    shotgun: `<span class="text-logo logo-mark logo-shotgun"><span class="target-icon" aria-hidden="true"></span><span>Shotgun<br>Roulette</span></span>`,
    crunch: `<span class="text-logo logo-mark logo-crunch"><span>Crunch</span><span>Cup</span></span>`,
    tailgate: `<span class="text-logo logo-mark logo-tailgate"><span>Tailgate<br><small>Classics</small></span></span>`,
    ozark: `<span class="text-logo logo-mark logo-ozark"><span class="ozark-peak" aria-hidden="true"></span><span>Ozark</span><span>Trail</span></span>`
  };

  return logos[client.logo] || `<span class="text-logo">${client.name}</span>`;
};

const renderNetworkGraph = () => {
  const graph = document.querySelector("#networkGraph");
  if (!graph) {
    return;
  }

  const nodes = featuredNetworkNodes
    .map((handle) => portfolioAccounts.find((account) => account.handle === handle))
    .filter(Boolean);

  const nodeMarkup = nodes
    .map(
      (node) => `
        <a class="network-card" href="${networkAccountUrl(node)}" target="_blank" rel="noopener noreferrer" aria-label="${networkLabel(node.handle)} account">
          <div class="network-card-top">
            <h3>${networkLabel(node.handle)}</h3>
            <span class="network-thumb">${networkThumbMarkup(node)}</span>
          </div>
          <strong>${node.followers}</strong>
          <span class="network-followers-label">Followers</span>
          <small>${networkCategory(node)}</small>
        </a>
      `
    )
    .join("");

  graph.innerHTML = `
    <div class="network-card-grid">${nodeMarkup}</div>
  `;
};

const networkAccountUrl = (node) => {
  const overrideUrl = networkAccountOverrides[node.handle]?.accountUrl;

  if (overrideUrl) {
    return overrideUrl;
  }

  const username = node.handle.replace("@", "");
  return node.platform === "TikTok" ? `https://www.tiktok.com/@${username}` : `https://www.instagram.com/${username}/`;
};

const networkThumbMarkup = (node) => {
  const profileSrc = networkAccountOverrides[node.handle]?.profileSrc;

  if (profileSrc) {
    return `<img class="network-profile-img" src="${profileSrc}" alt="${networkLabel(node.handle)} profile image">`;
  }

  return "";
};

const platformIcon = (platform) => {
  if (platform === "TikTok") {
    return `
      <svg class="platform-icon" viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="14 4 14 15.2 14 15.2"></polyline>
        <circle cx="9.2" cy="16.2" r="3.2"></circle>
        <polyline points="14 4 17.2 7.2 20 8"></polyline>
      </svg>
    `;
  }

  return `
    <svg class="platform-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <circle cx="17" cy="7" r="1.2"></circle>
    </svg>
  `;
};

const networkLabel = (handle) => {
  const labels = {
    "@letha.l": "Letha.l",
    "@oldschoolairway": "Old School Airway",
    "@catsrushh": "Cats Rushh",
    "@boominfball": "Boomin Fball",
    "@boominathletics": "Boomin Athletics",
    "@bsbhomerun": "BSB Homerun",
    "@puredunks": "Pure Dunks",
    "@holysnag": "Holy Snag"
  };

  return labels[handle] || handle.replace("@", "");
};

const networkCategory = (node) => {
  const categories = {
    "@letha.l": "Sports",
    "@oldschoolairway": "Lifestyle",
    "@catsrushh": "Entertainment",
    "@boominfball": "Sports",
    "@boominathletics": "Sports",
    "@bsbhomerun": "Baseball",
    "@puredunks": "Basketball",
    "@holysnag": "Sports"
  };

  return networkAccountOverrides[node.handle]?.category || categories[node.handle] || node.category;
};

const renderResults = () => {
  const list = document.querySelector("#resultList");
  if (!list) {
    return;
  }

  list.innerHTML = results
    .map(
      (item) => `
        <article class="result-card${item.brand === "Shotgun Roulette" ? " result-card-long-title" : ""}">
          <h3>${item.brand}</h3>
          <div class="result-focus">${item.focus}</div>
          <div class="result-row"><span>Reach</span><strong>${item.reach}</strong></div>
          <div class="result-row"><span>Sales</span><strong>${item.sales}</strong></div>
          <div class="result-row"><span>Result</span><strong>${item.result}</strong></div>
        </article>
      `
    )
    .join("");
};

const renderPortfolioPage = () => {
  const grid = document.querySelector("#portfolioGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = portfolioAccounts
    .map(
      (account) => `
        <a class="portfolio-card" href="${networkAccountUrl(account)}" target="_blank" rel="noopener noreferrer" aria-label="${networkLabel(account.handle)} ${account.platform} profile">
          <span class="portfolio-logo" aria-hidden="true">${portfolioInitials(account)}</span>
          <span class="portfolio-platform">${account.platform}</span>
          <h2>${networkLabel(account.handle)}</h2>
          <strong>${account.followers}</strong>
          <span class="network-followers-label">Followers</span>
          <small>${networkCategory(account)}</small>
        </a>
      `
    )
    .join("");
};

const portfolioInitials = (account) =>
  networkLabel(account.handle)
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

renderVideoGrid();
renderClientLogos();
renderNetworkGraph();
renderResults();
renderPortfolioPage();

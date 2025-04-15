const isGithubPages = process.env.GITHUB_PAGES === "true";

module.exports = {
  output: "export",
  basePath: isGithubPages ? "/semantic" : "",
  assetPrefix: isGithubPages ? "/semantic/" : "",
  images: {
    unoptimized: true,
  },
};

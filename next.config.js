const images = require("remark-images");
const emoji = require("remark-emoji");

const withMDX = require("@zeit/next-mdx")({
  options: {
    mdPlugins: [images, emoji]
  }
});

// For use when exporting a static site that will live in a sub directory
const basePath = "";

module.exports = withMDX({
  basePath,
  env: {
    basePath
  },
  pageExtensions: ["js", "jsx", "mdx"]
});

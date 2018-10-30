const withSass = require('@zeit/next-sass')
const withOptimizedImages = require('next-optimized-images');
module.exports = withOptimizedImages(withSass({
  distDir: "../../dist/functions/next"
}))

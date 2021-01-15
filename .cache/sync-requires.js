const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/mnt/c/Users/jorda/Desktop/projects/future_movie_productions/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/mnt/c/Users/jorda/Desktop/projects/future_movie_productions/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/mnt/c/Users/jorda/Desktop/projects/future_movie_productions/src/pages/index.js"))),
  "component---src-pages-mabel-and-george-js": hot(preferDefault(require("/mnt/c/Users/jorda/Desktop/projects/future_movie_productions/src/pages/mabel-and-george.js")))
}


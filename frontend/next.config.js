/* eslint-disable */
const path = require(`path`)
const glob = require(`glob`)

const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === `development`
    ? {}
    : !process.env.NOW
      ? require(`next/constants`)
      : require(`next-server/constants`)

const CONFIG = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: `emit-file-loader`,
        options: {
          name: `dist/[path][name].[ext]`,
        },
      },
      {
        test: /\.css$/,
        use: [`babel-loader`, `raw-loader`, `postcss-loader`],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          `babel-loader`,
          `raw-loader`,
          `postcss-loader`,
          {
            loader: `sass-loader`,
            options: {
              includePaths: [`styles`, `node_modules`]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      },
    )
    return config
  },
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {}
  }

  const withCSS = require(`@zeit/next-css`)

  return withCSS(CONFIG)
}

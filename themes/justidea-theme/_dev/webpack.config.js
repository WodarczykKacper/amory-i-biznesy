const currentTask = process.env.npm_lifecycle_event
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const {WebpackManifestPlugin} = require("webpack-manifest-plugin")
const fse = require("fs-extra")
const pjson = require(path.join(__dirname, 'package.json'))

const options = {
  host: process.env.HOST || 'localhost', 
  port: process.env.PORT || 3000,
  bundledJsFileName: 'hotupdate-bundle.js',
};

options.publicPath = `http://${options.host}:${options.port}${pjson.prestatheme.publicPath}`


class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Update FrontController.php", function () {
      // update FrontController php here
      const manifest = fse.readJsonSync("../assets/bundledassets/manifest.json")

      fse.readFile("../../../classes/controller/FrontController.php", "utf8", function (err, data) {
        if (err) {
          console.log(err)
        }

        // const devserverRegEx = new RegExp("'main-script-js-dev-server', 'http.+?'", "g")

        const scriptsRegEx = new RegExp("'theme-script-bundle-dev', '.+?'", "g")
        const scriptsRegEx2 = new RegExp("'theme-script-bundle-dev2', '.+?'", "g")
        // const vendorsRegEx = new RegExp("/assets/bundled-assets/vendors.+?'", "g")
        // const cssRegEx = new RegExp("'theme-style-bundle-dev', '.+?'", "g")

        let result = data
          // .replace(devserverRegEx, `'main-script-js-dev-server', 'http://${options.host}:${options.port}${pjson.prestatheme.publicPath}${options.bundledJsFileName}'`)
          .replace(scriptsRegEx, `'theme-script-bundle-dev', '/assets/bundledassets/${manifest["scripts.js"]}'`)
          .replace(scriptsRegEx2, `'theme-script-bundle-dev2', '/assets/bundledassets/${manifest["312.js"]}'`)

        fse.writeFile("../../../classes/controller/FrontController.php", result, "utf8", function (err) {
          if (err) return console.log(err)
        })
      })
    })
  }
}

let scssConfig = {
  test: /\.(sass|scss)$/,
  use: ["css-loader", "sass-loader"],
}

let cssConfig = {
  test: /\.css$/,
  use: [
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [require("autoprefixer")],
        },
      },
    },
  ],
}


let imgConfig = {
  test: /\.(jpg|png|svg|gif|jpeg)$/,
  use: "url-loader?emitFile=false",
}


let config = {
  entry: {
    scripts: "./js/all.js",
  },
  plugins: [],
  module: {
    rules: [
      cssConfig,
      scssConfig,
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      imgConfig,
    ],
  },
}


if (currentTask == "devFast") {
  config.devtool = "inline-source-map"
  cssConfig.use.unshift("style-loader")
  scssConfig.use.unshift("style-loader")
  config.output = {
    filename: options.bundledJsFileName,
    publicPath: options.publicPath,
  }
  config.devServer = {
    hot: true,
    port: options.port,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: 'all',
    proxy: {
      "**": {
        target: pjson.prestatheme.proxyURL,
        secure: false,
        changeOrigin: true,
        autoRewrite: true,
        headers: {
          'X-ProxiedBy-Webpack': true,
        },
      },
    },
    watchFiles: ["./../../../**/*.php", "./../../../**/*.tpl"],
    liveReload: false,
    historyApiFallback: true,
  }
  config.mode = "development"
}

if (currentTask == "build" || currentTask == "buildWatch") {
  cssConfig.use[0] = "css-loader?url=false"
  cssConfig.use.unshift(MiniCssExtractPlugin.loader)
  scssConfig.use.unshift(MiniCssExtractPlugin.loader)
  config.output = {
    publicPath: "/themes/justidea/assets/bundledassets/",
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../","assets/bundledassets"),
  }
  config.mode = "production"
  config.optimization = {
    splitChunks: { chunks: "all" },
  }
  config.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "../css/style-bundle.css" }),
    new WebpackManifestPlugin({ publicPath: "" }),
    new RunAfterCompile()
  )
}

module.exports = config
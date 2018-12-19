const webpack  = require( 'webpack' );
const path     = require( 'path' );
const ReqFrom  = require( 'webpack-require-from' );
const CssExtrt = require( 'mini-css-extract-plugin' );
const FixEntry = require( 'webpack-fix-style-only-entries' );
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry: {
		plugin: [
			path.resolve( __dirname, 'index.js' )
		],
		style: [ './src/scss/style.scss' ],
		editor: [ './src/scss/editor.scss' ]
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: '[name].bundle.js',
		chunkFilename: '[name].js', 
		publicPath: '',
		jsonpFunction: 'illustrationsJSONP'
	},
	mode: NODE_ENV,
	devtool: 'production' === process.env.NODE_ENV ? '(none)' : 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs)$/,
				exclude: [ /node_modules/ ],
				use: {
					loader: "babel-loader",
					options: {
						babelrc: false,
						presets: [ '@babel/preset-env', '@babel/preset-react' ],
						plugins: [ '@babel/plugin-syntax-dynamic-import', 'webpack-chunkname' ]
					}
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [ {
					loader: CssExtrt.loader
				},
				'css-loader',
				{
					loader: 'postcss-loader',
					options: {
						plugins: [
							require( 'autoprefixer' )
						]
					}
				},
				{
					loader: 'sass-loader',
					query: {
						outputStyle:
							'production' === process.env.NODE_ENV ? 'compressed' : 'nested'
					}
				} ]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( NODE_ENV )
		} ),
		new ReqFrom( {
			variableName: 'illustrationsBlock.pluginDirUrl'
		} ),
		new FixEntry(),
		new CssExtrt( {
			filename: '../dist/css/[name].css',
		} )
	]
};
var path=require("path");
var htmlWebpackPlugin=require("html-webpack-plugin");
var clearWebpackPlugins=require("clear-webpack-plugin");

module.exports={
	entry:{
		build:"./src/index.html"
	},
	output:{
		path:path.resolve(__dirname,"./build/");
		filename:"[name].js"
	},
	module:{
		rules:{

			{
				test:/.js$/,
				loaders:["react","react-dom","react-scripts"],
				exclude:"/node_modules"
			},
			{
				test:/.css?$/,
				loaders:["style","css"],
			 	exclude:"/node_modules/"
			}
		}
	},
	devServer:{
		port:3000,
		inline:true,
		hot:trues
	},
	plugins:[
		new htmlWebpackPlugin({
			title:"欢迎",
			chunks:["build"]
		})
	]

}

const gulp = require("gulp");//加载gulp
const express = require('express');
const webserver = require("gulp-webserver")
const https = require("https");
const babel = require("gulp-babel");//加载编译js插件  编译成ES5语法
const uglify = require("gulp-uglify");   //加载压缩js的插件
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");//压缩css
const rename = require("gulp-rename");
const zip = require("gulp-zip");
const http = require("http");




//编译html
gulp.task("compileHTML",function(){	
	gulp.src("./src/index.html").pipe(gulp.dest("dist"));
	gulp.src("./src/html/**/*.html").pipe(gulp.dest("dist/html"));
	
})
//编译js
gulp.task("compileJS",function(){
	gulp.src("./src/scripts/**/*.js")  //读取文件
	.pipe(babel({    //编译
		presets:['@babel/env']
	}))
	.pipe(uglify())  //压缩
	.pipe(gulp.dest("dist/scripts"));
})

//编译css
gulp.task("compileCSS",function(){
	gulp.src("./src/css/**/*.css")
	.pipe(autoprefixer())  //
	.pipe(csso())   //编译css
	.pipe(gulp.dest("dist/css"));
})
gulp.task("compileImgs",function(){
	gulp.src("./src/imgs/**/*").pipe(gulp.dest("dist/imgs"));
})

gulp.task("compileFonts",function(){
	gulp.src("./src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
})


gulp.task("static",function(){
	gulp.src("src/static/**/*").pipe(gulp.dest("dist/static"));
})
gulp.task("watching",()=>{
	gulp.watch("src/css/**/*.css",["compileCSS"])
})

//只是编译
gulp.task("build",["compileHTML","compileJS","compileCSS","compileImgs","compileFonts","static"])



//服务器读取和监听
gulp.task("webserver",function(){
	gulp.src("dist")     //读取
	.pipe(webserver({
			livereload:true,
	}));
	gulp.watch("./src/html/**/*.html",["compileHTML"]);  //监听html文件
	gulp.watch("./src/index.html",["compileHTML"]);  //监听html文件
	gulp.watch("./src/scripts/**/*.js",["compileJS"]);
	gulp.watch("./src/css/**/*.css",["compileCSS"]);
	gulp.watch("./src/static/**/*",["static"]);
	
	
	//服务器代理
	let app = express();
	//app.use(express.static('dist'));   //读取静态文件
	app.get('/api/goodlist',function(req,res){
		res.setHeader("Content-Type","text/plain;charset=utf-8");  //设置请求头信息
		res.setHeader("Access-Control-Allow-Origin","*")//允许跨域
		let proxy = https.request({
			hostname:"www.eastdane.com",	
			path:"/products/1539360168/productSimilarities?limit=10&offset=0&sku=AGJEA41561&imageSize=120x211",
			//path:"/products?filter&sortBy.sort=PRIORITY%3ANATURAL&filterContext=19184&tDim=220x390&swDim=18x17&baseIndex=0&limit=40",
			     //products?filter&merchandiseCategory=&sortBy.sort=PRIORITY%3ANATURAL&filterContext=19184&tDim=220x390&swDim=18x17&baseIndex=0&limit=40				 
			 // hostname:"www.smartisan.com",
			 // path:"/product/shop_categories",

			method:'get'
		},(response)=>{
			response.pipe(res);	
		});
		proxy.end();
	})
	
	app.get("/goodlist", (req,res)=>{
		res.setHeader("Access-Control-Allow-Origin","*"); //cors
		//res.setHeader("Content-Type","text/plain; charset=utf8")  
		res.setHeader("Content-Type","text/html; charset=utf8")
		let proxy = http.request({
			hostname: "www.eastdane.com",
			path: "/products/1539360168/productSimilarities?limit=10&offset=0&sku=AGJEA41561&imageSize=120x211",
			method: 'get'
		}, (response) => {
			response.pipe(res);
		});
		proxy.end();
	})
	
	app.listen(9000);

})
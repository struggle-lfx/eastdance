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


// gulp.task("abc",function(){ 
// 	console.log("abc执行了")
// })
// 
// //编译js
// gulp.task('compileJS', () =>
//     gulp.src('./scripts/login.js')    //读取
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(gulp.dest('dist'))
// );
// 
// 
// //压缩js
// gulp.task('compressJS', function () {
//         gulp.src('./scripts/login.js')
// 		.pipe(babel({
// 		    presets: ['@babel/env']
// 		}))
// 		.pipe(uglify())      //先压缩
// 		.pipe( gulp.dest('dist'))   //再放到dist目录下            
// });
// 
// 
// //压缩css
// gulp.task('compressCSS', function () {
//      gulp.src('./css/index.css')
//         .pipe(csso())
//         .pipe(gulp.dest('dist'));
// });
// 
// 
// //rename重命名
// gulp.task("rename",function(){
// 	gulp.src("./css/index.css")
// 	.pipe(csso())
// 	.pipe(rename("index.txt"))
// 	.pipe(gulp.dest("dist"))
// })
// 
// 
// //压缩文件夹
// gulp.task("zip",function(){
// 	gulp.src("css/*")
// 	.pipe(zip("abc.zip"))
// 	.pipe(gulp.dest("dist"))
// })
// 
// 
// 
// gulp.task('prefix', () =>
//     gulp.src('css/test.css')
//         .pipe(autoprefixer())
//         .pipe(gulp.dest('dist'))
// );


// gulp.task('webserver', function() {
//   gulp.src('src')
//     .pipe(webserver({
// 		https:true,
// 		open: true,
//       livereload: true,   //自动刷新
//      // directoryListing: true,   //读取目录
// 	  proxies:[{source: '/eastdance/products', 
// 				//target: 'https://www.eastdane.com/products/1538033286/productSimilarities?limit=10&offset=0&sku=NORSE30381&imageSize=120x211', 
// 				target:'https://www.baidu.com',
// 				options: {headers: {'ABC_HEADER': 'abc'}}}] //代理服务器
//       
//     }));
// });
// 


//编译html
gulp.task("compileHTML",function(){	
	gulp.src("./src/index.html").pipe(gulp.dest("dist"));
	//gulp.src("./src/html/**/*.html").pipe(gulp.dest("dist/html"));
	
})
//编译js
gulp.task("compileJS",function(){
	gulp.src("./src/scripts/***.js")  //读取文件
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

gulp.task("watching",()=>{
	gulp.watch("src/css/**/*.css",["compileCSS"])
})

//只是编译
gulp.task("build",["compileHTML","compileJS","compileCSS","compileImgs","compileFonts"])



//服务器读取和监听
gulp.task("webserver",function(){
	gulp.src("dist")     //读取
	.pipe(webserver({
			livereload:true,
	}));
	
	//服务器代理
	let app = express();
	//app.use(express.static('dist'));   //读取静态文件
	app.get('/api/goodlist',function(req,res){
		res.setHeader("Content-Type","text/plain;charset=utf-8");  //设置请求头信息
		res.setHeader("Access-Control-Allow-Origin","*")//允许跨域
		let proxy = https.request({
			hostname:"www.smartisan.com",
			path:"/product/shop_categories",
			method:'get'
		},(response)=>{
			response.pipe(res);
		});
		proxy.end();
	})
	app.listen(9000);
	gulp.watch("./src/html/**/*.html",["compileHTML"]);  //监听html文件
	gulp.watch("./src/index.html",["compileHTML"]);  //监听html文件
	gulp.watch("./src/scripts/**/*.js",["compileJS"]);
	gulp.watch("./src/css/**/*.css",["compileCSS"]);
})
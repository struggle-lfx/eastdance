let ajax = (function() {	
	let cache = new Map();
	return function(options){
		return new Promise(function(resolve, reject){
			let defaults = {
				type: "get",
				jsonpCallback: "callback"
			};
			Object.assign(defaults, options);
			
			let cacheData = cache.get(defaults.url);
			if (cacheData) {
				resolve(cacheData);
				return;
			}			
			if (defaults.type == "jsonp") {
				let _script = document.createElement("script");
				// "http://localhost:8080/test.action?name=123" &callback
				// "http://localhost:8080/test.action"  ?callback
				// /.+\?(([^=]+=[^=]+)|(&[^=]+=[^=]+)*)$/
			
				let funcname = "$jsonp_" + new Date().getTime() + Math.round(Math.random() * 10000000);
				window[funcname] = function(data) {
					resolve(data);
					cache.set(defaults.url, data); //缓存数据
					_script.remove();
					delete window[funcname];
				}
			
				if (defaults.url.includes("?")) {
					_script.src = defaults.url + "&" + defaults.jsonpCallback + "=" + funcname;
				} else {
					_script.src = defaults.url + "?" + defaults.jsonpCallback + "=" + funcname;
				}
				document.body.appendChild(_script);
			} else {
			
				let xhr = null;
				if (window.VBArray) {
					xhr = new ActiveXObject("Msxml2.XMLHTTP");
				} else {
					xhr = new XMLHttpRequest();
				}
			
				xhr.open(defaults.type, defaults.url);
				xhr.onload = function() {
					resolve(xhr.response);
					cache.set(defaults.url, xhr.response); //缓存数据
				};
				if (defaults.type == "get") {
					xhr.send();
				}
				if (defaults.type == "post") {
					xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
					xhr.send(defaults.data);
				}
			}
		});
	}
})();

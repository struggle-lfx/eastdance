window.onload=function(){
	var details = document.getElementsByClassName("details")[0];
	// console.log(details);
	// details.onclick=function(){
	// 	alert("111");
	// }
	var panel1 = FloatPanel('panel1',{
		width:387,
		left:400,
		header:{
			content:'关于记住登录状态',
			
		},
		body:{
			content:'选择记住登录状态可减少您需要在此设备上登录的次数。为了确保您的账户安全，请仅在您的个人设备上使用此选项。'	
},
		footer:{
			enabled:false
		},
		backDrop:false
	});

	document.querySelector('#details').addEventListener('click',function(event){
	    panel1.show({pageX:630,pageY:300});
	});
}


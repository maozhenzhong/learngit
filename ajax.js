
/*

 * AJAX(Asynchronous JavaScript and XML 异步的JavaScript 和 XML)
 * 解释: AJAX不是新的编程语言,而是一种使用现有标准的新方法。
 * 特点: 不用重新加载整个页面的情况下,可以与服务器交换数据并更新部分网页内容
 * 应用:
 * 	1、运用XHTML + CSS来表达资讯
 * 	2、运用JavaScript操作DOM(Document Object Model)来执行动态效果。
 * 	3、运用XML和XSLT操作资料
 * 	4、运用XMLHttpRequest或新的Fetch API与网页服务器进行异步资料交换。
 *
 * */

//创建XMLHttpRequest对象
var xmlhttp;
if(window.XMLHttpRequest){
	//IE7, Firefox, Chrome, Opera, Safari浏览器执行代码
	xmlhttp = new XMLHttpRequest();
}else{
	//IE6, IE5浏览器执行代码
	xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
}

/*
 * 向服务器发送请求
 * open(method, url, async);(规定请求的类型、URL以及是否异步处理请求)
 *	method:  请求的类型;GET | POST
 *	url:     文件在服务器上的位置
 *	async:   true(异步) | false(同步)
 *
 * send(string);(将请求发送到服务器)
 * 	string:  仅用于POST请求
 *
 * */

/*
 * GET OR POST
 * GET相对简单,但是在以下情况下请使用POST请求:
 *	1、无法使用缓存文件(更新服务器上得文件或数据库)
 *	2、向服务器发送大量的数据(POST没有数据量限制)
 *	3、发送包含未知字符的用户输入时,POST比GET更稳定也更可靠
 * */

//GET请求
xmlhttp.open('GET','ajax_info.txt',true);
xmlhttp.send();
//POST请求
/*
 * setRequestHeader(header,value)向请求添加HTTP头;
 *	header: 规定头的名称
 *	value:  规定头的值
 * */

xmlhttp.open('POST','ajax_info.txt',true);
xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
xmlhttp.send('fname=Henry&lname=Ford');

/*
 * 服务器响应,使用XMLHttpRequest对象的responseText 或 responsXML
 * responseText: 获得字符串形式的响应数据
 * responseXML:  获得XML形式的响应数据
 *
 * */

//responseText属性
document.getElementById('mydiv').innerHTML = xmlhttp.responseText;

//responseXML属性
var xmlDoc = xmlhttp.responseXML;
var txt = '';
var x = xmlDoc.getElementsByTagName('ARTIST');
for(var i = 0; i < x.length; i++){
	txt = txt + x[i].childNodes[0].nodeValue + '</br>';
}

document.getElementById('myDiv').innerHTML = txt;

/*
 * AJAX onreadystatechange 事件
 *
 * 解释: 当请求被发送到服务器时,我们需要执行一些基于响应的服务。每当readState改变时,就会触发onreadystatechange
 *
 * onreadystatechange: 存储函数(或函数名),每当readyState属性改变时,就会调用此函数
 * readState:          存有XMLHttpRequest的状态。从0~4发生变化;
 * 	0: 请求未初始化
 * 	1: 服务器连接已建立
 * 	2: 请求已接受
 * 	3: 请求处理中
 * 	4: 请求已完成
 * status:             200: "OK"; 404: 未找到页面
 * */

xmlhttp.onreadystatechange = function(){
	if(xmlhttp.readState === 4 && xmlhttp.status === 200){
		document.getElementById('myDiv').innerHTML = xmlhttp.responseText;
	}
}


//JSON
//get
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState===4) {
		if (xmlhttp.status===200) {
			var data = JSON.parse(xmlhttp.responseText);
			if (data.success) {
				document.getElementById("searchResult").innerHTML = data.msg;
			} else {
				document.getElementById("searchResult").innerHTML = "出现错误：" + data.msg;
			}
		} else {
			alert("发生错误：" + xmlhttp.status);
		}
	}
}

//post
var data = "";
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(data);
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState===4) {
		if (xmlhttp.status===200) {
			var data = JSON.parse(xmlhttp.responseText);
			if (data.success) {
				document.getElementById("createResult").innerHTML = data.msg;
			} else {
				document.getElementById("createResult").innerHTML = "出现错误：" + data.msg;
			}
		} else {
			alert("发生错误：" + xmlhttp.status);
		}
	}
}
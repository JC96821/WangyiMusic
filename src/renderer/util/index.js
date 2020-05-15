const util = {}

util.getImage = function(url){
	return `https://images.weserv.nl/?url=${url}`
}

util.setCookie = function(name, value) { 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + 60 * 60 * 1000); 
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/"; 
} 

util.getCookie = function(name) { 
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); 
    if (arr = document.cookie.match(reg)){
		return unescape(arr[2]);
	}
    return null; 
} 

export default util
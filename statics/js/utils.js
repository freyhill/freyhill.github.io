
(function(){
var lcom={};
lcom.fn=function(){

	function geturl(){
		return window.location.href;
	}


	return {
		geturl:geturl
	}

}
window.lcom=lcom;
})()
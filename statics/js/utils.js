; !function(win){

	var lcom=(function(){
		
		function getUrl(){
			return win.location.href;
		}

		return {
			getUrl:getUrl

		}
	})()

    window.lcom=lcom
    
}(window)
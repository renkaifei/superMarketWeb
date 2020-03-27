var superMarket = (function(win,superMarket){
	util = superMarket.util = superMarket.util || {};
	util.getQueryVariable = function(variable){
		var query = win.location.search.substring(1);
		var vars = query.split("&");
		for(var i =0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if(pair[0] == variable){
				return pair[1];
			}	
		}
		return "";	
	}
	return superMarket;	
})(window,superMarket || {})

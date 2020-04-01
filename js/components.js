var superMarket = (function(win,$,superMarket){
	components = superMarket.components = superMarket.components || {};

	components.text = function(option){
		option = option || {};	
		var txt = document.createElement("input");
		if(option.className) $(txt).addClass(option.className);
		if(option.value) $(txt).val(option.value);
		return txt;	
	}

	components.div = function(option){
		var elem = document.createElement("div");
		if(option.className) $(elem).addClass(option.className);
		return elem;	
	}	
		
	return superMarket;	
})(window,jQuery,superMarket ||{});

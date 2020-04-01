var superMarket = (function(win,$,superMarket){
	components = superMarket.components = superMarket.components || {};

	components.text = function(option){
		option = option || {};	
		var txt = document.createElement("input");
		if(option.className) $(txt).addClass(option.className);
		if(option.value) $(txt).val(option.value);
		return txt;	
	};

	components.div = function(option){
		var elem = document.createElement("div");
		if(option.className) $(elem).addClass(option.className);
		if(option.text) $(elem).text(option.text);	
		return elem;	
	};	
	
	components.h4 = function(option){
		var h4 = document.createElement("h4");
		if(option.text) $(h4).text(option.text);
		return h4;	
	};	
	return superMarket;	
})(window,jQuery,superMarket ||{});

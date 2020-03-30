var superMarket = (function(win,$,superMarket){
	components = superMarket.components = superMarket.components || {};
	components.weui_cells = function(){
		var weui_cells = document.createElement("div");
		$(weui_cells).addClass("weui-cells");
		return weui_cells;	
	};
	components.weui_cell = function(){
		var weui_cell = document.createElement("div");
		$(weui_cell).addClass("weui-cell");
		return weui_cell;	
	};
	components.weui_cell__hd = function(){
		var weui_cell__hd = document.createElement("div");
		$(weui_cell__hd).addClass("weui-cell__hd");
		return weui_cell__hd;	
	};	
	components.weui_cell__bd = function(){
		var weui_cell__bd = document.createElement("div");
		$(weui_cell__bd).addClass("weui-cell__bd");
		return weui_cell__bd;	
	};
	components.weui_cell__ft = function(){
		var weui_cell__ft = document.createElement("div");
		$(weui_cell__ft).addClass("weui-cell__ft");
		return weui_cell__ft;
	}
	return superMarket;	
})(window,jQuery,superMarket ||{});

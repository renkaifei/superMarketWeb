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
		if(option.className) $(h4).addClass(option.className);	
		if(option.text) $(h4).text(option.text);
		return h4;	
	};

	components.label = function(option){
		var label = document.createElement("label");
		if(option.className) $(label).addClass(option.className);
		if(option.text) $(label).text(option.text);	
		return label;	
	};
	

	components.button = function(option){
		var button = document.createElement("button");
		if(option.className) $(button).addClass(option.className);
		if(option.text) $(button).text(option.text);
		if(option.click) $(button).click(option.click);	
		return button;	
	};	

	components.i = function(option){
		var i = document.createElement("i");
		if(option.className)$(i).addClass(option.className);
		return i;	
	};

	components.a = function(option){
		var a = document.createElement("a");
		if(option.className) $(a).addClass(option.className);
		if(option.text) $(a).text(option.text);	
		if(option.href) $(a).prop("href",option.href);	
		return a	
	};

	components.p = function(option){
		var p = document.createElement("p");
		if(option.className) $(p).addClass(option.className);
		if(option.text) $(p).text(option.text);
		return p;	
	}	

	components.form = function(option){
		var form = document.createElement("form");
		if(option.className) $(form).addClass(option.className);
		return form;
	};	

	components.formItem = function(option){
		var cell = document.createElement("div");
		$(cell).addClass("weui-cell");
		if (option.head){
			var cellHD = document.createElement("div");
			$(cellHD).addClass("weui-cell__hd");	
			cell.appendChild(cellHD);
			cellHD.appendChild(option.head);
		}
		if (option.body){
			var cellBD = document.createElement("div");
			$(cellBD).addClass("weui-cell__bd");	
			cell.appendChild(cellBD);
			cellBD.appendChild(option.body);	
		}	
		if (option.foot){
			var cellFT =document.createElement("div");
			$(cellFT).addClass("weui-cell__ft");	
			cell.appendChild(cellFT);
			cellFT.appendChild(option.foot);	
		}		
		return cell;	
	};

	components.searchBar = function(callback){
		var searchBar = document.createElement("div");
		$(searchBar).addClass("weui-search-bar weui-search-bar_focusing");
		
		var searchBarForm = document.createElement("form");
		$(searchBarForm).addClass("weui-search-bar__form");	
		searchBar.appendChild(searchBarForm);

		var searchBarFormBox = document.createElement("div");
		$(searchBarFormBox).addClass("weui-search-bar__box");
		searchBarForm.appendChild(searchBarFormBox);

		var i1 = document.createElement("i")
		$(i1).addClass("weui-icon-search");
		searchBarFormBox.appendChild(i1);
		
		var searchInput = document.createElement("input");
		$(searchInput).addClass("weui-search-bar__input");
		$(searchInput).attr("type","search");
		$(searchInput).attr("placeholder","搜索");	
		searchBarFormBox.appendChild(searchInput);
		
		var searchCancel = document.createElement("a");
		$(searchCancel).addClass("weui-search-bar__cancel-btn");
		$(searchCancel).text("搜索");	
		$(searchCancel).click(function(){
			callback(searchInput.value);
		});	
		searchBar.appendChild(searchCancel);
	    return searchBar;
	}	

	return superMarket;	
})(window,jQuery,superMarket ||{});

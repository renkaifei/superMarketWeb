var superMarket = (function( superMarket,win,$){
	var util = superMarket.util = superMarket.util || {};
	util.getQueryVariable = function(variable){
		var query = win.location.search.substring(1);
		var queryVariables = query.split("&");
		for(var i =0;i<queryVariables.length;i++) {
			var pair = queryVariables[i].split("=");
			if(pair[0] == variable) return pair[1]
		}
		return ""	
	};
	util.showErrorMessage = function(errorMessage){
		var toast = document.createElement("div");
		toast.style.opactiy =1;

		var toast_mash = document.createElement("div");
		$(toast_mash).addClass("weui-mask_transparent");
		toast.appendChild(toast_mash);
		
		var toast_info = document.createElement("div");
		$(toast_info).addClass("weui-toast");
		toast.appendChild(toast_info);

		var p = document.createElement("p");
		$(p).addClass("weui-toast__content");
		p.innerText = errorMessage;
		toast_info.appendChild(p)
		document.body.appendChild(toast);
		$(toast).fadeIn(100);
		setTimeout(function(){
			$(toast).remove();
		},3000)
	};
	return superMarket;	
})(superMarket || {}, window,jQuery)

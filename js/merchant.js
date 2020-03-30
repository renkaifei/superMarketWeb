function merchant(){
	this.merchantId = "";
	this.merchantName = "";
	this.merchantAddress = "";
	this.socialCreditCode = "";
	this.merchantCEO = "";
	this.merchantAlias = "";	
}

merchant.prototype.getOne = function(merchantId,callback){
	var _self = this;
	$.ajax({
		url:"/merchant/selectById",
		type:"POST",
		contentType:"application/x-www-form-urlencoded",
		dataType:"json",	
		beforeSend:function(xmlhttp){
			goSessionId = sessionStorage.getItem("goSessionId");	
			xmlhttp.setRequestHeader("goSessionId",goSessionId);
		},
			data:{ merchantId:merchantId},
		success:function(data){
			_self.merchantId = data.MerchantId;
			_self.merchantName = data.MerchantName;
			_self.merchantCode = data.MerchantCode;
			_self.merchantAddress = data.MerchantAddress;
			_self.socialCreditCode = data.SocialCreditCode;
			_self.merchantCEO = data.MerchantCEO;
			_self.merchantAlias = data.MerchantAlias;
			if (callback) callback.call(_self);	
		},
		error:function(xmlhttp,statustext,errorthrown){
			superMarket.util.showErrorMessage(xmlhttp.responseText);
		}
	});
}

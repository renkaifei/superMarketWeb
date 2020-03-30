function goods(){
	this.goodsId = "";
	this.goodsName = "";
	this.goodsCode = "";
	this.goodsCategoryId = "";
	this.goodsBarCode = "";
	this.goodsMerchantId = "";	
}

function goodses(){
}

goodses.prototype.selectInMarchant = function(merchantId,callback){
	$.ajax({
		url:"/goods/selectInMerchant",
		type:"POST",
		contentType:"application/x-www-form-urlencoded",
		dataType:"json",
		data:{ "merchantId":merchantId},	
		beforeSend:function(xmlhttp){
			var goSessionId = sessionStorage.getItem("goSessionId");	
			xmlhttp.setRequestHeader("goSessionId",goSessionId);
		},
		success:function(data){
			var values = [];	
			for(var i =0;i<data.length;i++){
				var item = new goods();
				item.goodsId = data[i].GoodsId;
				item.goodsName = data[i].GoodsName;
				item.goodsCode = data[i].GoodsCode;
				item.goodsCategoryId = data[i].CategoryId;
				item.goodsBarCode = data[i].GoodsBarCode;
				item.goodsMerchantId = data[i].GoodsMerchantId;	
				values.push(item);	
			}	
			if(callback) callback.call(values);
		},
		error:function(xmlhttp,errorstatus,errorthrown){
			superMarket.util.showErrorMessage(xmlhttp.responseText);
		}	
	});
}


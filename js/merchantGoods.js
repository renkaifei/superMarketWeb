function merchantGoods(){
	this.merchantGoodsId = "";
	this.merchantId = "";
	this.goodsId ="";
	this.goodsName = "";	
	this.price = "";
	this.discount = "";	
};

merchantGoods.prototype.create = function(success,error){
	var _self = this;
	$.ajax({
		url:"/merchantGoods/create",
		type:"post",
		contentType:"application/x-www-form-urlencoded",
		dataType:"json",
		beforeSend:function(xmlhttp){
			var goSessionId = sessionStorage.getItem("goSessionId");
			xmlhttp.setRequestHeader("goSessionId",goSessionId)	
		},
		data:{
			goodsId:_self.goodsId,
			merchantId :_self.merchantId,
			price:_self.price,
			discount:_self.discount	
		},
		success:function(data){
			_self.merchantGoodsId = data.MerchantGoodsId;
			success(_self);	
		},
		error:error
	});	
}


merchantGoods.prototype.select = function(success,error){
	var _self = this;
	$.ajax({
		url:"/merchantGoods/select",
		contentType:"application/x-www-form-urlencoded",
		type:"post",
		dataType:"json",	
		beforeSend:function(xmlhttp){
			goSessionId = sessionStorage.getItem("goSessionId");
			xmlhttp.setRequestHeader("goSessionId",goSessionId);	
		},
		data:{
				merchantGoodsId:_self.merchantGoodsId
		},
		success:function(data){
			_self.merchantGoodsId = data.MerchantGoodsId;
			_self.merchantId = data.MerchantId;
			_self.goodsId = data.GoodsId;
	
			_self.price = data.Price;
			_self.discount = data.Discount;
			success(_self);	
		},
		error:error	
	});	
};

merchantGoods.prototype.update = function(success,error){
	var _self =this;
	$.ajax({
		url:"/merchantGoods/update",
		contentType:"application/x-www-form-urlencoded",
		type:"post",
		dataType:"json",
		beforeSend:function(xmlhttp){
			goSessionId = sessionStorage.getItem("goSessionId");
			xmlhttp.setRequestHeader("goSessionId",goSessionId);	
		},
		data:{ 
			merchantGoodsId:_self.merchantGoodsId,
			merchantId:_self.merchantId,
			goodsId:_self.goodsId,	
			price:_self.price,
			discount:_self.discount	
		},
		success:function(data){
			success(_self)
		},
		error:error	
	});	
};

merchantGoods.prototype.delete = function(success,error){
	var _self = this;
	$.ajax({
		url:"/merchantGoods/delete",
		type:"post",
		contentType:"application/x-www-form-urlencoded",
		beforSend:function(xmlhttp){
			var goSessionId = sessionStorage.getItem("goSessionId");
			xmlhttp.setRequestHeader("goSessionId",goSessionId);	
		},
		data:{ merchantGoodsId:_self.merchantGoodsId },
		success:function(data){
			success(_self);
		},
		error:error	
	});	
};

merchantGoods.prototype.selectByMerchantIdAndGoodsId = function(success,error){
	var _self = this;
	$.ajax({
		url :"/merchantGoods/selectByMerchantIdAndGoodsId",
		type:"post",
		dataType:"json",
		contentType:"application/x-www-form-urlencoded",
		beforeSend:function(xmlhttp){
			goSessionId = sessionStorage.getItem("goSessionId");
			xmlhttp.setRequestHeader("goSessionId",goSessionId);	
		},
			
		data:{ goodsId:_self.goodsId,merchantId:_self.merchantId },
		success:function(data){
			_self.merchantGoodsId = data.MerchantGoodsId;
			_self.price = data.Price;
			_self.discount = data.Discount;
			success(_self);	
		},
		error:error	
	});	
};

function merchantGoodses(){
	this.values = [];
	this.pageIndex= 1;
	this.pageSize = 50;
	this.totalCount = 0;	
};

merchantGoodses.prototype.selectByMerchantId = function(option,success,error){
	var _self = this;
	$.ajax({
		url:"/merchantGoods/selectPageByMerchantId",
		contentType:"application/x-www-form-urlencoded",
		type:"post",
		dataType:"json",	
		beforeSend:function(xmlhttp){
			goSessionId = sessionStorage.getItem("goSessionId");	
			xmlhttp.setRequestHeader("goSessionId",goSessionId);
		},
		data:{
			merchantId:option.merchantId,
			content:option.content,
			pageIndex:option.pageIndex,
			pageSize:option.pageSize	
		},
		success:function(data){
			_self.values.length = 0;
			_self.pageIndex= data.PageIndex;
			_self.pageSize = data.PageSize;
			_self.totalCount = data.TotalCount;		
			var length = data.Values.length;
			for(var i =0;i<length;i++){
				var item = new merchantGoods();
				item.merchantGoodsId = data.Values[i].MerchantGoodsId;
				item.merchantId = data.Values[i].MerchantId;
				item.goodsId = data.Values[i].GoodsId;
				item.goodsName = data.Values[i].GoodsName;
				item.price = data.Values[i].Price;
				item.discount = data.Values[i].Discount;	
				_self.values.push(item);	
			}
			success(_self);	
		},
		error:error	
	});	
};

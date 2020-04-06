function goods(){
	this.goodsId = "";
	this.goodsBarCode = "";	
	this.goodsName = "";
	this.goodsSpecification = "";
	this.goodsDescription = "";
	this.goodsTradeMark = "";
	this.company = "";	
};


goods.prototype.add = function(success,error){
	var _self = this;	
	$.ajax({
		url:"/goods/create",
		type:"post",
		beforeSend:function(xmlhttp){
			var goSessionId	= sessionStorage.getItem("goSessionId");
			xmlhttp.setRequestHeader("goSessionId",goSessionId);
		},	
		contentType:"application/x-www-form-urlencoded",
		dataType:"json",	
		data:{
			goodsBarCode:_self.goodsBarCode,
			goodsName:_self.goodsName,
			goodsSpecification:_self.goodsSpecification,
			goodsDescription:_self.goodsDescription,
			goodsTradeMark:_self.goodsTradeMark,
			company:_self.company	
		},
		success:success,
		error:error
	});
};

goods.prototype.selectById = function(success,error){
	var _self = this;
	$.ajax({
		url:"/goods/selectById",
		type:"post",
		beforeSend:function(xmlhttp){
			goSessionId = sessionStorage.getItem("goSessionId");
			xmlhttp.setRequestHeader("goSessionId",goSessionId);	
		},
		contentType:"application/x-www-form-urlencoded",
		dataType:"json",
		data:{
			goodsId:_self.goodsId
		},
		success:function(data){
			_self.goodsId = data.GoodsId;
			_self.goodsBarCode = data.GoodsBarCode;
			_self.goodsName = data.GoodsName;
			_self.goodsSpecification = data.GoodsSpecification;
			_self.goodsDescription = data.GoodsDescription;
			_self.goodsTradeMark = data.GoodsTradeMark;
			_self.company = data.Company;
			success(_self);
		},
		error:error	
	});
}

goods.prototype.update = function(success,error){
	var _self = this;
	$.ajax({
		url:"/goods/update",
		type:"post",
		beforeSend:function(xmlhttp){
			var goSessionId = sessionStorage.getItem("goSessionId");	
			xmlhttp.setRequestHeader("goSessionId",goSessionId);
		},
		contentType:"application/x-www-form-urlencoded",
		dataType:"json",	
		data:{
			goodsId:_self.goodsId,
			goodsBarCode:_self.goodsBarCode,	
			goodsName:_self.goodsName,
			goodsSpecification:_self.goodsSpecification,
			goodsDescription:_self.goodsDescription,
			goodsTradeMark:_self.goodsTradeMark,
			company:_self.company	
		},
		success:success,
		error:error	
	});	
}

goods.prototype.selectByBarCode = function(barCode,success,error){
	var _self = this;
	$.ajax({
		url:"/goods/selectByBarCode",
		type:"post",
		contentType:"application/x-www-form-urlencoded",
		dataType:"json",
		beforeSend:function(xmlhttp){
			goSessionId = sessionStorage.getItem("goSessionId");
			xmlhttp.setRequestHeader("goSessionId",goSessionId);	
		},
		data:{ barCode:barCode },
		success:function(data){
			_self.goodsId = data.GoodsId;
			_self.goodsName = data.GoodsName;
			_self.goodsBarCode = data.GoodsBarCode;
			_self.goodsSpecification = data.GoodsSpecification;
			_self.goodsDescription = data.GoodsDescription;
			_self.goodsTradeMark = data.GoodsTradeMark;
			_self.company = data.Company;
			success(_self);	
		},
		error:error	
	});
}

function goodses(){
	this.values =  [];
	this.pageIndex = 0;
	this.pageSize = 50;	
	this.totalCount = 0;	
}

goodses.prototype.selectOnePage = function(content,pageIndex,pageSize,callback){
	var _self = this;
	$.ajax({
		url:"/goods/selectOnePage",
		type:"POST",
		contentType:"application/x-www-form-urlencoded",
		dataType:"json",
		data:{pageIndex:pageIndex,pageSize:pageSize,content:content},
		beforeSend:function(xmlhttp){
			var goSessionId = sessionStorage.getItem("goSessionId");	
			xmlhttp.setRequestHeader("goSessionId",goSessionId);
		},
		success:function(ret){
			var length = ret.Values.length;	
			for(var i =0;i<length;i++){
				var item = new goods();
				item.goodsId = ret.Values[i].GoodsId;
				item.goodsBarCode = ret.Values[i].GoodsBarCode;	
				item.goodsName = ret.Values[i].GoodsName;
				item.goodsSpecification = ret.Values[i].GoodsSpecification;
				item.goodsDescription = ret.Values[i].GoodsDescription;
				item.goodsTradeMark = ret.Values[i].GoodsTradeMark;
				item.company = ret.Values[i].Company;	
				_self.values.push(item);	
			}
			_self.pageIndex = ret.pageIndex;
			_self.pageSize = ret.PageSize;
			_self.totalCount = ret.TotalCount;	
			if(callback) callback.call(_self);
		},
		error:function(xmlhttp,errorstatus,errorthrown){
			superMarket.util.showErrorMessage(xmlhttp.responseText);
		}	
	});
}


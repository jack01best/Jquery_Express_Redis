$(document).ready(function() {

	$.getJSON("http://localhost:3000/allItems.json", function(allItems) {
		$.getJSON("http://localhost:3000/promotions.json", function(promotions) {
			// var item = JSON.parse(localStorage.getItem("item"));
			// console.log(item);

			// var product = printInventory(item, allItems, promotions);
			// console.log(product[2]);
			// view_mode_str = generate_view_product_str(product);
			// $('#product_table > tbody:last-child').append(view_model_str);


			var itemCode = $(this).closest('.button').data('barcode');
			console.log("PUSH2");
			$.ajax({
			    url : 'http://localhost:3000/checkout.html',
			    type : 'POST',
			    //data : {"barcode":itemCode},
			    //dataType: "json",
			    success : function(data) {
					var product = printInventory(data, allItems, promotions);
					// console.log(product[2]);
					// view_mode_str = generate_view_product_str(product);
					// $('#product_table > tbody:last-child').append(view_model_str);
					view_model_template = view_model_template_generator(product);
					var str = '';
					var compiled = _.template('<tr><% _.forEach(users, function(user) { %><th><%- user %></th><% }); %></tr>');
					for(var i = 0; i < view_model_template.length; i++){
							str += compiled({ 'users': view_model_template[i]});
					    }
					$('#product_table > tbody:last-child').append(str);
				}

			});
			console.log("PUSH3");
			
	 	})
	 })

	// $.ajax({
 //        type : 'GET',
 //        dataType : 'json',
 //        url: 'http://localhost:3000/allItems.json',
 //        success : function(allItems) {
 //        	$.ajax({
	// 	        type : 'GET',
	// 	        dataType : 'json',
	// 	        url: 'http://localhost:3000/promotions.json',
	// 	        success : function(promotions) {
	// 	        	var item = JSON.parse(localStorage.getItem("item"));
	// 				console.log(item);
	// 				var product = printInventory(item, allItems, promotions);
	// 				console.log(product);
	// 				view_mode_str = generate_view_product_str(product);
	// 				$('#product_table > tbody:last-child').append(view_model_str);
	// 	        }
 //    		});
 //        }
 //    });




	// $.getJSON("promotions.json", function(data1) {

	//  })
	 
/*
	var item = JSON.parse(localStorage.getItem("item"));
	console.log(item);

	var product = printInventory(item);
	console.log(product[2]);
	
	for(var i = 0; i < product[0].length; i++){
		var name = product[0][i].name;
		var amount = product[0][i].amount;
		var price = product[0][i].price;
		var unit = product[0][i].unit;
		var promotion = product[0][i].promotion;
		var total = price * amount - promotion;

		$('#product_table > tbody:last-child').append('<tr><th>'+name
			+'</th>'+'<th>'+amount+unit+'</th>'+'<th>¥'+price+'</th>'
			+'<th>¥'+total+'</th></tr>');
	}

	for(var i = 0; i < product[1].length; i++){
		var name = product[1][i].name;
		var amount = product[1][i].amount;
		var unit = product[1][i].unit;

		$('#promotion_table > tbody:last-child').append('<tr><th>'+name
			+'</th>'+'<th>'+amount+unit+'</th></tr>');
	}

	for(var i = 0; i < product[2].length; i++){
		var price = product[2][i].total_price;
		var saving = product[2][i].total_savings;

		$('#saving_table > tbody:last-child').append('<tr><th>¥'+price
			+'</th>'+'<th>¥'+saving+'</th></tr>');
	}


*/


/*
	function printInventory(input){
	var items = loadAllItems();
	var promotion = loadPromotions();
	var product = [];

	for(var i = 0; i < input.length; i++){
		var barcode=input[i];
		extract_product_info(barcode, items, product, promotion);
	}
	//console.log(product);
	var product_gift = gift(product);
	console.log(product_gift);
	var total_saving = total(product);
	//console.log(total_saving);
	//print_list(product, product_gift, total_saving);
	return [product, product_gift, total_saving];
}

function print_list(product, product_gift, total_saving){
	var str_out = '***<没钱赚商店>购物清单***\n';
	for(var i = 0; i < product.length; i++){
		str_out += '名称：' + product[i].name;
		str_out += '，数量：' + product[i].amount+product[i].unit;
		str_out += '，单价：' + product[i].price.toFixed(2);
		str_out += '(元)，小计：'+ (product[i].price * product[i].amount - product[i].promotion).toFixed(2); 
		str_out += '(元)\n';
	}
	str_out += '----------------------\n';
	str_out += '挥泪赠送商品：\n';
	for(var i = 0; i < product_gift.length; i++){
		str_out += '名称：' + product_gift[i].name;
		str_out += '，数量：' + product_gift[i].amount;
		str_out += product_gift[i].unit+'\n';
	}

	str_out += '----------------------\n';

	for(var i = 0; i < total_saving.length; i++){
		str_out += '总计：' + total_saving[i].total_price.toFixed(2)+'(元)\n';
		str_out += '节省：' + total_saving[i].total_savings.toFixed(2)+'(元)\n';
		str_out += '**********************';
	}
	console.log(str_out);

}

function newbarcode_generator(barcode){
	var newbarcode ='';
	for(var i = 0; i < barcode.length; i++){
		if(barcode[i] == '-'){
			
			break;
		}
		newbarcode += barcode[i];
	}
	return newbarcode;
}

function count_number(barcode){
	if(barcode[10] == '-'){
		return barcode[11];
	}
	return 1;
}

function is_exist(product, name){
	for(var i = 0; i < product.length; i++){
		if(product[i].name == name){
			return i;
		}
	}
	return -1;
}

function product_into_array(items, newbarcode){
	var name = "";
	var amount = 1;
	var price = 0;
	var unit = "";
	var promotion = 0;
	for(var i = 0; i < items.length; i++){
		if(items[i].barcode == newbarcode){
			name = items[i].name;
			amount = 1;
			price = items[i].price;
			unit = items[i].unit;
			promotion = 0;
		}
	}
	return {'name':name,'amount':amount,'price':price,'unit':unit,'promotion':promotion};
}

function extract_product_info(barcode, items, product, promotion_code){
	var newbarcode = newbarcode_generator(barcode);
	var number = count_number(barcode);
	var two_product = product_into_array(items, newbarcode);
	var find = is_exist(product, two_product['name']);
	change_info(two_product, find, number, product, newbarcode, promotion_code);
}

function change_info(one_product, find, number, product, newbarcode, promotion_code){
	if(find == -1){
		one_product.amount = number;
		product.push(one_product);
	}
	else{
		product[find].amount+= number;
		if(product[find].amount%3 == 0 && is_promotion(newbarcode, promotion_code) == true){
			product[find].promotion += product[find].price;
		}
	}
}

function gift(product){
	var product_gift=[];
	for(var i = 0; i < product.length; i++){
		if(product[i].promotion != 0){
			product_gift.push({'name':product[i].name, 'amount':product[i].promotion/product[i].price, 'unit':product[i].unit});
		}
	}
	return product_gift;
}

function total(product){
	var total_list = [];
	var total_price = 0;
	var total_savings = 0;
	for(var i = 0; i < product.length; i++){
		total_price += product[i].price * product[i].amount - product[i].promotion;
		total_savings += product[i].promotion;
	}
	total_list.push({'total_price':total_price, 'total_savings':total_savings});
	return total_list;
};


function is_promotion(barcode, promotion){
	for(var i = 0; i < promotion.length; i++){
		for(var j = 0; j < promotion[i].barcodes.length; j++){
			if(barcode == promotion[i].barcodes[j]){
				return true;
			}
		}
	}
	return false;
}


inputs = [
            'ITEM000001',           
            'ITEM000001',
           	'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];


function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}



function loadPromotions() {
    return [
        {
            type: 'BUY_TWO_GET_ONE_FREE',
            barcodes: [
                'ITEM000000',
                'ITEM000001',
                'ITEM000005'
            ]
        }
    ];
}
*/

});
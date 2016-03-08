function generate_view_product_str(product) {
	view_model_str = '<tr><th>'+'Name'+'</th>'+'<th>'+'Amount'+'</th>'
					+'<th>'+'Unit Price'+'</th>'+'<th>¥'+'Total'+'</th></tr>';
	view_model_str += product_view_model_generator(product);			

	view_model_str +='<tr><th></th><th></th><th></th><th></th></tr><tr><th>'+'Gift Name'
				   +'</th>'+ '<th>'+'</th>'+'<th>'+'</th>'+'<th>'+'Gift Amount'+'</th></tr>';	
	view_model_str += gift_view_model_generator(product);

	view_model_str += '<tr><th></th><th></th><th></th><th></th></tr><tr></tr><tr><th>'+'Total Price'
				   +'</th>'+'<th>'+'</th>'+'<th>'+'</th>'+'<th>'+'Total Saving'+'</th></tr>';	
	view_model_str += total_saving_view_model_generator(product);

	return view_model_str;
}



function product_view_model_generator(product) {
	var str = '';
	for(var i = 0; i < product[0].length; i++){
		var name = product[0][i].name;
		var amount = product[0][i].amount;
		var price = product[0][i].price;
		var unit = product[0][i].unit;
		var promotion = product[0][i].promotion;
		var total = price * amount - promotion;

		str += '<tr><th>'+name+'</th>'+'<th>'+amount+unit+'</th>'
			+'<th>¥'+price+'</th>'+'<th>¥'+total+'</th></tr>';
	}
	return str;
}

function gift_view_model_generator(product) {
	var str = '';
	for(var i = 0; i < product[1].length; i++){
		var name = product[1][i].name;
		var amount = product[1][i].amount;
		var unit = product[1][i].unit;

		str += '<tr><th>'+name+'</th>'+ '<th>'+'</th>'+'<th>'+'</th>'
			+'<th>'+amount+unit+'</th></tr>';
	}
	return str;
}

function total_saving_view_model_generator(product) {
	var str = '';
	for(var i = 0; i < product[2].length; i++){
		var price = product[2][i].total_price;
		var saving = product[2][i].total_savings;

		str +='<tr><th>¥'+price+'</th>'+'<th>'+'</th>'
			+'<th>'+'</th>'+'<th>¥'+saving+'</th></tr>';
	}	
	return str;
}
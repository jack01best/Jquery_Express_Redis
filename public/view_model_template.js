function view_model_template_generator(product) {
	var view_model_template = [];
	product_view_model_template(view_model_template, product); 
	gift_view_model_template(view_model_template, product);
	total_saving_view_model_template(view_model_template, product);
	return view_model_template;
}



function product_view_model_template(template, product) {
	template.push(['Name', 'Amount','Unit Price','Total']);

	for(var i = 0; i < product[0].length; i++){
		var name = product[0][i].name;
		var amount = String(product[0][i].amount);
		var price = product[0][i].price;
		var unit = product[0][i].unit;
		var promotion = product[0][i].promotion;
		var total = price * amount - promotion;

		template.push([name, amount+unit, '¥'+price, '¥'+total]);
	}
	//console.log(template);
}

function gift_view_model_template(template, product) {
	template.push(['', '', '', ''],['Gift Name', '','','Gift Amount']);

	for(var i = 0; i < product[1].length; i++){
		var name = product[1][i].name;
		var amount = String(product[1][i].amount);
		var unit = product[1][i].unit;
		template.push([name, '', '', amount+unit]);
		
	}
}

function total_saving_view_model_template(template, product) {
	template.push(['', '', '', ''],['Total Price', '','','Total Saving']);
	for(var i = 0; i < product[2].length; i++){
		var price = product[2][i].total_price;
		var saving = product[2][i].total_savings;

		template.push(['¥'+price, '', '', '¥'+saving]);
	}	
}
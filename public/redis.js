$(document).ready(function() {	
	$('.button').on('click', function(){
		var itemCode = $(this).closest('.button').data('barcode');
		console.log("PUSH0");
		$.ajax({
		    url : 'http://localhost:3000/',
		    type : 'POST',
		    data : {"barcode":itemCode},
		    //dataType: "json",
		    success : function(data) {
		        //alert(data);
		    }
		});
		console.log("PUSH1");

	});	


	// $('#request_button').on('click', function(){
	// 	var itemCode = $(this).closest('.button').data('barcode');
	// 	console.log("PUSH2");
	// 	$.ajax({
	// 	    url : 'http://localhost:3000/checkout.html',
	// 	    type : 'POST',
	// 	    //data : {"barcode":itemCode},
	// 	    //dataType: "json",
	// 	    success : function(data) {
	// 	        console.log("ANYWAY");
	// 	        console.log(data);//alert(data);
	// 	        data.push("ITEM000000");
	// 	        console.log(data);
	// 	    }
	// 	});
	// 	console.log("PUSH3");
	// });	

});
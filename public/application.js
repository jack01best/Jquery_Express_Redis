$(document).ready(function() {
	
	$('.button').on('click', function(){
        // var item = [];
        // var itemCode = $(this).closest('.button').data('barcode');                
        // if(localStorage.item){
        //     item = JSON.parse(localStorage.getItem("item"));
        // }
        // item.push(itemCode);  
        // console.log(item);
        // localStorage.setItem("item",JSON.stringify(item));   
	});

    $('#cola_button').on('click', function(){
        if (localStorage.cola_count) {
            localStorage.cola_count = Number(localStorage.cola_count)+1;
        } else {
            localStorage.cola_count = 1;
        }       
        $("#cola_number").text(" (My Cart: "+localStorage.cola_count+")");
    });

    
	$('#apple_button').on('click', function(){
		if (localStorage.apple_count) {
            localStorage.apple_count = Number(localStorage.apple_count)+1;
        } else {
            localStorage.apple_count = 1;
        }       
        $("#apple_number").text(" (My Cart: "+localStorage.apple_count+")");
	});

	$('#noodle_button').on('click', function(){
		if (localStorage.noodle_count) {
            localStorage.noodle_count = Number(localStorage.noodle_count)+1;
        } else {
            localStorage.noodle_count = 1;
        }
        $("#noodle_number").text(" (My Cart: "+localStorage.noodle_count+")");
         
	});

	$('#sprite_button').on('click', function(){
		if (localStorage.sprite_count) {
            localStorage.sprite_count = Number(localStorage.sprite_count)+1;
        } else {
            localStorage.sprite_count = 1;
        }
        $("#sprite_number").text(" (My Cart: "+localStorage.sprite_count+")");    
	});

	$('#litchi_button').on('click', function(){
		if (localStorage.litchi_count) {
            localStorage.litchi_count = Number(localStorage.litchi_count)+1;
        } else {
            localStorage.litchi_count = 1;
        }
         $("#litchi_number").text(" (My Cart: "+localStorage.litchi_count+")");
	});

	$('#battery_button').on('click', function(){
		if (localStorage.battery_count) {
            localStorage.battery_count = Number(localStorage.battery_count)+1;
        } else {
            localStorage.battery_count = 1;
        }
         $("#battery_number").text(" (My Cart: "+localStorage.battery_count+")");
	});

    if(localStorage.cola_count){
        $("#cola_number").text(" (My Cart: "+localStorage.cola_count+")"); 
    }

    if(localStorage.apple_count){
        $("#apple_number").text(" (My Cart: "+localStorage.apple_count+")"); 
    }

    if(localStorage.noodle_count){
        $("#noodle_number").text(" (My Cart: "+localStorage.noodle_count+")");
    }

    if(localStorage.sprite_count){
        $("#sprite_number").text(" (My Cart: "+localStorage.sprite_count+")"); 
    }

    if(localStorage.litchi_count){
        $("#litchi_number").text(" (My Cart: "+localStorage.litchi_count+")");
    }

    if(localStorage.battery_count){
        $("#battery_number").text(" (My Cart: "+localStorage.battery_count+")");
    }
	/*
	$('.apple_button').on('click', function(){
        var itemCode = $(this).closest('.apple_button').data('barcode');
        item.push(itemCode);   
	});

	$('.noodle_button').on('click', function(){
        var itemCode = $(this).closest('.noodle_button').data('barcode');
        item.push(itemCode);   
	});

	$('.sprite_button').on('click', function(){
        var itemCode = $(this).closest('.sprite_button').data('barcode');
        item.push(itemCode);   
	});

	$('.litchi_button').on('click', function(){
        var itemCode = $(this).closest('.litchi_button').data('barcode');
        item.push(itemCode);   
	});

	$('.battery_button').on('click', function(){
        var itemCode = $(this).closest('.battery_button').data('barcode');
        item.push(itemCode);   
	});
*/

	
});





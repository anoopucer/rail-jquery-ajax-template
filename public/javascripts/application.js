// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
  
// HTML
$('#get-html').click(function() {
	$('#html-here').load('/tests/grab_html');
});    
// XML       
$('#get-xml').click(function() {
	$.get('/tests/grab_xml', function(xml){
		var info = $(xml).find('info').text();
	    $('#xml-here').html('<p>'+info+'</p>');
	}, "xml");	
});   
// JSON
$('#get-json').click(function() {
	$.getJSON('/tests/grab_json', function(json){
	    $('#json-here').html('<p>'+json.info+'</p>');
	});
});     
// Script
$('#get-script').click(function() {                           
	$.ajax({
	  url: "/tests/grab_script",
	  type: "GET",
	  dataType: "script"
	});  
});    
// Clear out all text    
$('#clear-all').click(function() {
	$('div').empty();
});
$("form#get-messages").submit(function () { return false; }); // so it won't submit  
// Update text record
$("form#put-message").submit(function () {
	var text = $('input#text-message').val();
	
	$.ajax({
		url: "/tests/put_message", 
		type: "PUT",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		success: function() { 
			$.getJSON('/tests/grab_message', function(json) {
		    $('#message-here').html('<p>'+json.info+'</p>');
			});
		},    
		error: function() { 
			$('#message-here').html('<p class="error">Error getting message</p>'); 
		},
		data: JSON.stringify({ _method: "PUT", "message":{"title":"TEXT", "info":text }})
	}); 
	
	return false;
});      

          
                                                  
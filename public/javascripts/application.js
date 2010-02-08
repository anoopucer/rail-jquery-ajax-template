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
$("form").submit(function () { return false; }); // so it won't submit
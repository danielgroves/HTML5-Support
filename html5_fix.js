/*
	Original file by Nathan Davies (http://nathandavies.co.uk/)
	
	Updated by Daniel Groves

	All HTML5 mark-up elements have been applied to this script using the following source:
		http://www.w3schools.com/html5/html5_new_elements.asp [Last checked: 8th March 2011].
*/

	
	
	// Create array for all HTML5 elements.
	var HTML5_Elements = [
							'article', 
							'aside', 
							'command', 
							'details', 
							'summary', 
							'figure', 
							'figcaption', 
							'footer',
							'header',  
							'hgroup', 
							'mark', 
							'meter', 
							'nav', 
							'progress', 
							'ruby', 
							'rt', 
							'rp', 
							'section',
							'time', 
							'wbr'
							];
	
	
	// Create the element for all HTML5 elements.
	for (var i = 0; i < HTML5_Elements.length; i++)
	{
		document.createElement(HTML5_Elements[i]);
	}
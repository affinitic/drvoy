jQuery(function($){
    $.supersized({
	    // Functionality
		slide_interval : 4000,		// Length between transitions
		transition : 1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		random : 1,
		transition_speed : 2000,		// Speed of transition

		// Components
		slide_links : 'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides:[
		        {image : 'drvoy_bg_01.jpg'},
		        {image : 'drvoy_bg_02.jpg'},
		        {image : 'drvoy_bg_03.jpg'},
		        {image : 'drvoy_bg_04.jpg'},
		        {image : 'drvoy_bg_05.jpg'},
		        {image : 'drvoy_bg_06.jpg'},
		        {image : 'drvoy_bg_07.jpg'},
		        {image : 'drvoy_bg_08.jpg'},
		        {image : 'drvoy_bg_09.jpg'},
		        {image : 'drvoy_bg_10.jpg'},
		        {image : 'drvoy_bg_11.jpg'}
		        ]
		});
	});
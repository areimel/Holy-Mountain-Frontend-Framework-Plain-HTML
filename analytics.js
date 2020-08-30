/********************************************
*********************************************

Holy Mountain | Analytics

*********************************************
********************************************/



/********************************************

INITIALIZATION

********************************************/
$(document).ready(function() {

	var message = '---Holy Mountain Analytics initialized.---';
	$('html').hm_console_log(message);

	var gtm_detect = 0;
	$('script').each(function() {
		if($(this).text("https://www.googletagmanager.com/gtm.js?id=")){
			gtm_detect = 1;
			return false;
		}
	});

	if(gtm_detect == 1){
		var message = 'GTM script detected.';
		$('html').hm_console_log(message);
	} else {
		var message = 'No GTM script detected.  Double check GTM installation.';
		$('html').hm_console_log(message);
	}
});



/********************************************

GA EVENTS - MAIN 

Example:

data-event="GAEvent" data-category="Home" data-label="CTA" data-action="Click" data-value="undefined"

- 	The above code should be pasted into the opening tag, as data-attributes,
	of whatever element you want to put a click event on.
	The below codes then grabs the data attributes you've set,
	and pipes it through GTM and GA

********************************************/
$(document).ready(function(){


	$.fn.eventfire_init = function(){

		$("[data-event='GAEvent']").click(function() {
			var evCat = $(this).attr('data-category') 	? $(this).attr('data-category') : '',
				evAct = $(this).attr('data-action') 	? $(this).attr('data-action') : '',
				evLab = $(this).attr('data-label') 		? $(this).attr('data-label') : '',
				evVal = $(this).attr('data-value') 		? $(this).attr('data-value') : '';

				try {

					window.dataLayer = window.dataLayer || [];
					dataLayer.push({
						'event': 'GAEvent',
						'eventCategory': evCat,
						'eventAction': evAct,
						'eventLabel': evLab,
						'eventValue': evVal,
					});
					
					var message = 'Holy Mountain Analytics - GA Event fired - Event Category: ['+evCat+'], Event Label: ['+evLab+'], Event Action: ['+evAct+']';
					$('html').hm_console_log(message);

				} catch (e) {
					var message = 'GA Event Error';
					$('html').hm_console_log(message);
				}
		});

	};

});


/********************************************

GA AUTO-TAGGER - PLUGIN VERSION

********************************************/

$(document).ready(function() {


	/***** PLUGIN FUNCTION - targets specific elements *****/
		$.fn.autotagger = function(category, action, value) {
		    
			$(this).each(function(){
				if($(this).attr('data-event')){
					//nothing - already tagged
				} else {

					//console.log notification
						var message = 'Holy Mountain Analytics - GA Auto-Tagger - element tagged - category: '+category;
						$('html').hm_console_log_2(message);
					//label grabber
						if($(this).children().is('img')){
							var label = $(this).attr('alt');
						} else if($(this).text() == "") {
							var label = $(this).attr('aria-label');
						} else {
							var label = $(this).text();
						}
					//label formatter
						label = label.replace(/\ /g, "-");
					
					$(this).attr('data-event', 'GAEvent');
					$(this).attr('data-category', category);
					$(this).attr('data-label', label);
					$(this).attr('data-action', action);
					$(this).attr('data-value', value);

				}
			});

		};

});




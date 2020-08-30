/********************************************
********************************************

JAWN DEV TOOLKIT - JS FILE

Contents:
	- Toolkit Menu
	- GA Event Viewer

********************************************
********************************************/

/********************************************

Dev Toolkit Menu	
	
	- Menu control code
	- Menu creation code

********************************************/



$(document).ready(function(){

	var toolkit_version = "0.1"

	var console_styling = "background:#fb0000; color:#fff; padding:5px 15px; font-size:18px;";

	console.log('Jawn Dev Toolkit Initialized');

	var dev_menu_code = '\
	<div id="dev_toolkit">\
		\
		<div class="icon">\
			<div class="accent"></div>\
			<i class="fas fa-code"></i>\
		</div>\
		\
		<div class="version">\
			<p>Jawn Dev Toolkit v'+toolkit_version+'</p>\
		</div>\
		\
		<div class="menu">\
			\
			<div class="menu_cell" data-toolkit-var="--toolkit_ADA">\
				<i class="fab fa-accessible-icon"></i>\
				<p>Dev ADA Checker</p>\
			</div>\
			\
			<div class="menu_cell" data-toolkit-var="--toolkit_gaevents">\
				<i class="far fa-file-code"></i>\
				<p>GA Event Checker</p>\
			</div>\
			\
			<div class="menu_cell" data-toolkit-var="--toolkit_insecure_content">\
				<i class="fas fa-user-secret"></i>\
				<p>Insecure Content</p>\
			</div>\
			\
		</div>\
		\
	</div>\
	';

	$("body").append(dev_menu_code);
	console.log('Jawn Dev Toolkit Active');
});

$(document).ready(function(){
	var console_styling = "background:#fb0000; color:#fff; padding:5px 15px; font-size:18px;";

	$("#dev_toolkit .menu_cell").click(function(){
		var toolkit_var = $(this).attr("data-toolkit-var");

		if($("html").hasClass(toolkit_var)){
			$("html").removeClass(toolkit_var);
			$("#dev_toolkit").removeClass('active');
			$(this).removeClass('active');
		} else {
			$("html").addClass(toolkit_var);
			$("#dev_toolkit").addClass('active');
			$(this).addClass('active');
		}
	});

});



/********************************************

GA EVENTS VIEWER
	
	- creates a tooltip containing GA event details


	data-category="Header" 
	data-action="Click" 
	data-label="Logo"
	data-value="undefined" 
	data-event="GAEvent" 


********************************************/
$(document).ready(function(){
	var console_styling = "background:#fb0000; color:#fff; padding:5px 15px; font-size:18px;";

	$("#dev_toolkit .menu_cell").click(function(){
		if( $('html').hasClass('--toolkit_gaevents') ){

			//console.clear(); //clears console

			//GA TOOLTIPS
				$('.--toolkit_gaevents a[data-event]').each(function(){
					var category = $(this).attr('data-category') ? $(this).attr('data-category') : '<span style="color:red; text-decoration:underline;">NOT SET</span>';
					var action = $(this).attr('data-action') ? $(this).attr('data-action') : '<span style="color:red; text-decoration:underline;">NOT SET</span>';
					var label = $(this).attr('data-label') ? $(this).attr('data-label') : '<span style="color:red; text-decoration:underline;">NOT SET</span>';
					var value = $(this).attr('data-value') ? $(this).attr('data-value') : '<span style=""></span>';
					var href = $(this).attr('href') ? $(this).attr('href') : 'NULL';

					$(this).parent().append("<p class='ga_viewer_tooltip'>GA EVENT <br> href = "+href+" <br> category = "+category+"<br> label = "+label+"<br> action = "+action+"<br>  value = "+value+"<br> <i class='fas fa-chevron-down'></i></p>");
					console.log("GA Event found - Event Category: ["+category+"], Event Label: ["+label+"]");
				});

			//GA WARNINGS
				$('.--toolkit_gaevents a:not([data-event])').each(function(){
					$(this).parent().append("<p class='ga_viewer_tooltip'>NO GA EVENT SET<i class='fas fa-chevron-down'></i></p>");
				});

				$('.--toolkit_gaevents button:not([data-event])').each(function(){
					$(this).parent().append("<p class='ga_viewer_tooltip'>NO GA EVENT SET<i class='fas fa-chevron-down'></i></p>");
				});

				$('.--toolkit_gaevents input[type="submit"]:not([data-event])').each(function(){
					$(this).parent().append("<p class='ga_viewer_tooltip'>NO GA EVENT SET<i class='fas fa-chevron-down'></i></p>");
				});

		} else {
			$('.ga_viewer_tooltip').remove();
		}

	});

});







/********************************************

ADA Compliance

********************************************/
$(document).ready(function(){
	var console_styling = "background:#fb0000; color:#fff; padding:5px 15px; font-size:18px;";

	$("#dev_toolkit .menu_cell").click(function(){
		if( $('html').hasClass('--toolkit_ADA') ){

			//ADA plugin is mainly CSS
			//Add any future JS code here

			console.clear();

			var ada_error_alert = '\
			<div class="ada_error_alert" style="top:[pos]px;">\
				<div class="icon">[icon]</div>\
				<p class="copy">[copy]</p>\
			</div>\
			';

			var ada_error_alert_reset = '\
			<div class="ada_error_alert" style="top:[pos]px;">\
				<div class="icon">[icon]</div>\
				<p class="copy">[copy]</p>\
			</div>\
			';

			//Title tag check
			if (document.title != "") {
				//do nothing
			}else{
				
				ada_error_alert = ada_error_alert.replace('[icon]', '<i class="fas fa-exclamation-triangle"></i>');
				ada_error_alert = ada_error_alert.replace('[copy]', 'Title tag');
				ada_error_alert = ada_error_alert.replace('[pos]', '50');
				$('body').append(ada_error_alert);
				console.log('%ctitle missing', console_styling);
				ada_error_alert = ada_error_alert_reset;
			}

			//description tag check
			if ($("meta[name='description']").attr("content") != "") {
				//do nothing
			}else{
				
				ada_error_alert = ada_error_alert.replace('[icon]', '<i class="fas fa-exclamation-triangle"></i>');
				ada_error_alert = ada_error_alert.replace('[copy]', 'Description tag');
				ada_error_alert = ada_error_alert.replace('[pos]', '100');
				$('body').append(ada_error_alert);
				console.log('%cdescription missing', console_styling);
				ada_error_alert = ada_error_alert_reset;
			}

			//viewport tag check
			if ($("meta[name='viewport']").attr("content") != "width=device-width,initial-scale=1") {
				ada_error_alert = ada_error_alert.replace('[icon]', '<i class="fas fa-exclamation-triangle"></i>');
				ada_error_alert = ada_error_alert.replace('[copy]', 'Viewport tag');
				ada_error_alert = ada_error_alert.replace('[pos]', '150');
				$('body').append(ada_error_alert);
				console.log('%cviewport missing', console_styling);
				ada_error_alert = ada_error_alert_reset;
			}else{
				//do nothing
			}

		}else{
			$('.ada_error_alert').remove();
		}

	});

});



/********************************************

Insecure Content Checker	

********************************************/
$(document).ready(function(){
	var console_styling = "background:#fb0000; color:#fff; padding:5px 15px; font-size:18px;";
	$("#dev_toolkit .menu_cell").click(function(){
		if( $('html').hasClass('--toolkit_insecure_content') ){
			
			$('img').each(function(){
				var img_src = $(this).attr('src');
				if(img_src.indexOf("https") >= 0 || img_src.indexOf("data:image") >= 0){
					//do nothing
				}else{
					$(this).addClass("insecure_content_error");
					console.log("%cInsecure content found: img element, src='"+img_src+"'", console_styling);
				}
			});

			$('[style]').each(function(){
				var img_src = $(this).css('background-image');
				if(img_src.indexOf("https") >= 0 || img_src.indexOf("data:image") >= 0){
					//do nothing
				}else{
					$(this).addClass("insecure_content_error");
					console.log("%cInsecure content found: css image element, src='"+img_src+"'", console_styling);
				}
			});

		} 
	});
});


/********************************************

Launch Checklist	

********************************************/
$(document).ready(function(){
	var console_styling = "background:#fb0000; color:#fff; padding:5px 15px; font-size:18px;";

/*
	

	var launch_checklist_code = '';

	$("body").append(launch_checklist_code);

	var obj = JSON.parse(localStorage.getItem('dev_launch_checklist'));


	//run through and set vars from storage
		$("#launch_checklist_form input[name='rackspace_cdn']").val(obj['rackspace_cdn']);
		$("#launch_checklist_form input[name='cdn_ttl']").val(obj['cdn_ttl']);
		$("#launch_checklist_form input[name='liquid_web_db']").val(obj['liquid_web_db']);
		$("#launch_checklist_form input[name='backups']").val(obj['backups']);

		$("#launch_checklist_form input[name='favicon']").val(obj['favicon']);
		$("#launch_checklist_form input[name='proper_naming']").val(obj['proper_naming']);
		$("#launch_checklist_form input[name='js_bottom']").val(obj['js_bottom']);
		$("#launch_checklist_form input[name='insecure_content']").val(obj['insecure_content']);
		$("#launch_checklist_form input[name='htaccess_caching']").val(obj['htaccess_caching']);
*/

	/*$("#launch_checklist_form input").each(function(){
		var name = $(this).attr('name');
		$(this).val() = ;
	});*/
	
/*
	$( "#launch_checklist_form input" ).change(function() {

		//run through and grab vars
		var rackspace_cdn 		= 	$("#launch_checklist_form input[name='rackspace_cdn']").val();
		var cdn_ttl 			= 	$("#launch_checklist_form input[name='cdn_ttl']").val();
		var liquid_web_db 		= 	$("#launch_checklist_form input[name='liquid_web_db']").val();
		var backups				= 	$("#launch_checklist_form input[name='backups']").val();

		var favicon 			= 	$("#launch_checklist_form input[name='favicon']").val();
		var proper_naming 		= 	$("#launch_checklist_form input[name='proper_naming']").val();
		var js_bottom 			= 	$("#launch_checklist_form input[name='js_bottom']").val();
		var insecure_content	= 	$("#launch_checklist_form input[name='insecure_content']").val();
		var htaccess_caching 	= 	$("#launch_checklist_form input[name='htaccess_caching']").val();



		var obj = {
		    rackspace_cdn: 		rackspace_cdn,
		    cdn_ttl: 			cdn_ttl,
		    liquid_web_db: 		liquid_web_db,
		    backups: 			backups,
		    favicon: 			favicon,
		    proper_naming: 		proper_naming,
		    js_bottom: 			js_bottom,
		    insecure_content: 	insecure_content,
		    htaccess_caching: 	htaccess_caching
		};

		localStorage.setItem('dev_launch_checklist', JSON.stringify(obj));

	});
	
*/
});
	/*  Wizard */
	// Chose here which method to send the email by changing the path here $('form#wrapped').attr('action', 'phpmailer/reserve_template_email.php'); available mehtods:
	// Phpmaimer text/html > phpmailer/reserve.php
	// PHPmailer with html template > phpmailer/reserve_template_email.php (default)
	// PHPmailer with html template SMTP > phpmailer/reserve_template_email_smtp.php

	jQuery(function ($) {
		"use strict";
		$('form#wrapped').attr('action', 'phpmailer/reserve_template_email.php');
		$("#wizard_container").wizard({
			stepsWrapper: "#wrapped",
			submit: ".submit",
			beforeSelect: function (event, state) {
				if ($('input#website').val().length != 0) {
					return false;
				}
				if (!state.isMovingForward)
					return true;
				var inputs = $(this).wizard('state').step.find(':input');
				return !inputs.length || !!inputs.valid();
			}
		}).validate({
			errorPlacement: function (error, element) {
				if (element.is(':radio') || element.is(':checkbox')) {
					error.insertBefore(element.next());
				} else {
					error.insertAfter(element);
				}
			}
		});
		//  progress bar
		$("#progressbar").progressbar();
		$("#wizard_container").wizard({
			afterSelect: function (event, state) {
				$("#progressbar").progressbar("value", state.percentComplete);
				$("#location").text("(" + state.stepsComplete + "/" + state.stepsPossible + ")");
			}
		});
		// Validate select
		$('#wrapped').validate({
			ignore: [],
			rules: {
				select: {
					required: true
				}
			},
			errorPlacement: function (error, element) {
				if (element.is('select:hidden')) {
					error.insertAfter(element.next('.nice-select'));
				} else {
					error.insertAfter(element);
				}
			}
		});

		// Submit loader mask 
		$('form#wrapped').on('submit', function () {
			var form = $("form#wrapped");
			form.validate();
			if (form.valid()) {
				$("#loader_form").fadeIn();
			}
		});

		$('#DatePicker').datepicker({
		    showButtonPanel: false,
		    inline: true,
		    dateFormat:"mm/dd/yyyy",
		    onSelect: function(dateText, inst) { $("#datepicker_field").val(dateText); },
            // Monday (first day of the week) disabled. Remove these lines 
		    beforeShowDay: function(date) {
		        var day = date.getDay();
		        return [(day != 1), ''];
		    },
            // end disabled
		    minDate: 0
		});
		$(".ui-datepicker-today .ui-state-default").removeClass("ui-state-highlight ui-state-active ui-state-hover")  // fix current date
	});
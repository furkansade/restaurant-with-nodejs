(function ($) {

	"use strict";

	$('#DatePicker').datepicker({
		    showButtonPanel: false,
		    inline: true,
		    onSelect: function(dateText, inst) { $("#datepicker_field").val(dateText); },
            // Monday (first day of the week) disabled. Remove these lines 
		    beforeShowDay: function(date) {
		        var day = date.getDay();
		        return [(day != 1), ''];
		    },
            // end disabled
		    minDate: 0
		});

})(window.jQuery); 
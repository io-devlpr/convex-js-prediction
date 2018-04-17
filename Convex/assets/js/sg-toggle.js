/*
    This JS Script controls the toggle for the suggestions given after a user has types in a character
 */
$(document).ready(function () {
    /*
        For the case that the keys in the key board is pressed
     */
    $(document).on("keyup focusin focusout onclick mouseout mouseover focus change", "input", function(){
        // Checks if the search bar is filled or emptied

        if($(this).val()){
            // If full, make the suggestion appear
            $("div.s-results-pull").show();

            /*
                STYLIZE THE RESULTS
             */

            var div_res = "div.list";

            // Getting the predicted words
            var predictions = searchAlg($(this).val());

            var sname;      // Suggested name

            // Reset div
            $(div_res).empty();

            if(predictions !== false) {  // Checking if is an array
                for (var i = 0; i < predictions.length; i++){
                    sname = predictions[i].toLowerCase();

                    sname = sname.replace($(this).val().toLowerCase(), "<b>" + $(this).val().toLowerCase() + "</b>");

                        // console.log(sname);  Uncomment to see Whats Up
                    $(div_res).append("<p class='item'>"+ sname +  "</p>");
                }
            }else{
                $(div_res).html("<p class='lean-left'>Could find any student matching with that phrase</p>");
            }
        }else{
            // Make the suggestion list not displayed if empty
            $("div.s-results-pull").hide();
        }
    });
});
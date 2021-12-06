/*Close phone*/
for(var i=1;i<=32;i++){
    $("#laptop_selected_"+i).hide();
}
for(var i=1;i<=32;i++){
    $("#phone_selected_"+i).hide();
}
/*Close tablet*/
for(var i=1;i<=32;i++){
    $("#tablet_selected_"+i).hide();
}

$(document).ready(function () {
    $("#submit").click(function() {
        var select = $('#select_devices');
        if (select.val() === "Please select") {
            console.log("Please select an item from the list and then proceed!");
            $('#select_devices').focus();
            for(var i=1;i<=32;i++){
                $("#laptop_selected_"+i).hide();
            }
            for(var i=1;i<=32;i++){
                $("#phone_selected_"+i).hide();
            }
            for(var i=1;i<=32;i++){
                $("#tablet_selected_"+i).hide();
            }
        }
        else if (select.val() === "Laptop") {
            for(var i=1;i<=32;i++){
                $("#laptop_selected_"+i).show();
            }
            for(var i=1;i<=32;i++){
                $("#phone_selected_"+i).hide();
            }
            for(var i=1;i<=32;i++){
                $("#tablet_selected_"+i).hide();
            }
        }
        else if (select.val() === "Phone") {
            for(var i=1;i<=32;i++){
                $("#laptop_selected_"+i).hide();
            }
            for(var i=1;i<=32;i++){
                $("#phone_selected_"+i).show();
            }
            for(var i=1;i<=32;i++){
                $("#tablet_selected_"+i).hide();
            }
        }
        else if (select.val() === "Tablet") {
            for(var i=1;i<=32;i++){
                $("#laptop_selected_"+i).hide();
            }
            for(var i=1;i<=32;i++){
                $("#phone_selected_"+i).hide();
            }
            for(var i=1;i<=32;i++){
                $("#tablet_selected_"+i).show();
            }
        }
    })
});
// jQuery code for calculator
$(document).ready(function () {
    $("#calculate").click(function () {
        var hours = $("#hours").val();
        var rate = $("#rate").val();

        // Validate input
        if (hours <= 0 || isNaN(hours)) {
            $("#error-message").show();
            $("#total").val("");
            return;
        } else {
            $("#error-message").hide();
        }

        // Calculate total
        var totalCost = parseFloat(hours) * parseFloat(rate);
        $("#total").val(totalCost.toFixed(2));
    });
});

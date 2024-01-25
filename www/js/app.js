// A $( document ).ready() block.
$(document).ready(function () {
    function Calc() {
        var rateIran = parseFloat($("#rateIran").val());
        var buyingRate = rateIran / 4.3318;
        $("#buyingRate").val(buyingRate);
        var ounce = parseFloat($("#ounce").val());
        var rateDubai = (ounce / 31.1035) * 3.674;
        $("#rateDubai").val(rateDubai);
        var weightSold = parseFloat($("#weightSold").val());
        var rateDirham = parseFloat($("#rateDirham").val());

        console.log("rateIran:" + rateIran);
        console.log("buyingRate:" + buyingRate);
        console.log("rateDirham:" + rateDirham);
        var Totalremittanceamount = weightSold * buyingRate / rateDirham;
        $("#Totalremittanceamount").val(Totalremittanceamount);

        var rs_01 = Totalremittanceamount / rateDubai;
        $("#rs_01").val(rs_01);
        console.log("rs_01:" + rs_01);
        var rs_02 = rs_01 * 999.9 / 750;
        $("#rs_02").val(rs_02);
        $("#rs_03").val(rs_02 - weightSold);
    }

    Calc();
    $("input").change(function () {
        Calc();
    });

});


$(document).ready(function () {
    function Calc() {
        var rateIran = parseFloat($("#rateIran").val());
        // Round buyingRate to 2 decimal places
        var buyingRate = (rateIran / 4.3318).toFixed(2);
        $("#buyingRate").val(buyingRate);//فی دقیق خرید

        var ounce = parseFloat($("#ounce").val());
        // Round rateDubai to 2 decimal places
        var rateDubai = ((ounce / 31.1035) * 3.674).toFixed(2);
        $("#rateDubai").val(rateDubai);

        var weightSold = parseFloat($("#weightSold").val());
        var rateDirham = parseFloat($("#rateDirham").val());//فی درهم

        // Round Totalremittanceamount to 0 decimal places
        var Totalremittanceamount = Math.round(weightSold * buyingRate / rateDirham);
        $("#Totalremittanceamount").val(Totalremittanceamount);

        // Round rs_01 to 2 decimal places
        var rs_01 = (Totalremittanceamount / rateDubai).toFixed(2);
        $("#rs_01").val(rs_01);


        // Round rs_02 to 2 decimal places
        var rs_02 = (rs_01 * 999.9 / 750).toFixed(2);
        $("#rs_02").val(rs_02);

        // Round rs_03 to 2 decimal places
        $("#rs_03").val((rs_02 - weightSold).toFixed(2));


        var rent = parseFloat($("#rent").val());//کرایه را به درهم وارد  کنید (به ازای هر کیلو)

        var profit_no_rent = (rs_02 - weightSold).toFixed(2);
        $("#profit_no_rent").val(profit_no_rent);

        var rent_profit = (profit_no_rent - ((rent * rateDirham / buyingRate))).toFixed(2);
        $("#rent_profit").val(rent_profit);

    }

    Calc();

    $("input").change(function () {
        Calc();
    });
});
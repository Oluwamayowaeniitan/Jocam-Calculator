function ddp(){
    window.location.replace("ddp.html");
}

function home(){
    window.location.replace("index.html");
}


document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#ude").onclick = function(){
        document.querySelector("#ude-no-display").classList.remove("no-display");
        document.querySelector("#uff-no-display").classList.add("no-display");
    };
    document.querySelector("#uff").onclick = function(){
        document.querySelector("#uff-no-display").classList.remove("no-display");
        document.querySelector("#ude-no-display").classList.add("no-display");
    };

    const currency = document.querySelector("#currency");
    const exwExchange= document.querySelector("#exw-exchange");
    const price = document.querySelector("#price");
    const nairaEquivalent = document.querySelector("#naira-equivalent");
    //const location = document.querySelector("#location");
    const weight = document.querySelector("#weight");
    const dhlPrice = document.querySelector("#dhl-price");
    const totalFreight = document.querySelector("#total-freight");
    const ddu = document.querySelector("#ddu");
    const duty = document.querySelector("#duty");
    const localDelivery = document.querySelector("#local-delivery");
    const subTotal = document.querySelector("#sub-total");
    const markup = document.querySelector("#markup");
    const markupNaira = document.querySelector("#markup-naira");
    const total = document.querySelector("#total");
    const transferCharge = document.querySelector("#transfer-charge");
    const transferChargeNaira = document.querySelector("#transfer-charge-naira");
    const transferText = document.querySelector("#transfer-text");
    const grandTotal = document.querySelector("#grand-total");
    const quantity = document.querySelector("#quantity");
    const unitPrice = document.querySelector("#unit-price");

    exwExchange.disabled = true;
    nairaEquivalent.disabled = true;
    totalFreight.disabled = true;
    ddu.disabled = true;
    subTotal.disabled = true;
    markupNaira.disabled = true;
    total.disabled = true;
    transferChargeNaira.disabled = true;
    grandTotal.disabled = true;
    unitPrice.disabled = true;


    function calculateNairaEquivalent(){
        if (exwExchange.value.length > 0 && price.value.length > 0){
            nairaEquivalent.value = (exwExchange.value * price.value).toFixed(2);
        }
        else{
            nairaEquivalent.value = "";
        }
    };
    function freightCalculator(){
        if (dhlPrice.value.length > 0){
            const vat = ((dhlPrice.value * 7.5)/ 100).toFixed(2);
            const subCharge = ((dhlPrice.value * 30)/ 100).toFixed(2);
            const handlingCost = (350 * weight.value).toFixed(2);
            totalFreight.value = (Number(dhlPrice.value) + Number(vat) + Number(subCharge) + Number(handlingCost)).toFixed(2);
        }
        else{
            totalFreight.value = "";
        }
    };
    function dduCalculator(){
        if (totalFreight.value.length > 0 && nairaEquivalent.value.length > 0){
            ddu.value = (Number(totalFreight.value) + Number(nairaEquivalent.value)).toFixed(2);
        }
        else{
            ddu.value = "";
        }
    };
    function subTotalCalculator(){
        if (ddu.value.length > 0 && duty.value.length > 0 && localDelivery.value.length > 0){
            subTotal.value = (Number(ddu.value) + Number(duty.value) + Number(localDelivery.value)).toFixed(2);
        }
        else{
            subTotal.value = "";
        }
    };
    function markupCalculator(){
        if (markup.value.length > 0 && subTotal.value.length > 0){
            markupNaira.value = ((subTotal.value * markup.value)/ 100).toFixed(2);
        }
        else{
            markupNaira.value = "";
        }
    };
    function totalCalculator(){
        if (subTotal.value.length > 0 && markupNaira.value.length > 0){
            total.value = (Number(subTotal.value) + Number(markupNaira.value)).toFixed(2);
        }
        else{
            total.value = "";
        }
    };
    function transferChargeCalculator(){
        if (transferCharge.value.length > 0){
            transferChargeNaira.value = (transferCharge.value * exwExchange.value).toFixed(2);
        }
        else{
            transferChargeNaira.value = "";
        }
    };
    function grandTotalCalculate(){
        if (total.value.length >0 && transferChargeNaira.value.length >0){
            grandTotal.value = (Number(total.value) + Number(transferChargeNaira.value)).toFixed(2);
        }
        else{
            grandTotal.value = "";
        }
    };
    function unit(){
        if (grandTotal.value.length > 0 && quantity.value.length > 0){
            unitPrice.value = (grandTotal.value / quantity.value).toFixed(2);
        }
        else{
            unitPrice.value = "";
        }
    };
    currency.addEventListener("input", function(){
        if (currency.value === "NGN"){
            exwExchange.disabled = true;
            exwExchange.value = 1;
        }
        else{
            exwExchange.value = "";
            exwExchange.disabled = false;
            exwExchange.addEventListener("input", function(){
                calculateNairaEquivalent();
                freightCalculator();
                dduCalculator();
                subTotalCalculator();
                markupCalculator();
                totalCalculator();
                transferChargeCalculator();
                grandTotalCalculate();
                unit();
            });
        }
        calculateNairaEquivalent();
        freightCalculator();
        dduCalculator();
        subTotalCalculator();
        markupCalculator();
        totalCalculator();
        transferChargeCalculator();
        grandTotalCalculate();
        unit();
    });
    price.addEventListener("input", function(){
        calculateNairaEquivalent();
        freightCalculator();
        dduCalculator();
        subTotalCalculator();
        markupCalculator();
        totalCalculator();
        grandTotalCalculate();
        unit();
    });
    exwExchange.addEventListener("input", function(){
        calculateNairaEquivalent();
        freightCalculator();
        dduCalculator();
        subTotalCalculator();
        markupCalculator();
        totalCalculator();
        grandTotalCalculate();
        unit();
    });
    dhlPrice.addEventListener("input", function(){
        calculateNairaEquivalent();
        freightCalculator();
        dduCalculator();
        subTotalCalculator();
        markupCalculator();
        totalCalculator();
        grandTotalCalculate();
        unit();
    });
    weight.addEventListener("input", function(){
        calculateNairaEquivalent();
        freightCalculator();
        dduCalculator();
        subTotalCalculator();
        markupCalculator();
        totalCalculator();
        grandTotalCalculate();
        unit();
    });
    duty.addEventListener("input", function(){
        calculateNairaEquivalent();
        freightCalculator();
        dduCalculator();
        subTotalCalculator();
        markupCalculator();
        totalCalculator();
        grandTotalCalculate();
        unit();
    });
    localDelivery.addEventListener("input", function(){
        calculateNairaEquivalent();
        freightCalculator();
        dduCalculator();
        subTotalCalculator();
        markupCalculator();
        totalCalculator();
        grandTotalCalculate();
        unit();
    });
    markup.addEventListener("input", function(){
        calculateNairaEquivalent();
        freightCalculator();
        dduCalculator();
        subTotalCalculator();
        markupCalculator();
        totalCalculator();
        grandTotalCalculate();
        unit();
    });
    currency.addEventListener("input", function(){
        if (currency.value === "NGN"){
            transferText.innerHTML = "TRANSFER CHARGE";
        }
        else if (currency.value === "USD"){
            transferText.innerHTML = "TRANSFER CHARGE(USD)";
        }
        else if (currency.value === "GBP"){
            transferText.innerHTML = "TRANSFER CHARGE(GBP)";
        }
        else if (currency.value === "EUR"){
            transferText.innerHTML = "TRANSFER CHARGE(EUR)";
        }
    });
    transferCharge.addEventListener("input", function(){
        calculateNairaEquivalent();
        freightCalculator();
        dduCalculator();
        subTotalCalculator();
        markupCalculator();
        totalCalculator();
        transferChargeCalculator();
        grandTotalCalculate();
        unit();
    });
    quantity.addEventListener("input", function(){
        calculateNairaEquivalent();
        freightCalculator();
        dduCalculator();
        subTotalCalculator();
        markupCalculator();
        totalCalculator();
        transferChargeCalculator();
        grandTotalCalculate();
        unit();
    });

// DOOR TO DOOR
    const dd = document.querySelector("#dd");
    const uffLocalDelivery = document.querySelector("#uff-local-delivery");
    const uffSubTotal = document.querySelector("#uff-subtotal");
    const uffMarkup = document.querySelector("#uff-markup");
    const uffMarkupNaira = document.querySelector("#uff-markup-naira");
    const uffTotal = document.querySelector("#uff-total");
    const uffTransferCharge = document.querySelector("#uff-transfer-charge");
    const uffTransferChargeNaira = document.querySelector("#uff-transfer-charge-naira");
    const uffGrandTotal = document.querySelector("#uff-grand-total");
    const uffQuantity = document.querySelector("#uff-quantity");
    const uffUnitPrice = document.querySelector("#uff-unit-price");
    const uffTransferText = document.querySelector("#uff-transfer-text");

    uffSubTotal.disabled = true;
    uffTotal.disabled = true;
    uffMarkupNaira.disabled = true;
    uffTransferChargeNaira.disabled = true;
    uffGrandTotal.disabled = true;
    uffUnitPrice.disabled = true;
    
    function uffsubTotalCalculator(){
        if (nairaEquivalent.value.length > 0 && dd.value.length > 0 && uffLocalDelivery.value.length > 0){
            uffSubTotal.value = (Number(dd.value) + Number(uffLocalDelivery.value) + Number(nairaEquivalent.value)).toFixed(2);
        }
        else{
            uffSubTotal.value = "";
        }
    };

    function uffMarkupCalculator(){
        if (uffMarkup.value.length > 0 && uffSubTotal.value.length > 0){
            uffMarkupNaira.value = ((uffSubTotal.value * uffMarkup.value)/ 100).toFixed(2);
        }
        else{
            uffMarkupNaira.value = "";
        }
    };
    function uffTotalCalculator(){
        if (uffSubTotal.value.length > 0 && uffMarkupNaira.value.length > 0){
            uffTotal.value = (Number(uffSubTotal.value) + Number(uffMarkupNaira.value)).toFixed(2);
        }
        else{
            uffTotal.value = "";
        }
    };
    function uffTransferChargeCalculator(){
        if (uffTransferCharge.value.length > 0){
            uffTransferChargeNaira.value = (uffTransferCharge.value * exwExchange.value).toFixed(2);
        }
        else{
            uffTransferChargeNaira.value = "";
        }
    };
    function uffGrandTotalCalculate(){
        if (uffTotal.value.length >0 && uffTransferChargeNaira.value.length >0){
            uffGrandTotal.value = (Number(uffTotal.value) + Number(uffTransferChargeNaira.value)).toFixed(2);
        }
        else{
            uffGrandTotal.value = "";
        }
    };

    function uffUnit(){
        if (uffGrandTotal.value.length > 0 && uffQuantity.value.length > 0){
            uffUnitPrice.value = (uffGrandTotal.value / uffQuantity.value).toFixed(2);
        }
        else{
            uffUnitPrice.value = "";
        }
    };
    currency.addEventListener("input", function(){
        if (currency.value === "NGN"){
            exwExchange.disabled = true;
            exwExchange.value = 1;
        }
        else{
            exwExchange.value = "";
            exwExchange.disabled = false;
            exwExchange.addEventListener("input", function(){
                calculateNairaEquivalent();
                uffsubTotalCalculator();
                uffMarkupCalculator();
                uffTotalCalculator();
                uffTransferChargeCalculator();
                uffGrandTotalCalculate();
                uffUnit();
            });
        }
        calculateNairaEquivalent();
        uffsubTotalCalculator();
        uffMarkupCalculator();
        uffTotalCalculator();
        uffTransferChargeCalculator();
        uffGrandTotalCalculate();
        uffUnit();
    });

    price.addEventListener("input", function(){
        calculateNairaEquivalent();
        uffsubTotalCalculator();
        uffMarkupCalculator();
        uffTotalCalculator();
        uffTransferChargeCalculator();
        uffGrandTotalCalculate();
        uffUnit();
    });
    dd.addEventListener("input", function(){
        calculateNairaEquivalent();
        uffsubTotalCalculator();
        uffMarkupCalculator();
        uffTotalCalculator();
        uffTransferChargeCalculator();
        uffGrandTotalCalculate();
        uffUnit();
    });
    uffLocalDelivery.addEventListener("input", function(){
        calculateNairaEquivalent();
        uffsubTotalCalculator();
        uffMarkupCalculator();
        uffTotalCalculator();
        uffTransferChargeCalculator();
        uffGrandTotalCalculate();
        uffUnit();
    });
    uffMarkup.addEventListener("input", function(){
        calculateNairaEquivalent();
        uffsubTotalCalculator();
        uffMarkupCalculator();
        uffTotalCalculator();
        uffTransferChargeCalculator();
        uffGrandTotalCalculate();
        uffUnit();
    });
    currency.addEventListener("input", function(){
        if (currency.value === "NGN"){
            uffTransferText.innerHTML = "TRANSFER CHARGE";
        }
        else if (currency.value === "USD"){
            uffTransferText.innerHTML = "TRANSFER CHARGE(USD)";
        }
        else if (currency.value === "GBP"){
            uffTransferText.innerHTML = "TRANSFER CHARGE(GBP)";
        }
        else if (currency.value === "EUR"){
            uffTransferText.innerHTML = "TRANSFER CHARGE(EUR)";
        }
    });
    uffTransferCharge.addEventListener("input", function(){
        calculateNairaEquivalent();
        uffsubTotalCalculator();
        uffMarkupCalculator();
        uffTotalCalculator();
        uffTransferChargeCalculator();
        uffGrandTotalCalculate();
        uffUnit();
    });
    uffQuantity.addEventListener("input", function(){
        calculateNairaEquivalent();
        uffsubTotalCalculator();
        uffMarkupCalculator();
        uffTotalCalculator();
        uffTransferChargeCalculator();
        uffGrandTotalCalculate();
        uffUnit();
    });


});


document.querySelector(".ude-q-button").onclick = function(){
    document.querySelector("#ude-question").classList.remove("no-display");
}

document.querySelector(".uff-q-button").onclick = function(){
    document.querySelector("#uff-question").classList.remove("no-display");
}

document.querySelector("#rate").disabled = true;


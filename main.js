function exw(){
    window.location.replace("exw.html");
}

function home(){
    window.location.replace("index.html");
}

document.addEventListener("DOMContentLoaded", function(){
    const currency = document.querySelector("#currency");
    const ddpExchange= document.querySelector("#ddp-exchange");
    const price = document.querySelector("#price");
    const nairaEquivalent = document.querySelector("#naira-equivalent");
    const vat = document.querySelector("#vat");
    const vatNaira = document.querySelector("#vat-naira");
    const costPlusVat = document.querySelector("#cost-plus-vat");
    const localDelivery = document.querySelector("#local-delivery");
    const subTotal = document.querySelector("#sub-total");
    const markup = document.querySelector("#markup");
    const markupNaira = document.querySelector("#markup-naira");
    const totalOffer = document.querySelector("#total-offer");
    const quantity = document.querySelector("#quantity");
    const unitPrice = document.querySelector("#unit-price");
    
    ddpExchange.disabled = true;
    nairaEquivalent.disabled = true;
    vatNaira.disabled = true;
    costPlusVat.disabled = true;
    markupNaira.disabled = true;
    subTotal.disabled = true;
    totalOffer.disabled = true;
    unitPrice.disabled = true;


    // currency.onclick = function(){
    //     currency.value = "";
    // };

    function calculateNairaEquivalent(){
        if (price.value.length > 0 && ddpExchange.value.length > 0){
            nairaEquivalent.value = (price.value * ddpExchange.value).toFixed(2);
        }
        else{
            nairaEquivalent.value = "";
        }
    };

    function calculateVat(){
        if (vat.value.length > 0 && nairaEquivalent.value.length > 0){
            vatNaira.value = ((nairaEquivalent.value * vat.value)/ 100).toFixed(2);
        }
        else{
            vatNaira.value = "";
        }
    };

    function costAndVat(){
        if (vatNaira.value.length > 0 && nairaEquivalent.value.length > 0){
            costPlusVat.value = (Number(nairaEquivalent.value) + Number(vatNaira.value)).toFixed(2);
        }
        else{
            costPlusVat.value = "";
        }
    };

    function subTotalAdded(){
        if (localDelivery.value.length > 0 && costPlusVat.value.length > 0){
            subTotal.value = (Number(localDelivery.value) + Number(costPlusVat.value));
        }
        // else if (localDelivery.value.length < 1 && costPlusVat.value.length > 0){
        //     subTotal.value = costPlusVat.value.toFixed(2);
        // }
        else{
            subTotal.value = costPlusVat.value;
        }
    };

    function markUp(){
        if (subTotal.value.length > 0 && markup.value.length > 0){
            markupNaira.value = ((subTotal.value * markup.value)/ 100).toFixed(2);
        }
        else{
            markupNaira.value = "";
        }
    };
    
    function total(){
        if (markupNaira.value.length > 0 && subTotal.value.length > 0){
            totalOffer.value = (Number(markupNaira.value) + Number(subTotal.value)).toFixed(2);
        }
        else{
            totalOffer.value = "";
        }
    };

    function unit(){
        if (totalOffer.value.length > 0 && quantity.value.length > 0){
            unitPrice.value = (totalOffer.value / quantity.value).toFixed(2);
        }
        else{
            unitPrice.value = "";
        }
    };

    currency.addEventListener("input", function(){
        ddpExchange.value = "";
        if (currency.value === "NGN"){
            ddpExchange.disabled = true;
            ddpExchange.value = "1";
        }
        else{
            ddpExchange.disabled = false;
        }
        calculateNairaEquivalent();
        calculateVat();
        costAndVat();
        subTotalAdded();
        markUp();
        total();
        unit();
    });
    price.addEventListener("input", function(){
        calculateNairaEquivalent();
        calculateVat();
        costAndVat();
        subTotalAdded();
        markUp();
        total();
        unit();
    });
    ddpExchange.addEventListener("input", function(){
        calculateNairaEquivalent();
        calculateVat();
        costAndVat();
        subTotalAdded();
        markUp();
        total();
        unit();
    });
    vat.addEventListener("input", function(){
        calculateNairaEquivalent();
        calculateVat();
        costAndVat();
        subTotalAdded();
        markUp();
        total();
        unit();
    });
    localDelivery.addEventListener("input", function(){
        calculateNairaEquivalent();
        calculateVat();
        costAndVat();
        subTotalAdded();
        markUp();
        total();
        unit();
    });
    markup.addEventListener("input", function(){
        calculateNairaEquivalent();
        calculateVat();
        costAndVat();
        subTotalAdded();
        markUp();
        total();
        unit();
    });
    quantity.addEventListener("input", function(){
        calculateNairaEquivalent();
        calculateVat();
        costAndVat();
        subTotalAdded();
        markUp();
        total();
        unit();
    })

    // price.addEventListener("input", function(){
    //     if (price.value.length > 0){
    //         nairaEquivalent.value = (price.value * ddpExchange.value).toFixed(2);
    //     };
    // });








});

document.querySelector(".ddp-q-button").onclick = function(){
    document.querySelector("#ddp-question").classList.remove("no-display");
}

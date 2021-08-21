
// Function to update cost for different configuration
function updateCost(configuration, cost) {
    document.getElementById(configuration + "-cost").innerText = cost;

}

// Function to update Total
function updateTotal() {
    const bestPrice = parseFloat(document.getElementById("best-price").innerText);
    const memoryCost = parseFloat(document.getElementById("memory-cost").innerText);
    const storageCost = parseFloat(document.getElementById("storage-cost").innerText);
    const deliveyCost = parseFloat(document.getElementById("delivery-cost").innerText);

    totalPrice = bestPrice + memoryCost + storageCost + deliveyCost;

    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("final-total").innerText = totalPrice;

}


// Function to update total after discount
function updatePromo() {
    const totalBeforeDiscout = parseFloat(document.getElementById("total-price").innerText);
    const promoInput = document.getElementById("promo-input").value;

    if (promoInput == "stevekaku") {
        document.getElementById("final-total").innerText = totalBeforeDiscout * 0.8;
    }

    document.getElementById("promo-input").value = "";

}


// Memory button event handler
document.getElementById("memory-btn-eight").addEventListener("click", function () {

    updateCost("memory", 0);

    updateTotal();

})

document.getElementById("memory-btn-sixteen").addEventListener("click", function () {

    updateCost("memory", 180);
    updateTotal();

})

// Storage button event handler

document.getElementById("storage-btn-256").addEventListener("click", function () {

    updateCost("storage", 0);
    updateTotal();
})

document.getElementById("storage-btn-512").addEventListener("click", function () {

    updateCost("storage", 100);
    updateTotal();

})

document.getElementById("storage-btn-1tb").addEventListener("click", function () {

    updateCost("storage", 180);
    updateTotal();

})

// Delivery button event handler

document.getElementById("delivery-free").addEventListener("click", function () {

    updateCost("delivery", 0);
    updateTotal();

})

document.getElementById("delivery-charge").addEventListener("click", function () {

    updateCost("delivery", 20);
    updateTotal();

})


// promo button event handler

document.getElementById("promo-btn").addEventListener("click", function () {

    updatePromo();

})
function totalUpdate() {
  const initialPrice = document.getElementById("best-price").innerText;
  const costOfStorage = document.getElementById("cost-of-storage").innerText;
  const deliveryCharge = document.getElementById("delevary-cost").innerText;
  const costOfMemory = document.getElementById("cost-of-memory").innerText;
  const totalCostText = document.getElementById("total-cost");

  const totalCostValue =
    parseFloat(initialPrice) +
    parseFloat(costOfMemory) +
    parseFloat(costOfStorage) +
    parseFloat(deliveryCharge);
  totalCostText.innerText = totalCostValue;
  document.getElementById("overall-total").innerText = totalCostValue;
}

function costUpdate(updateId, cost) {
  document.getElementById(updateId).innerText = cost;
  totalUpdate();
}

document.getElementById("apply-coupon").addEventListener("click", function () {
  const couponCode = document.getElementById("input-promo").value;
  const validateCoupon = "stevekaku";
  const totalCost = document.getElementById("total-cost");
  const overallTotalAmountText = totalCost.innerText;
  let overallTotalAmount = parseFloat(overallTotalAmountText);
  if (couponCode == validateCoupon) {
    overallTotalAmount = overallTotalAmount - overallTotalAmount * 0.2;
    document.getElementById("overall-total").innerText = overallTotalAmount;
  }
  document.getElementById("input-promo").value = "";
});

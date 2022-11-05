let getCount = function () {
  let count = 0;
  for (let i = 0; i <= 5; i++) {
    if (document.getElementById(`po${i}`).checked) {
      count++;
    }
  }
  return count;
};

let getTotalCost = function () {
  let totalAmount = 0;
  let persons = document.getElementById("persons").value;
  for (let i = 0; i <= 5; i++) {
    if (document.getElementById(`po${i}`).checked) {
      switch (`po${i}`) {
        case "po0":
          totalAmount += 350;
          break;
        case "po1":
          totalAmount += 430;
          break;
        case "po2":
          totalAmount += 780;
          break;
        case "po3":
          totalAmount += 1200;
          break;
        case "po4":
          totalAmount += 270;
          break;
        case "po5":
          totalAmount += 4500;
          break;
      }
    }
  }
  return totalAmount * persons;
};

let calculateDiscount = function () {
  let places = getCount();
  let totalAmount = getTotalCost();
  let discountAmount = 0;
  if (places > 3) {
    discountAmount = (totalAmount / 100) * 15;
  }
  return discountAmount;
};

let getStayCost = function () {
  let stayCost = 0;
  let persons = document.getElementById("persons").value;
  let daysStay = document.getElementById("daysStay").value;
  stayCost = daysStay * persons * 150;
  return stayCost;
};

let disableNoOfDaysStay = function () {
  let preStay = document.getElementById("yes").checked;
  if (!preStay) {
    document.getElementById("daysStay").readOnly = true;
  }
};

let calculateCost = function () {
  let totalCount = getCount();
  let totalAmount = getTotalCost();
  let discount = calculateDiscount();
  let stayCost = getStayCost();
  let finalAmount = totalAmount - discount + stayCost;
  console.log(finalAmount);
  document.getElementById(
    "msg"
  ).innerHTML = `Your preferred package cost ${finalAmount}$`;
};

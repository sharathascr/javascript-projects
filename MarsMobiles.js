let calculateCost = function () {
  let bookingDate = document.getElementById("bt").value;
  if (!validateBookingDate(bookingDate)) {
    alert("Booking date should be today!!");
  }
  if (!validateDeliveryDate()) {
    alert("Expected delivery date can't be before the booking date!!");
  } else if (expectedDeliveryDateCheck()) {
    alert(
      "Expected delivery date cannot be same as the booking date/1 or 2 days from the booking date!!"
    );
  } else {
    let totalcost = getMobileCost();
    console.log(totalcost.price);
    let result = (document.getElementById(
      "result"
    ).innerHTML = `Your order for ${totalcost.item} id placed. you need to pay Rs.${totalcost.price}`);
  }
};

let validateBookingDate = function (bookingDate) {
  let date1 = document.getElementById("bt").value;
  let date2 = new Date().toISOString().slice(0, 10);
  if (
    new Date(date1).getDate() == new Date(date2).getDate() &&
    new Date(date1).getMonth() == new Date(date2).getMonth()
  )
    return true;
  else return false;
};

let validateDeliveryDate = function () {
  let date1 = document.getElementById("dt").value;
  let date2 = new Date().toISOString().slice(0, 10);
  if (new Date(date2).getDate() - new Date(date1).getDate() < 0) return true;
  else false;
};

let expectedDeliveryDateCheck = function () {
  let date1 = document.getElementById("dt").value;
  let date2 = document.getElementById("bt").value;

  if (new Date(date1).getDate() - new Date(date2).getDate() <= 2) {
    return true;
  } else {
    return false;
  }
};

let getMobileCost = function () {
  let cost = 0;
  let mobile = "";
  switch (
    document.getElementById("mobile").options[
      document.getElementById("mobile").selectedIndex
    ].value
  ) {
    case "oneplus":
      cost += 28790;
      mobile += "Oneplus Nord N10";
      break;
    case "iphone":
      cost += 89990;
      mobile += "Iphone 13";
      break;
    case "samsung":
      cost += 84999;
      mobile += "Samsung Galaxy Z";
      break;
  }
  return { price: cost, item: mobile };
};

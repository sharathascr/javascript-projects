let validate = function () {
  let software_type =
    document.getElementById("software-type").options[
      document.getElementById("software-type").selectedIndex
    ].value;
  if (software_type === "calculator") {
    validationforCalculator();
  } else if (software_type === "camera") {
    validationforCamera();
  } else if (software_type === "office") {
    vaidationForOffice();
  }
};

let validationforCalculator = function () {
  let software_type =
    document.getElementById("software-type").options[
      document.getElementById("software-type").selectedIndex
    ].value;
  let key = document.getElementById("key").value;
  if (key.length < 10 || key.length > 10) {
    document.getElementById(
      "msg"
    ).innerHTML = `Please provide a valid key for the software ${software_type}`;
  } else if (key.charCodeAt(0) < 65 || key.charCodeAt(0) > 90) {
    document.getElementById(
      "msg"
    ).innerHTML = `Please provide a valid key for the software ${software_type}`;
  } else {
    document.getElementById(
      "msg"
    ).innerHTML = `The serial key ${key} is validated successfully for the software ${software_type}`;
  }
};

let validationforCamera = function () {
  let regex = "[a-zA-Z]{4}";
  let software_type =
    document.getElementById("software-type").options[
      document.getElementById("software-type").selectedIndex
    ].value;
  let key = document.getElementById("key").value;

  if (key.length < 12 || key.length > 12) {
    document.getElementById(
      "msg"
    ).innerHTML = `Please provide a valid key for the software ${software_type}`;
  } else if (
    document.getElementById("key").value.substr(0, 4).match(regex) === null
  ) {
    document.getElementById(
      "msg"
    ).innerHTML = `Please provide a valid key for the software ${software_type}`;
  } else {
    document.getElementById(
      "msg"
    ).innerHTML = `The serial key ${key} is validated successfully for the software ${software_type}`;
  }
};

let vaidationForOffice = function () {
  let software_type =
    document.getElementById("software-type").options[
      document.getElementById("software-type").selectedIndex
    ].value;
  let key = document.getElementById("key").value;

  if (key.length < 16 || key.length > 16) {
    document.getElementById(
      "msg"
    ).innerHTML = `Please provide a valid key for the software ${software_type}`;
    console.log("1");
  } else if (
    !(
      document.getElementById("key").value.charCodeAt(0) >= 65 &&
      document.getElementById("key").value.charCodeAt(0) <= 90 &&
      document.getElementById("key").value.charCodeAt(4) >= 65 &&
      document.getElementById("key").value.charCodeAt(4) <= 90 &&
      document.getElementById("key").value.charCodeAt(8) >= 65 &&
      document.getElementById("key").value.charCodeAt(8) <= 90 &&
      document.getElementById("key").value.charCodeAt(12) >= 65 &&
      document.getElementById("key").value.charCodeAt(12) <= 90
    )
  ) {
    document.getElementById(
      "msg"
    ).innerHTML = `Please provide a valid key for the software ${software_type}`;
    console.log("2");
  } else {
    document.getElementById(
      "msg"
    ).innerHTML = `The serial key ${key} is validated successfully for the software ${software_type}`;
    console.log("3");
  }
};

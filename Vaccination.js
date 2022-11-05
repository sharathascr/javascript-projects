let diseaseSelected = function () {
  let disease =
    document.getElementById("disease").options[
      document.getElementById("disease").selectedIndex
    ].value;
  let vaccine = document.getElementById("vaccine");
  switch (disease) {
    case "Measles":
      vaccine.innerHTML = `<option value="notselected" disabled selected>-select-</option><option id="TRESIVAC">TRESIVAC</option><option id="abvac3">Abhay-Vac 3</option>`;
      break;
    case "Covid":
      vaccine.innerHTML = `<option value="notselected" disabled selected>-select-</option><option id="Covishield">Covishield</option><option id="COVAXIN">COVAXIN</option><option id="Sputnik">Sputnik</option>`;
      break;
    case "Tuberculosis":
      vaccine.innerHTML = `<option value="notselected" disabled selected>-select-</option><option id="Bacillus">Bacillus Calmette-Guerin</option>`;
      break;
    case "Dengue":
      vaccine.innerHTML = `<option value="notselected" disabled selected>-select-</option><option id="live">Live Attenuated Vaccines</option><option id="chimeric">Chimeric Live Attenuated Vaccines</option><option id="inactived">Inactivated Vaccines</option><option id="subunit">Subunit Vaccines</option><option id="nucleic" >Nucleic Acid-Based Vaccines</option>`;
      break;
    case "Others":
      vaccine.innerHTML = `<option value="notselected" disabled selected>-select-</option><option id="nasovac">NASOVAC</option><option id="monovalent">Monovalent oral polio vaccine(mOPV) Type 1</option>`;
      break;
  }
};

let regitserRequest = function () {
  let selecteddisease =
    document.getElementById("disease").options[
      document.getElementById("disease").selectedIndex
    ].value;

  let selectedVaccine =
    document.getElementById("vaccine").options[
      document.getElementById("vaccine").selectedIndex
    ].value;
  if (
    selectedVaccine === "-select disease-" ||
    selectedVaccine === "-select-"
  ) {
    document.getElementById("msg").innerHTML =
      "Select values from all dropdown lists";
  } else {
    document.getElementById("msg").innerHTML = `Hi ${
      document.getElementById("name").value
    }, your request for ${selecteddisease}-${selectedVaccine} vaccine has been placed successfully`;
  }
};

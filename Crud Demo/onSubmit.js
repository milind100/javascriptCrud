const formEl = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");

const editBtn = document.getElementById("editBtn");
const cancelBtn = document.getElementById("cancelBtn");

// hide the Editor buttons
submitBtn.style.visibility = "visible";
editBtn.style.visibility = "hidden";
cancelBtn.style.visibility = "hidden";

const searchBar = document.getElementById("searchBar");
// sorter is div contains the sort element set
const sorter = document.getElementById("sorter");
const tableBody = document.getElementById("table_body");

const fnameEl = document.getElementById("name");

const emailEl = document.getElementById("emailAddress");
const addressEl = document.getElementById("address");
const countryEl = document.getElementById("country");
const stateEl = document.getElementById("state");
const cityEl = document.getElementById("city");

const femaleGenderEl = document.getElementById("femaleGender");
const maleGenderEl = document.getElementById("maleGender");
const otherGenderEl = document.getElementById("otherGender");

const readingEl = document.getElementById("reading");
const coadingEl = document.getElementById("coading");
const runningEl = document.getElementById("running");
const writingEl = document.getElementById("Writing");
const swimmingEl = document.getElementById("swimming");

// let dataArr = []

let dataArr = [
  {
    fname: "raj",
    email: "milind10rpatil@gmail.com",
    address: "88,backingham street",
    country: "india",
    state: "maharashtra",
    city: "sambhaji Nagar",
    female: true,
    male: "",
    other: "",
    reading: "",
    coading: true,
    running: true,
    writing: true,
    swimming: "",
  },
  {
    fname: "miliind",
    email: "milind10rptil@gmail.com",
    address: "66 raja nagar,chawk bazar",
    country: "japan",
    state: "tokino",
    city: "tokiyo",
    female: true,
    male: "",
    other: "",
    reading: "",
    coading: true,
    running: true,
    writing: true,
    swimming: "",
  },
  {
    fname: "Raja parmar",
    email: "milinbvbdfbd10rptil@gmail.com",
    address: "sham socity,rampur",
    country: "india",
    state: "gujarat",
    city: "Surat",
    female: true,
    male: "",
    other: "",
    reading: "",
    coading: true,
    running: true,
    writing: true,
    swimming: "",
  },
  {
    fname: "Ramesh rathod",
    email: "milinbuuubdfbd10rptil@gmail.com",
    address: "99 Shantilal park,state circle",
    country: "america",
    state: "calefornia",
    city: "jersey",
    female: true,
    male: "",
    other: "",
    reading: "",
    coading: true,
    running: true,
    writing: true,
    swimming: "",
  },
  {
    fname: "aarav",
    email: "mil0rptil@gmail.com",
    address: "33 vijay wada,sampark pura",
    country: "bahamas",
    state: "kapi",
    city: "kish",
    female: true,
    male: "",
    other: "",
    reading: "",
    coading: true,
    running: true,
    writing: true,
    swimming: "",
  },
];
showResult();

// show the data in table Function
function showResult(myArray = dataArr) {
  let finalop = myArray.map((user) => {
    // Let's add the firstname and lastname together
    const {
      fname,
      email,
      address,
      country,
      state,
      city,
      female,
      male,
      other,
      reading,
      coading,
      running,
      writing,
      swimming,
    } = user;

    const hobbies = `${reading ? "reading<br>" : ""}
        ${coading ? "coading<br>" : ""}
        ${running ? "running<br>" : ""}
        ${writing ? "writing<br>" : ""}
        ${swimming ? "swimming<br>" : ""}`;

    const genderconfirm = `${(male && "male") || (female && "female") || (other && "other")
      }`;

    return `<tr>
        <td>${fname}</td>
        <td>${email}</td>
        <td>${genderconfirm}</td>
        <td>${address}</td>
        <td>${city}</td>
        <td>${state}</td>
        <td>${country}</td>
        <td>${hobbies}</td>
        <td>
            <div class="d-flex gap-2">
                <button class="btn btn-sm btn-success" onclick="editVal(this)">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteVal(this)">Delete</button>
                </div>
            </td>
        </tr>`;
  });

  tableBody.innerHTML = finalop.join("");
}

// reset form Function
function resetForm() {
  fnameEl.value = "";
  emailEl.value = "";
  addressEl.value = "";

  countryEl.value = "";

  stateEl.value = "";
  stateEl.disabled = true;

  cityEl.value = "";
  cityEl.disabled = true;

  femaleGenderEl.checked = false;
  maleGenderEl.checked = false;
  otherGenderEl.checked = false;

  readingEl.checked = "";
  coadingEl.checked = "";
  runningEl.checked = "";
  writingEl.checked = "";
  swimmingEl.checked = "";

  submitBtn.style.visibility = "visible";
  editBtn.style.visibility = "hidden";
  cancelBtn.style.visibility = "hidden";

  searchBar.value = "";
  sorter.children[0].value = "Select";
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let obj = {};

  if (!validate()) return;

  obj["fname"] = fnameEl.value;
  obj["email"] = emailEl.value;
  obj["address"] = addressEl.value;

  obj["country"] = countryEl.value;
  obj["state"] = stateEl.value || "-";
  obj["city"] = cityEl.value || "-";

  obj["female"] = femaleGenderEl.checked || "";
  obj["male"] = maleGenderEl.checked || "";
  obj["other"] = otherGenderEl.checked || "";

  obj["reading"] = readingEl.checked || "";
  obj["coading"] = coadingEl.checked || "";
  obj["running"] = runningEl.checked || "";
  obj["writing"] = writingEl.checked || "";
  obj["swimming"] = swimmingEl.checked || "";

  dataArr.push(obj);
  alert("Added successfully");
  showResult();
  resetForm();
});

function validate(edit = false, index) {
  var nameWarn = document.getElementById("nameWarn");
  var EmailWarn = document.getElementById("EmailWarn");

  var addressWarn = document.getElementById("addressWarn");

  var hobbieWarn = document.getElementById("hobbieWarn");

  var flag = 0;

  if (fnameEl.value == "") {
    nameWarn.style.color = "red";
    nameWarn.textContent = "please Enter the name";
    flag++;
  }
  if (emailEl.value == "") {
    EmailWarn.style.color = "red";
    EmailWarn.textContent = "please Enter the Email";
    flag++;
  }
  if (addressEl.value == "") {
    addressWarn.style.color = "red";
    addressWarn.textContent = "please Enter the Address";
    flag++;
  }

  if (countryEl.disabled == false && countryEl.value == "") {
    alert("please Select Country");
    flag++;
  } else if (stateEl.disabled == false && stateEl.value == "") {
    alert("please Select State");
    flag++;
  } else if (cityEl.disabled == false && cityEl.value == "") {
    alert("please Select City");
    flag++;
  }

  if (
    !readingVal.checked &&
    !coadingVal.checked &&
    !runningVal.checked &&
    !WritingVal.checked &&
    !swimmingVal.checked
  ) {
    hobbieWarn.textContent = "Please select Your Hobbie";
    hobbieWarn.style.color = "red";
    flag++;
  } else {
    hobbieWarn.textContent = "";
  }

  if (!edit && dataArr.find((cur) => cur.email == emailEl.value)) {
    EmailWarn.style.color = "red";
    EmailWarn.textContent = "This email is taken ";
    flag++;
  } else if (edit) {
    const CheckArr = [];
    for (let x = 0; x < dataArr.length; x++) {
      if (x == index) {
        continue;
      }
      CheckArr.push(dataArr[x]);
    }
    if (CheckArr.find((cur) => cur.email == emailEl.value)) {
      EmailWarn.style.color = "red";
      EmailWarn.textContent = "This Email is used by other";
      flag++;
    }
  }

  if (flag > 0) return;
  return true;
}

// Delete BUtton CLick
function deleteVal(e) {
  alert("Delete");
  const delEmail =
    e.parentElement.parentElement.parentElement.children[1].innerHTML;

  const index = dataArr.findIndex((user) => user.email == delEmail);

  if (index >= 0) {
    const DeletedEl = dataArr.splice(index, 1);
  } else {
    alert("Element Not found");
  }
  showResult();
  resetForm();
}

// Edit Functionality starts Here

// Edit button click

function editVal(e) {
  const EditEmail =
    e.parentElement.parentElement.parentElement.children[1].innerHTML;
  const index = dataArr.findIndex((user) => user.email == EditEmail);

  if (index >= 0) {
    submitBtn.style.visibility = "hidden";
    editBtn.style.visibility = "visible";
    cancelBtn.style.visibility = "visible";

    const {
      fname,
      email,
      address,
      country,
      state,
      city,
      female,
      male,
      other,
      reading,
      coading,
      running,
      writing,
      swimming,
    } = dataArr[index];

    fnameEl.value = fname;
    fnameEl.setAttribute("index", index);

    emailEl.value = email;

    addressEl.value = address;
    countryEl.value = country;

    // here we Defining custom Events for DropDowns
    const custE = new Event("change");
    countryEl.dispatchEvent(custE);

    stateEl.value = state;
    stateEl.dispatchEvent(custE);

    cityEl.value = city;
    cityEl.dispatchEvent(custE);

    femaleGenderEl.checked = female;
    maleGenderEl.checked = male;
    otherGenderEl.checked = other;

    readingEl.checked = reading;
    coadingEl.checked = coading;
    runningEl.checked = running;
    writingEl.checked = writing;
    swimmingEl.checked = swimming;
  } else {
    alert("Element Not found");
  }
}

// Reset form function

// Cancel Edit event
cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetForm();
});

//Add Edit data function
editBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const index = fnameEl.getAttribute("index");

  if (!validate(true, index)) return;

  let obj = {};
  obj["fname"] = fnameEl.value;
  obj["email"] = emailEl.value;
  obj["address"] = addressEl.value;
  obj["country"] = countryEl.value || "-";
  obj["state"] = stateEl.value || "-";
  obj["city"] = cityEl.value || "-";

  obj["female"] = femaleGenderEl.checked || "";

  obj["male"] = maleGenderEl.checked || "";
  obj["other"] = otherGenderEl.checked || "";

  obj["reading"] = readingEl.checked || "";
  obj["coading"] = coadingEl.checked || "";
  obj["running"] = runningEl.checked || "";
  obj["writing"] = writingEl.checked || "";
  obj["swimming"] = swimmingEl.checked || "";

  dataArr.splice(index, 1, obj);
  showResult();
  resetForm();
});

// ADD Search Functionality
// dataArr is main array
searchBar.addEventListener("keyup", (e) => {
  var value = e.target.value.toLowerCase();
  value = value.trim();

  var filteredArr = dataArr.filter((cur) => {
    const fname = cur.fname.toLowerCase();
    //    return fname.includes(value)
    return fname.startsWith(value);
  });

  showResult(filteredArr);
});

//Accending Filter sort

sorter.children[1].addEventListener("click", (e) => {
  sorter.children[0].value = "Select";
  showResult();
});

sorter.children[0].addEventListener("change", (e) => {
  const typeList = e.target.value;

  switch (typeList) {
    case "ASC": {
      const SortedArr = sortARR([...dataArr], "ASC");
      showResult(SortedArr);
      break;
    }
    case "DESC": {
      const SortedArr = sortARR([...dataArr], "DESC");
      showResult(SortedArr);
      break;
    }
    default:
      showResult();
  }
});

// assending sort function

const sortARR = (myArr, type) => myArr.sort((a, b) => {
  const nameA = a.fname.toUpperCase();
  const nameB = b.fname.toUpperCase();
  const comparison =
    nameA == nameB ? 0 : type === "ASC" ? nameA > nameB ? 1 : -1 : nameA > nameB ? -1 : 1;
  return comparison;
});

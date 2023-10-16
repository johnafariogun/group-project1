let phone_number = document.querySelector("#phoneNumber");

const AddHidehelperFunction = (id) => {
  const val = document.querySelector(`.${id}`);
  const isTHere = val.classList.contains("hide");
  if (!isTHere) {
    val.classList.remove("show");
    val.classList.add("hide");
  }
};

const AddShowHelperFunction = (id) => {
  const val = document.querySelector(`.${id}`);
  const isTHere = val.classList.contains("show");
  if (!isTHere) {
    val.classList.remove("hide");
    val.classList.add("show");
  }
};
const HideAll = () => {
  AddHidehelperFunction("error");
  AddHidehelperFunction("airtel");
  AddHidehelperFunction("mtn");
  AddHidehelperFunction("glo");
  AddHidehelperFunction("etisalat");
  AddHidehelperFunction("welcome");
};

const NumberHandler = () => {
  if (phone_number.value.length < 10) {
    HideAll();
    AddShowHelperFunction("error");
    return;
  }
  let number = phone_number.value.trim();
  let splittedNum = number.split("");
  const country_code = splittedNum.slice(1, 4).join("");
  if (!(country_code === "+234") && splittedNum[0] === "0") {
    let spliced_number = splittedNum.slice(1);
    number = `+234` + spliced_number.join("");
  }

  if (number.length !== 14) {
    HideAll();
    AddShowHelperFunction("error");
    return;
  }
  const serverNum = number.replace("+234", "0");
  const regEx = /^[0-9\+]+$/;
  const exist = regEx.test(serverNum);
  //if exist is false
  if (exist === false) {
    HideAll();
    AddShowHelperFunction("error");
    return;
  }
  const prefix = serverNum.substring(0, 4);
  return getOperatorImageSource(prefix);
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  return NumberHandler();
});

document.querySelector("input").addEventListener("change", (event) => {
  event.preventDefault();

  if (phone_number.value.length === 0) {
    HideAll();
    AddShowHelperFunction("welcome");
    return;
  }
  return NumberHandler();
});
document.querySelector("button").addEventListener("click", NumberHandler);

function getOperatorImageSource(prefix) {
  console.log(prefix);
  switch (prefix) {
    case "0803":
    case "0703":
    case "0903":
    case "0806":
    case "0706":
    case "0813":
    case "0810":
    case "0814":
    case "0816":
      HideAll();
      AddShowHelperFunction("mtn");
      break;
    case "0805":
    case "0705":
    case "0905":
    case "0807":
    case "0815":
    case "0811":
    case "0905":
      HideAll();
      AddShowHelperFunction("glo");
      break;
    case "0809":
    case "0909":
    case "0817":
    case "0818":
      HideAll();
      AddShowHelperFunction("etisalat");
      break;
    case "0802":
    case "0902":
    case "0701":
    case "0808":
    case "0708":
    case "0812":
      HideAll();
      AddShowHelperFunction("airtel");
      break;

    default:
      HideAll();
      AddShowHelperFunction("error");
  }
}

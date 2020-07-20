function NumberHandler(num) {
  let inputval = document.querySelector("#inputval");
  inputval.value += num;
}
function ResetHandler() {
  let inputval = document.querySelector("#inputval");
  inputval.value = "";
}

function EqualHandler() {
  let inputval = document.querySelector("#inputval").value;
  if (inputval) {
    document.querySelector("#inputval").value = eval(inputval);
  }
}

function RemoveHandler() {
  let inputval = document.querySelector("#inputval").value;
  document.querySelector("#inputval").value = inputval.substring(
    0,
    inputval.length - 1
  );
}
function SpecialHandler(char) {
  if (document.querySelector("#inputval").value.length === 0) {
    alert("Dastlab son kiriting");
  } else {
    let inputval = document.querySelector("#inputval");
    inputval.value += char;
  }
}

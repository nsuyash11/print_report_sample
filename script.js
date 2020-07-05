let printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", printPageFunction);

function printPageFunction() {
  window.print();
}

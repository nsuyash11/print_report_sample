let printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", printPage);

function printPage() {
  window.print();
}

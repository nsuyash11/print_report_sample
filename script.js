let printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", () => {
  if (confirm("Do you want to print this report ? ")) {
    printBtn.classList.add("hide");
    window.print();
    printBtn.classList.remove("hide");
  }
});

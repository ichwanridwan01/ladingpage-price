function check() {
  const checkbox = document.getElementById("checkbox");
  const annually = document.getElementsByClassName("annually");
  const monthly = document.getElementsByClassName("monthly");
  for (let i = 0; i < annually.length; i++) {
    if (checkbox.checked == true) {
      annually[i].style.display = "block";
      monthly[i].style.display = "none";
    } else if (checkbox.checked == false) {
      annually[i].style.display = "none";
      monthly[i].style.display = "block";
    }
  }
}

const toggleSwitch = document.getElementById("toggle-switch"),
 prices_m = document.getElementsByClassName("price-m"),
 prices_a = document.getElementsByClassName("price-a"); 

  const check = () => {
  for (let i = 0; i < prices1.length; i++) {
    if (toggleSwitch.checked) {
      prices_m[i].style.display = "block";
      prices_a[i].style.display = "none";
    } else if (toggleSwitch.checked == false) {
      prices_m[i].style.display = "none";
      prices_a[i].style.display = "block";
    }
  }
}

let units = document.querySelectorAll(".units input[type='radio']");
let selectedUnit = [...units].filter((unit) => unit.checked)[0];
let total = document.getElementById("total");

function setPrice(unit) {
  let price =
    unit.parentNode.parentNode.nextSibling.nextSibling.childNodes[1].textContent
      .replace("$", "")
      .replace(" USD", "");
  total.innerText = `Total: $${price}`;
}
// function toggleTable(unit) {
//   const table = unit.parentNode.nextSibling.nextSibling;
//   if (table.style.display === "none") table.style.display = "block";
//   else table.style.display = "none";
//   console.log(table);
// }

units.forEach((unit) => {
  unit.addEventListener("change", () => {
    setPrice(unit);
    // units.forEach((n_unit) => toggleTable(n_unit));
    // toggleTable(unit);
  });
});

setPrice(selectedUnit);
toggleTable(selectedUnit);

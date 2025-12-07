function toggleBibtex() {
  var bibtexSection = document.getElementById("bibtexSection");
  var container = document.querySelector(".container");

  if (bibtexSection.style.display === "none") {
    bibtexSection.style.display = "block";
    container.style.opacity = "0.5"; /* Reduce the opacity of the container */
  } else {
    bibtexSection.style.display = "none";
    container.style.opacity = "1"; /* Restore the opacity of the container */
  }
}
document.addEventListener("click", function(event) {
  var dropdownMenu = document.getElementById("dropdownMenu");
  var targetElement = event.target;
  var isDropdownClicked = targetElement.closest("#dropdownMenu");
  var isBarClicked = targetElement.closest(".fa-bars");
  var isNavLinksClicked = targetElement.closest(".nav-links");

  if (!isDropdownClicked && !isBarClicked && !isNavLinksClicked) {
    dropdownMenu.style.display = "none";
  }
});

function toggleDropdown(event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to document
  var dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
}

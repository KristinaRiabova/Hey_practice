const input = document.getElementById("text-input");
const dropdown = document.getElementById("dropdown-options");
let isDropdownVisible = false;

input.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

document.addEventListener("click", function (e) {
  if (!input.contains(e.target)) {
    hideDropdown();
  }
});

dropdown.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName === "LI") {
    input.value = e.target.textContent;
    hideDropdown();
  }
});

input.addEventListener("blur", function () {
  setTimeout(() => {
    hideDropdown();
  }, 200);
});

function toggleDropdown() {
  if (!isDropdownVisible) {
    dropdown.style.display = "block";
    isDropdownVisible = true;
  } else {
    dropdown.style.display = "none";
    isDropdownVisible = false;
  }
}

function hideDropdown() {
  dropdown.style.display = "none";
  isDropdownVisible = false;
}



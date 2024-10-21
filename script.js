// Function to clear all checkboxes and radio buttons
document
  .getElementById("clearFilters")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Select all checkboxes and radio buttons within the '.filters' container
    const inputs = document.querySelectorAll(
      '.filters input[type="checkbox"], .filters input[type="radio"]'
    );

    // Loop through each input and uncheck it
    inputs.forEach(function (input) {
      input.checked = false;
    });
  });
// ================================================================================================================================

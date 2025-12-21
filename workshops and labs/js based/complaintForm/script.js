/* file: script.js */
const complaintForm = document.getElementById("form");
const submitButton = document.getElementById("submit-btn");

let formSubmitted = false;

function validateForm() {
  const fullName = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const orderNumber = document.getElementById("order-no").value.trim();
  const productCode = document.getElementById("product-code").value.trim();
  const quantity = document.getElementById("quantity").value.trim();
  const complaintsGroup = document.querySelectorAll(
    "#complaints-group input[type=checkbox]"
  );
  const complaintDescription = document
    .getElementById("complaint-description")
    .value.trim();
  const solutionsGroup = document.querySelectorAll(
    "#solutions-group input[type=radio]"
  );
  const solutionDescription = document
    .getElementById("solution-description")
    .value.trim();

  const otherComplaint = document.getElementById("other-complaint");
  const otherSolution = document.getElementById("other-solution");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const orderNoRegex = /^2024\d{6}$/;
  const productCodeRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;

  const validationResults = {
    "full-name": fullName !== "",
    email: emailRegex.test(email),
    "order-no": orderNoRegex.test(orderNumber),
    "product-code": productCodeRegex.test(productCode),
    quantity: quantity > 0,
    "complaints-group": Array.from(complaintsGroup).some(
      (checkbox) => checkbox.checked
    ),
    "complaint-description":
      !otherComplaint.checked || complaintDescription.length >= 20,
    "solutions-group": Array.from(solutionsGroup).some(
      (radio) => radio.checked
    ),
    "solution-description":
      !otherSolution.checked || solutionDescription.length >= 20,
  };
  return validationResults;
}

// Function to check if all form fields are valid
function isValid(validationResults) {
  return (
    validationResults["full-name"] &&
    validationResults["email"] &&
    validationResults["order-no"] &&
    validationResults["product-code"] &&
    validationResults["quantity"] &&
    validationResults["complaints-group"] &&
    validationResults["complaint-description"] &&
    validationResults["solutions-group"] &&
    validationResults["solution-description"]
  );
}

function handleChange(event) {
  const target = event.target;
  const validationResults = validateForm();

  if (target.id === "full-name") {
    target.style.borderColor = validationResults["full-name"] ? "green" : "red";
  } else if (target.id === "email") {
    target.style.borderColor = validationResults["email"] ? "green" : "red";
  } else if (target.id === "order-no") {
    target.style.borderColor = validationResults["order-no"] ? "green" : "red";
  } else if (target.id === "product-code") {
    target.style.borderColor = validationResults["product-code"]
      ? "green"
      : "red";
  } else if (target.id === "quantity") {
    target.style.borderColor = validationResults["quantity"] ? "green" : "red";
  } else if (
    target.type === "checkbox" &&
    target.closest("#complaints-group")
  ) {
    updateFieldsetBorder("complaints-group", "checkbox");
  } else if (target.id === "complaint-description") {
    target.style.borderColor = validationResults["complaint-description"]
      ? "green"
      : "red";
  } else if (target.type === "radio" && target.closest("#solutions-group")) {
    updateFieldsetBorder("solutions-group", "radio");
  } else if (target.id === "solution-description") {
    target.style.borderColor = validationResults["solution-description"]
      ? "green"
      : "red";
  }
}

function updateFieldsetBorder(fieldsetId, inputType) {
  const fieldset = document.getElementById(fieldsetId);
  const inputs = document.querySelectorAll(
    `#${fieldsetId} input[type="${inputType}"]`
  );
  const isChecked = Array.from(inputs).some((input) => input.checked);

  console.log(`Updating ${fieldsetId} border. Checked: ${isChecked}`);

  fieldset.style.borderColor = isChecked ? "green" : "red";
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const validationResults = validateForm();

  if (!isValid(validationResults)) {
    document.getElementById("full-name").style.borderColor = validationResults[
      "full-name"
    ]
      ? "green"
      : "red";
    document.getElementById("email").style.borderColor = validationResults[
      "email"
    ]
      ? "green"
      : "red";
    document.getElementById("order-no").style.borderColor = validationResults[
      "order-no"
    ]
      ? "green"
      : "red";
    document.getElementById("product-code").style.borderColor =
      validationResults["product-code"] ? "green" : "red";
    document.getElementById("quantity").style.borderColor = validationResults[
      "quantity"
    ]
      ? "green"
      : "red";
    updateFieldsetBorder("complaints-group", "checkbox");
    document.getElementById("complaint-description").style.borderColor =
      validationResults["complaint-description"] ? "green" : "red";
    updateFieldsetBorder("solutions-group", "radio");
    document.getElementById("solution-description").style.borderColor =
      validationResults["solution-description"] ? "green" : "red";

    document.getElementById("message-box").textContent =
      "Please correct the highlighted fields.";
  } else {
    document.getElementById("message-box").textContent =
      "Form submitted successfully!";
  }
}

// Add event listeners
complaintForm.addEventListener("submit", handleSubmit);
complaintForm.addEventListener("change", handleChange);

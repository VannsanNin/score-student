# JavaScript Code Explanation

This document explains the JavaScript functionality powering the Student Score Management System.

## Table of Contents

1. [Translation System](#translation-system)
2. [Language Switching](#language-switching)
3. [Form Handling](#form-handling)
4. [Table Management](#table-management)
5. [PDF Generation](#pdf-generation)

## Translation System

The system uses a translation object structure to support multiple languages:

```javascript
const translate = {
  en: {
    // English translations
    input_title: "Input Information Student",
    pre_title: "Student Score Table",
    // ... other translations
  },
  kh: {
    // Khmer translations
    input_title: "បញ្ជូលព័ត៌មានសិស្ស",
    pre_title: "តារាព័ត៌មានពិន្ទុសិស្ស",
    // ... other translations
  },
};
```

Each language has the same set of keys but with translated values in the appropriate language. This structure makes it easy to add new languages by simply adding another language object.

## Language Switching

The `changeLanguage()` function updates all text elements on the page when the language is changed:

```javascript
function changeLanguage(lang) {
  document.getElementById("input-title").innerText =
    translate[lang].input_title;
  // ... updates for all other text elements
}
```

This function is called:

1. When the page first loads (with default English)
2. When the user changes the language via the dropdown menu

The function updates all text elements by setting their content to the appropriate translation from the `translate` object.

## Form Handling

The form processing is handled by an event listener on form submission:

```javascript
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents page reload

  // Get references to all form input elements
  const nameInput = document.getElementById("student-name");
  // ... other input references

  // Extract values from inputs
  const name = nameInput.value.trim();
  // ... other value extractions

  // Convert numerical inputs to Number type
  const Math = Number(math);
  // ... other number conversions

  // Calculate total score and average
  const scoreTotal =
    Math + Physic + Chemistry + Bio + Khmer + History + English;
  const average = scoreTotal / 7;

  // Add data to table (if name is not empty)
  if (name !== "") {
    // Create and append new table row
    // Reset form fields
  }
});
```

Key aspects of this code:

- `e.preventDefault()` stops the form from causing a page reload
- Values are extracted and converted to appropriate types
- Calculations are performed for total and average scores
- A new row is created and added to the table
- Form fields are reset after submission

## Table Management

When a student is added:

```javascript
if (name !== "") {
  studentCount++;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${studentCount}</td>
    <td>${name}</td>
    <td>${gender}</td>
    // ... other data cells
    <td>${scoreTotal}</td>
    <td>${average}</td>
  `;

  tableBody.appendChild(newRow);

  // Reset form fields
  nameInput.value = "";
  // ... reset other fields
}
```

This code:

1. Increments the student counter (for the row number)
2. Creates a new table row element
3. Sets the HTML content of the row with all student data
4. Appends the row to the table body
5. Clears all form inputs for the next entry

## PDF Generation

The PDF download functionality uses the jsPDF and html2canvas libraries:

```javascript
document.getElementById("download-pdf").addEventListener("click", function () {
  const { jsPDF } = window.jspdf; // Access the jsPDF constructor
  const invoiceElement = document.querySelector(".side-pre"); // Target element to capture

  html2canvas(invoiceElement, { scale: 2 }).then((canvas) => {
    // Convert the element to an image
    const imgData = canvas.toDataURL("image/png");

    // Create a new PDF document (A4 size)
    const pdf = new jsPDF("p", "mm", "a4");

    // Calculate dimensions to fit A4 proportionally
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Add the image to the PDF
    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

    // Download the PDF
    pdf.save("student_score.pdf");
  });
});
```

This process:

1. Captures the table section as a canvas using html2canvas
2. Converts the canvas to an image
3. Creates a new PDF document
4. Adds the image to the PDF, scaling it to fit properly
5. Triggers the PDF download

## Initialization

When the page loads:

```javascript
window.addEventListener("DOMContentLoaded", () => {
  changeLanguage("en"); // Set default language to English
});
```

This ensures all text elements are properly populated with the default language when the page first loads.

## Variables and State

- `studentCount`: Keeps track of the number of students added
- `form`: Reference to the student input form
- `tableBody`: Reference to the table body where student rows are added

These variables maintain the state of the application across user interactions.

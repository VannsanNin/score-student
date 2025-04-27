const translate = {
  en: {
    input_title: "Input Information Student",
    pre_title: "Student Score Table",
    name: "Name",
    gender: "Gender",
    math: "Math",
    no: "No",
    physic: "Physic",
    chemistry: "Chemistry",
    bio: "Biology",
    khmer: "Khmer",
    history: "History",
    english: "English",
    total: "Score Total",
    national: "Kingdom of Cambodia",
    nationalMotto: "Nation, Religion, King",
    schoolName: "School Name",
    average: "Average",
  },
  kh: {
    input_title: "បញ្ជូលព័ត៌មានសិស្ស",
    pre_title: "តារាព័ត៌មានពិន្ទុសិស្ស",
    name: "ឈ្មោះ",
    gender: "ភេទ",
    math: "គណិតវិទ្យា",
    no: "លរ",
    physic: "រូបវិទ្យា",
    chemistry: "គីមីវិទ្យា",
    bio: "ជីវវិទ្យា",
    khmer: "ភាសាខ្មែរ",
    history: "ប្រវត្តិវិទ្យា",
    english: "អង់គ្លេស",
    total: "ពិន្ទុសរុប",
    national: "ព្រះរាជាណាចក្រកម្ពុជា",
    nationalMotto: "ជាតិ សាសនា ព្រះមហាក្សត្រ",
    schoolName: "ឈ្មោះសាលារៀន",
    average: "មធ្យមភាគ",
  },
};

function changeLanguage(lang) {
  document.getElementById("input-title").innerText =
    translate[lang].input_title;
  document.getElementById("pre-title").innerText = translate[lang].pre_title;
  document.getElementById("national").innerText = translate[lang].national;
  document.getElementById("national-motto").innerText =
    translate[lang].nationalMotto;
  document.getElementById("school-name").innerText = translate[lang].schoolName;

  document.getElementById("name").innerHTML = translate[lang].name;
  document.getElementById("gender").innerHTML = translate[lang].gender;
  document.getElementById("math").innerHTML = translate[lang].math;
  document.getElementById("physic").innerHTML = translate[lang].physic;
  document.getElementById("chemistry").innerHTML = translate[lang].chemistry;
  document.getElementById("bio").innerHTML = translate[lang].bio;
  document.getElementById("khmer").innerHTML = translate[lang].khmer;
  document.getElementById("history").innerHTML = translate[lang].history;
  document.getElementById("english").innerHTML = translate[lang].english;
  document.getElementById("no").innerHTML = translate[lang].no;
  document.getElementById("table-name").innerHTML = translate[lang].name;
  document.getElementById("table-gender").innerHTML = translate[lang].gender;
  document.getElementById("table-math").innerHTML = translate[lang].math;
  document.getElementById("table-physic").innerHTML = translate[lang].physic;
  document.getElementById("table-chemistry").innerHTML =
    translate[lang].chemistry;
  document.getElementById("table-bio").innerHTML = translate[lang].bio;
  document.getElementById("table-khmer").innerHTML = translate[lang].khmer;
  document.getElementById("table-history").innerHTML = translate[lang].history;
  document.getElementById("table-english").innerHTML = translate[lang].english;
  document.getElementById("score-total").innerHTML = translate[lang].total;
  document.getElementById("average").innerHTML = translate[lang].average;
}

// Set default language when page loads
window.addEventListener("DOMContentLoaded", () => {
  changeLanguage("en"); // default is English
});

let studentCount = 0;
const form = document.getElementById("student-form");
const tableBody = document.getElementById("student-table-body");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const nameInput = document.getElementById("student-name");
  const genderInput = document.getElementById("student-gender");
  const mathInput = document.getElementById("student-math");
  const physicInput = document.getElementById("student-physic");
  const chemistryInput = document.getElementById("student-chemistry");
  const bioInput = document.getElementById("student-bio");
  const khmerInput = document.getElementById("student-khmer");
  const historyInput = document.getElementById("student-history");
  const englishInput = document.getElementById("student-english");

  const name = nameInput.value.trim();
  const gender = genderInput.value.trim();
  const math = mathInput.value.trim();
  const physic = physicInput.value.trim();
  const chemistry = chemistryInput.value.trim();
  const bio = bioInput.value.trim();
  const khmer = khmerInput.value.trim();
  const history = historyInput.value.trim();
  const english = englishInput.value.trim();
  const Math = Number(math);
  const Physic = Number(physic);
  const Chemistry = Number(chemistry);
  const Bio = Number(bio);
  const Khmer = Number(khmer);
  const History = Number(history);
  const English = Number(english);

  const scoreTotal =
    Math + Physic + Chemistry + Bio + Khmer + History + English;
  const average = scoreTotal / 7;

  if (name !== "") {
    studentCount++;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${studentCount}</td>
      <td>${name}</td>
      <td>${gender}</td>
      <td>${math}</td>
      <td>${physic}</td>
      <td>${chemistry}</td>
      <td>${bio}</td>
      <td>${khmer}</td>
      <td>${history}</td>
      <td>${english}</td>
      <td>${scoreTotal}</td>
      <td>${average}</td>
    `;

    tableBody.appendChild(newRow);

    nameInput.value = "";
    genderInput.value = "";
    mathInput.value = "";
    physicInput.value = "";
    chemistryInput.value = "";
    bioInput.value = "";
    khmerInput.value = "";
    historyInput.value = "";
    englishInput.value = "";
  }
});
document.getElementById("download-pdf").addEventListener("click", function () {
  const { jsPDF } = window.jspdf; // Ensure jsPDF is correctly referenced
  const invoiceElement = document.querySelector(".side-pre"); // Capture full

  html2canvas(invoiceElement, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png"); // Convert the element to an image
    const pdf = new jsPDF("p", "mm", "a4"); // Create a new PDF document

    const imgWidth = 190; // Set image width to fit A4 size
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Scale height proportionally

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight); // Add image to PDF
    pdf.save("student_score.pdf"); // Trigger download
  });
});

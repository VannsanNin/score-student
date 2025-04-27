# Student Score Management System

## Overview

This is a bilingual (English/Khmer) student score management web application that allows teachers and administrators to input student information and scores, view them in a tabular format, and download the results as a PDF.

## Features

- **Bilingual Support**: Toggle between English and Khmer languages
- **Student Data Management**: Add student information including:
  - Name
  - Gender
  - Subject scores (Math, Physics, Chemistry, Biology, Khmer, History, English)
- **Automatic Calculations**:
  - Total score calculation
  - Average score calculation
- **PDF Export**: Download the complete student score table as a PDF document
- **Responsive Design**: Works on various screen sizes

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- PDF Generation: jsPDF library
- HTML to Canvas: html2canvas library

## Project Structure

```
student-score-system/
├── index.html       # Main HTML document
├── style.css        # CSS styling
├── script.js        # JavaScript functionality
└── README.md        # Project documentation
```

## Setup Instructions

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for loading CDN libraries)

### Installation

1. Clone the repository or download the files
   ```
   git clone https://github.com/VannsanNin/score-student.git
   ```
2. No build process or server setup required - simply open `index.html` in your browser

### External Dependencies

The project uses the following external libraries via CDN:

- jsPDF (v2.5.1) - For generating PDF files
- html2canvas (v1.4.1) - For capturing HTML content as images
- Google Fonts - JetBrains Mono, Kantumruy Pro, and Moul fonts

## Usage Guide

### Changing Language

1. Use the dropdown menu in the header to switch between English and Khmer

### Adding Student Records

1. Fill out the form in the left panel with:
   - Student name
   - Gender
   - Scores for each subject (numerical values)
2. Click "Add Student" button to add the record to the table

### Downloading Results

1. After adding student records, click the "Download as PDF" button
2. The PDF will include the school header information and the complete score table

## Customization

### Adding New Languages

To add support for additional languages:

1. Add a new language object to the `translate` object in `script.js`
2. Add a new option in the language dropdown in `index.html`

### Modifying Styling

- Edit `style.css` to change colors, fonts, and layout
- The current design uses a clean, modern interface with a blue accent color

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[MIT](https://github.com/VannsanNin)

## Contributing

[Provide guidelines for contributing to the project]

## Contact

VANNSAN NIN - [@ninvannsan](https://t.me/ninvannsan) - <vannsannin@gmail.com>

Project Link: [https://github.com/VannsanNin/yt-quality](https://github.com/VannsanNin/yt-quality)

const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({ margin: 40, size: 'A4' });
const outputPath = path.join(__dirname, 'public', 'Jaiyand_PA_Resume.pdf');

doc.pipe(fs.createWriteStream(outputPath));

// Header
doc.fillColor('#000000').fontSize(24).font('Helvetica-Bold').text('JAIYAND P A', { align: 'left' });
doc.moveDown(0.2);

doc.fontSize(10).font('Helvetica').fillColor('#333333');
doc.text('Phone: +91 8825613114');
doc.text('Email: jaiyandanand@gmail.com');
doc.text('LinkedIn: linkedin.com/in/jaiyand-a-915340267/');
doc.text('GitHub: github.com/jaiyand');
doc.moveDown(0.8);

function addSectionHeader(title) {
  doc.fontSize(12).font('Helvetica-Bold').fillColor('#000000').text(title.toUpperCase());
  doc.moveTo(40, doc.y + 2).lineTo(555, doc.y + 2).strokeColor('#000000').lineWidth(1).stroke();
  doc.moveDown(0.5);
}

// Summary
addSectionHeader('Summary');
doc.fontSize(9.5).font('Helvetica').fillColor('#222222').text(
  'Computer Science graduate with knowledge of Python, web technologies, databases, and data analysis. Hands on experience through internships and projects using React.js, Node.js, MongoDB, SQL, and Power BI. Looking for an entry-level opportunity to apply my skills and grow through real-world experience.',
  { align: 'justify', lineGap: 3 }
);
doc.moveDown(1);

// Education
addSectionHeader('Education');
doc.fontSize(10).font('Helvetica-Bold').fillColor('#000000').text('B.E - Computer Science');
doc.fontSize(9.5).font('Helvetica').fillColor('#333333').text('SRM TRP Engineering College | CGPA: 7.6');
doc.moveDown(0.3);
doc.fontSize(9.5).font('Helvetica').fillColor('#333333').text('Class 12 – 74.5%');
doc.text('Class 10 – 80.5%');
doc.font('Helvetica-Oblique').text('Kamala Niketan Montessori School');
doc.moveDown(1);

// Technical Skills
addSectionHeader('Technical Skills');
const skills = [
  { label: 'Web Technologies', val: 'HTML, CSS, JavaScript' },
  { label: 'Frontend & Backend', val: 'React.js, Node.js' },
  { label: 'Database', val: 'MongoDB, SQL' },
  { label: 'Programming & Tools', val: 'Python, Power BI' },
];
skills.forEach(s => {
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text(`• ${s.label}: `, { continued: true });
  doc.font('Helvetica').fillColor('#333333').text(s.val);
});
doc.moveDown(1);

// Experience
addSectionHeader('Experience');

doc.fontSize(10).font('Helvetica-Bold').fillColor('#000000').text('MERN Stack Developer Intern – T4TEQ Software Solution');
doc.fontSize(9.5).font('Helvetica').fillColor('#333333').text(
  '• Worked on full-stack web applications using MongoDB, Express.js, React.js, and Node.js, including RESTful API development and integration. Collaborated with the team to understand requirements and implement project features.',
  { lineGap: 2 }
);
doc.moveDown(0.6);

doc.fontSize(10).font('Helvetica-Bold').fillColor('#000000').text('Data Analytics Intern – QSpider Software Institute');
doc.fontSize(9.5).font('Helvetica').fillColor('#333333').text(
  '• Gained practical knowledge in Python, SQL, data analysis, and visualization. Worked with Pandas, NumPy, Matplotlib, and Power BI to analyse data and create visualizations. Developed basic data-driven insights and reports from datasets.',
  { lineGap: 2 }
);
doc.moveDown(1);

// Projects
addSectionHeader('Projects');

doc.fontSize(10).font('Helvetica-Bold').fillColor('#000000').text('Portfolio');
doc.fontSize(9.5).font('Helvetica').fillColor('#333333').text(
  '• Developed a dynamic and responsive portfolio website for managing contact details, effectively showcasing projects and skills in an interactive and professional manner.',
  { lineGap: 2 }
);
doc.moveDown(0.5);

doc.fontSize(10).font('Helvetica-Bold').fillColor('#000000').text('Food Ordering Platform');
doc.fontSize(9.5).font('Helvetica').fillColor('#333333').text(
  '• Developed a full-stack web application with REST API integration, user authentication (JWT), and MongoDB database management. Implemented responsive UI and optimized performance.',
  { lineGap: 2 }
);
doc.moveDown(0.5);

doc.fontSize(10).font('Helvetica-Bold').fillColor('#000000').text('AI Based Skill Gap Analyser');
doc.fontSize(9.5).font('Helvetica').fillColor('#333333').text(
  '• Built an ML-based system to analyse student skill gaps using Python, recommended personalized learning paths based on user data.',
  { lineGap: 2 }
);
doc.moveDown(1);

// Certification
addSectionHeader('Certification');
doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text('• MERN Stack Development Course (6 Months)');
doc.fontSize(9.5).font('Helvetica').fillColor('#333333').text('  T4TEQ Software Solutions | Offline | Trichy');
doc.moveDown(0.3);
doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text('• Data Analytics Course (3 Months)');
doc.fontSize(9.5).font('Helvetica').fillColor('#333333').text('  QSpider Software Institute | Offline | Chennai');

doc.end();
console.log('PDF generated successfully at public/Jaiyand_PA_Resume.pdf');

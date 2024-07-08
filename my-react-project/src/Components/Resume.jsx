
function Resume() {
  return (
    <div className="pdf-container">
      <object className="pdf-object" data="GerwinMateo_Resume.pdf" type="application/pdf" width="100%" height="600px">
        <p>Your browser does not support PDFs. <a href="GerwinMateo_Resume.pdf" download>Download the PDF</a> instead.</p>
      </object>
    </div>
  );
}

export default Resume;

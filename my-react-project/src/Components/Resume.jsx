import { useEffect, useState } from "react";
import "./Resume.css"

function Resume() {
  const [fadeIn, setFadeIn] = useState(false);
  const [pdfVersion, setPdfVersion] = useState(Date.now());
  const [pdfError, setPdfError] = useState(false);

  const pdfUrl = `/GerwinMateo_Resume.pdf?v=${pdfVersion}`;

  useEffect(() => {
    setFadeIn(true);
    setPdfVersion(Date.now());

    // Check if PDF exists
    fetch(pdfUrl)
      .then(response => {
        if (!response.ok) {
          setPdfError(true);
          console.error('PDF not found:', response.status);
        }
      })
      .catch(error => {
        setPdfError(true);
        console.error('Error loading PDF:', error);
      });
  }, [pdfUrl]);
  
  return (
    <div className={`pdf-container ${fadeIn ? "fade-in" : "" }`}>
      {pdfError ? (
        <p>Error loading PDF. Please make sure the file exists in the correct location.</p>
      ) : (
        <object 
          className="pdf-object" 
          data={pdfUrl}
          type="application/pdf" 
          width="100%" 
          height="600px"
        >
          <p>Your browser does not support PDFs. 
            <a 
              href={pdfUrl}
              download
            >
              Download the PDF
            </a> instead.
          </p>
        </object>
      )}
    </div>
  );
}

export default Resume;

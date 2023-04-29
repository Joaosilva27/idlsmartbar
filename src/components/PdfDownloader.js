import React from "react";

function PdfDownloader({ fileName, fileUrl }) {
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <h4 onClick={downloadPdf} style={{ cursor: "pointer" }}>
      {fileName}
    </h4>
  );
}

export default PdfDownloader;

"use client";
import { HardDriveDownload } from "lucide-react";
import { Button } from "../ui/button";

const CVDownload = () => {
  const downloadCV = () => {
    document.body.style.cssText = `
    --background: ${getComputedStyle(document.documentElement).getPropertyValue(
      "--background"
    )};
    --foreground: ${getComputedStyle(document.documentElement).getPropertyValue(
      "--foreground"
    )};
    `;
    window.print();
    // Reset the body style
    document.body.style.cssText = "";
  };
  return (
    <Button
      id="download-cv"
      variant="default"
      className="md:text-lg max-md:p-3 font-bold center gap-2 ms-auto"
      onClick={downloadCV}
      aria-label="Download CV"
      title="Download CV"
    >
      <span className="max-md:hidden">Download CV</span>
      {/* <FontAwesomeIcon icon={faDownload} /> */}
      <HardDriveDownload style={{ width: '1.4rem', height: '1.4rem' }} />
    </Button>
  );
};

export default CVDownload;

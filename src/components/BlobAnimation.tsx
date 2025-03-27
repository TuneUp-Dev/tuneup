import React, { useEffect, useRef } from "react";
import "./BlobAnimation.scss";

const BlobAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleButtonClick = (palette: string) => {
      if (containerRef.current) {
        containerRef.current.className = `container palette-${palette}`;
      }
    };

    const buttons = document.querySelectorAll(".switch-button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const palette = button.getAttribute("data-palette");
        if (palette) {
          handleButtonClick(palette);
        }
      });
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  const renderBlob = (index: number, isAlt = false) => (
    <g className={`blob blob-${index} ${isAlt ? "alt" : ""}`}>
      <path />
    </g>
  );

  return (
    <>
      <div className="container palette-1" ref={containerRef}>
        <div className="blobs">
          <svg viewBox="0 0 1200 1200">
            {[1, 2, 3, 4].map((index) => (
              <React.Fragment key={index}>
                {renderBlob(index)}
                {renderBlob(index, true)}
              </React.Fragment>
            ))}
          </svg>
        </div>
      </div>

      <div className="switcher">
        {[1, 2, 3, 4, 5, 6].map((palette) => (
          <div
            key={palette}
            className={`switch-button palette-${palette}`}
            data-palette={palette}
          >
            <div className="blobs">
              <svg viewBox="0 0 1200 1200">
                {[1, 2, 3, 4].map((index) => (
                  <React.Fragment key={index}>
                    {renderBlob(index)}
                    {renderBlob(index, true)}
                  </React.Fragment>
                ))}
              </svg>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlobAnimation;

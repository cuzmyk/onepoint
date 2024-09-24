import React, { useRef, useEffect } from "react";
import "./style.css";

const HorizontalScroll = ({ children, scrollTo, setScrollTo }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    switch (scrollTo) {
      case 0:
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        break;
      case 1:
        container.scrollTo({
          left: 1 * containerWidth,
          behavior: "smooth",
        });
        break;
      default:
        break;
    }

    setScrollTo(null);
  }, [scrollTo, setScrollTo]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      container.style.backgroundPosition = `${scrollLeft * 0.047}% center`; // Измените 0.5 на нужный коэффициент скорости движения фона
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className="scroll-container"
        ref={containerRef}
        // style={containerStyles}
      >
        {React.Children.map(children, (child, index) => (
          <div className="scroll-item" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;

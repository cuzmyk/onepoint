import React, { useRef, useState, useEffect } from "react";
import "./style.css";

const MessageScroll = ({ text }) => {
  const messageTextRef = useRef(null);
  const scrollSliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    const messageText = messageTextRef.current;
    const scrollSlider = scrollSliderRef.current;

    const handleSliderChange = (event) => {
      const newPosition = event.target.value;
      setSliderPosition(newPosition);
      messageText.scrollTop =
        (messageText.scrollHeight - messageText.clientHeight) *
        (newPosition / 100);
    };

    scrollSlider.addEventListener("input", handleSliderChange);

    return () => {
      scrollSlider.removeEventListener("input", handleSliderChange);
    };
  }, []);

  useEffect(() => {
    const messageText = messageTextRef.current;
    const scrollSlider = scrollSliderRef.current;

    const handleScroll = () => {
      const newPosition =
        (messageText.scrollTop /
          (messageText.scrollHeight - messageText.clientHeight)) *
        100;
      setSliderPosition(newPosition);
      scrollSlider.value = newPosition;
    };

    messageText.addEventListener("scroll", handleScroll);

    return () => {
      messageText.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="message-scroll">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        className="scroll-slider"
        ref={scrollSliderRef}
        orient={"vertical"}
        onChange={(event) => setSliderPosition(event.target.value)}
      />

      <div className="message-text" ref={messageTextRef}>
        {text}
      </div>
    </div>
  );
};

export default MessageScroll;

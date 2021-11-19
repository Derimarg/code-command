import React, { useState, useEffect, useRef } from "react";
import ReviewSection from "./ReviewContainer";
import { reviewData } from "./ReviewData";
import "./style.css";

const Slideshow = () => {
  const delay = 10000;
  // const reviews = [reviewObjOne, reviewObjTwo, reviewObjThree];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  // const length = slides.length;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === reviewData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {/* {colors.map((backgroundColor, index) => (
          <div 
          // className="slide"
           key={index} style={{ backgroundColor }}>
          </div>
        ))} */}

        <>
          {reviewData.map((x, index) => (
            <ReviewSection {...x} key={index} className="slide" />
          ))}
        </>
      </div>

      <div className="slideshowDots">
        {reviewData.map((_, idx) => (
          <>
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

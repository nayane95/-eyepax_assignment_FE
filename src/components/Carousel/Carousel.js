import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import './Carousel.css'
import Slide from "../Slide/Slide";

const Carousel = ({ slide_count=2, infinte=true }) => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);
  const [length, setLength] = useState(0)
  const [nextDisabled, setNextDisabled] = useState(false)
  const [prevDisabled, setPrevDisabled] = useState(false)

  useEffect(()=> {
    fetch(`http://localhost:3600/carousels?count=${slide_count}`)
    .then((response) => response.json())
    .then((data) => {
       console.log(data.data);
       setSlides(data.data);
       setLength(data.data.length)
    })
    .catch((err) => {
       console.log(err.message);
    });
  }, [slide_count])

  const nextSlide = () => {
    if(infinte){
      setCurrent(current === length - 1 ? 0 : current + 1);
    } else{
      if(current === length - 1){
        setNextDisabled(true)
      } else {
        setCurrent(current + 1)
      }
    }
  };

  const prevSlide = () => {
    if(infinte){
      setCurrent(current === 0 ? length - 1 : current - 1);
    } else {
      if(current ===  0){
        setPrevDisabled(true)
      } else {
        setCurrent(current - 1)
      }
    }
  };

  return (
    <div className="wrapper">
      <FaChevronLeft className="leftArrow" onClick={prevSlide} style={{display: slides.length > 1 ? "inline": "none"}}/>
      <FaChevronRight className="rightArrow" onClick={nextSlide} style={{display: slides.length > 1  ? "inline": "none"}}/>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && <Slide slide={slide} alt="" />}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
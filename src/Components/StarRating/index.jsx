import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

// eslint-disable-next-line react/prop-types
export default function StarRating({ noOfStars = 7 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <>
      <h1 className="heading">StarRating App</h1>
      <div className="starRating">
        {[...Array(noOfStars)].map((_, index) => {
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
      <hr className="line-below" />
    </>
  );
}

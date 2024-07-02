/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import PropTypes from "prop-types";
export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {Array.isArray(data) && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}

Suggestions.propTypes = {
  data: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

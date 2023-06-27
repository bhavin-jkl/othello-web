import React from "react";

type ISquareProps = {
  value: string | null;
  canPlace: boolean;
  onClick: () => void;
};

const Square: React.FC<ISquareProps> = ({ value, canPlace, onClick }) => {
  // Determine the name of the CSS class based on the value of the square
  const name = value ? value : "hint-coin";

  // Determine the CSS classes to apply to the square
  let className = "square";
  className += " " + (canPlace ? "square-o" : "square-x");

  return (
    <div>
      {/* Render a button representing the square */}
      <button className={className} onClick={onClick}>
        {/* Render a span element with the appropriate CSS class */}
        <span className={name}></span>
      </button>
    </div>
  );
};

export default Square;

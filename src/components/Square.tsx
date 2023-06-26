import React from "react";

type ISquareProps = {
  value: string | null;
  canPlace: boolean;
  onClick: () => void;
};

const Square: React.FC<ISquareProps> = ({ value, canPlace, onClick }) => {
  const name = value ? value : "hint-coin";
  let className = "square";
  className += " " + (canPlace ? "square-o" : "square-x");
  return (
    <div>
      <button className={className} onClick={onClick}>
        <span className={name}></span>
      </button>
    </div>
  );
};

export default Square;

// import React from "react";

// const Square = ({ value, canPlace, onClick, num }) => {
//   const name = value ? value : "none";
//   let className = "square";
//   className += " " + (canPlace ? "square-o" : "square-x");
//   return (
//     <div>
//       <button className={className} onClick={onClick}>
//         <span className={name}></span> <span>{num}</span>
//       </button>
//     </div>
//   );
// };

// export default Square;

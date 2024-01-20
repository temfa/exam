import React from "react";

const Ellipse = ({ color }: { color: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="15" fill={color} />
    </svg>
  );
};

export default Ellipse;

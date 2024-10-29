import React from 'react';

const MenuBarIcon = ({ fill = 'none', width = 20, height = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33203 4.16675H13.332M3.33203 10.0001H16.6654M3.33203 15.8334H9.9987"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuBarIcon;

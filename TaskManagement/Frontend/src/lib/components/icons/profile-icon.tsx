import React from 'react';

const ProfileIcon = ({ fill = 'black', width = 24, height = 24 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_252_576)">
        <path
          d="M12 12C14.6236 12 16.75 9.87363 16.75 7.25C16.75 4.62637 14.6236 2.5 12 2.5C9.37637 2.5 7.25 4.62637 7.25 7.25C7.25 9.87363 9.37637 12 12 12ZM15.5551 13.2098L13.7812 20.3125L12.5938 15.2656L13.7812 13.1875H10.2188L11.4062 15.2656L10.2188 20.3125L8.44492 13.2098C5.79902 13.3359 3.6875 15.4994 3.6875 18.175V19.7188C3.6875 20.7021 4.48535 21.5 5.46875 21.5H18.5312C19.5146 21.5 20.3125 20.7021 20.3125 19.7188V18.175C20.3125 15.4994 18.201 13.3359 15.5551 13.2098Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_252_576">
          <rect width="16.625" height="19" fill="white" transform="translate(3.6875 2.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProfileIcon;

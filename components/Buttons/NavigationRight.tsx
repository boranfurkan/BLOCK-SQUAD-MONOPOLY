import React from "react";

interface NavigationRightProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const NavigationRight = ({
  className,
  onClick,
  disabled,
}: NavigationRightProps) => {
  return (
    <button
      className={`${disabled && "opacity-50 cursor-not-allowed"} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6876 42.4602C33.4376 42.481 42.9376 33.0523 42.9585 21.2717C42.9793 9.51194 33.5418 0.0416688 21.771 4.38139e-05C10.021 -0.0415811 0.520947 9.42869 0.500116 21.1885C0.458449 32.9483 9.91679 42.4185 21.6876 42.4602ZM13.2085 19.4401C15.9168 19.4193 18.6043 19.4401 21.3126 19.4401C22.8543 19.4401 24.4168 19.4401 25.9585 19.4401C26.0001 19.3361 26.0626 19.2528 26.1251 19.1487C24.9376 18.004 23.7293 16.88 22.5626 15.7145C21.5626 14.7362 21.4793 13.6955 22.2709 12.9046C23.0834 12.0929 24.0626 12.1969 25.0834 13.2168C27.2293 15.3606 29.396 17.5253 31.5418 19.6691C32.6668 20.8138 32.6668 21.6464 31.5418 22.7911C29.3543 24.9974 27.146 27.2037 24.9376 29.3891C23.9585 30.3466 22.771 30.3049 22.0626 29.3475C21.521 28.5982 21.6251 27.724 22.396 26.9123C23.6043 25.6843 24.8543 24.4979 26.271 23.0825C25.646 23.0409 25.2918 23.0201 24.9376 23.0201C21.0626 23.0201 17.1876 23.0201 13.3126 23.0201C12.0626 23.0201 11.3335 22.5414 11.146 21.6672C10.8751 20.4392 11.7293 19.4818 13.1876 19.4609L13.2085 19.4401Z"
          fill="#A0A0A0"
        />
      </svg>
    </button>
  );
};

export default NavigationRight;

import React from "react";

const Button = ({children}) => {
  return (
    <button
      href="/"
      aria-label=""
      className="inline-flex btn items-center text-white border-0 font-semibold tracking-wider transition-colors duration-200 bg-gradient-to-r from-primary to-secondary text-teal-accent-400 hover:text-teal-accent-700"
    >
      {children?children:'Get Started'}
    </button>
  );
};

export default Button;

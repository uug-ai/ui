import React from "react";

export default function Button({
  backgroundColor = "blue-950",
  color = "blue-50",
  label = "Button",
  handleClick,
}) {
  return (
    <>
      <button
        type="button"
        className={`bg-${backgroundColor} text-${color} min-w-36 min-h-10 rounded-lg text-lg focus:outline-none hover:cursor-pointer`}
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
}

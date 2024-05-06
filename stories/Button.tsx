import React from "react";

export default function Button({
  backgroundColor = "blue-950",
  color = "blue-50",
}) {
  return (
    <>
      <button
        type="button"
        className={`bg-${backgroundColor} text-${color} w-36 h-10 rounded-lg text-lg focus:outline-none hover:cursor-pointer`}
      >
        Button
      </button>
    </>
  );
}

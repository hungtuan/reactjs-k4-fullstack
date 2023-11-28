import { forwardRef } from "react";
const Button = forwardRef(function Button(
  // eslint-disable-next-line react/prop-types
  { text, color, tailwindCss, onClick },
  ref
) {
  const colorVariants = {
    emerald: "bg-emerald-500 hover:bg-emerald-600",
    red: "bg-red-500 hover:bg-red-600",
    amber: "bg-amber-500 hover:bg-amber-600",
    sapphire: "bg-sapphire-500 hover:bg-sapphire-600",
  };
  return (
    <button
      className={`${colorVariants[color]} transition px-3 py-2 rounded-md font-bold text-white text-lg ${tailwindCss}`}
      onClick={onClick}
      ref={ref}
    >
      {text}
    </button>
  );
});
export default Button;

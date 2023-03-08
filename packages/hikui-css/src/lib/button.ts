import { tv } from "tailwind-variants";

export const button = tv({
  base: `rounded-full
  font-bold
  hover:bg-teal-400
  focus:bg-teal-100 focus:ring-4 focus:ring-teal-500 focus:text-teal-700
  `,
  variants: {
    size: {
      md: "py-2 px-4 text-base",
      lg: "py-4 px-6 text-lg",
    },
    shape: {
      solid: "bg-teal-500 text-white",
      outlined: "bg-white text-teal-700 border-2 border-teal-700",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "solid",
  },
});

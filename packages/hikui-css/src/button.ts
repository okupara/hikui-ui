import { tv } from "tailwind-variants";

export const button = tv({
  base: `relative px-4 py-2 text-gray-900 font-bold rounded-sm bg-blue-200
  hover:bg-blue-300
  active:bg-blue-400 active:text-yellow-100 active:ring-0
  focus:ring focus:ring-2 focus:bg-blue-500 focus:text-yellow-100 focus:ring-yellow-100 focus:outline-0`,
  variants: {
    size: {
      sm: "text-sm py-1 px-2",
      md: "text-base",
      lg: "text-lg py-4 px-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

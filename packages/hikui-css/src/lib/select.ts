import { tv } from "tailwind-variants";

export const select = tv({
  slots: {
    trigger: `border border-bg-gray-200
    shadow-md
    focus:shadow-none focus:bg-gray-50
    py-2 px-6 rounded-full`,
  },
});

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const gapBase = {
  "0": "gap-0",
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "5": "gap-6",
  "6": "gap-8",
  "7": "gap-10",
  "8": "gap-12",
  "9": "gap-16",
  "10": "gap-20",
};
const alignBase = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};
const justifyBase = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const xStackVariants = tv({
  base: "flex",
  variants: {
    align: {
      ...alignBase,
    },
    justify: {
      ...justifyBase,
    },
    gap: {
      ...gapBase,
    },
  },
  defaultVariants: {
    align: "center",
    justify: "start",
    gap: "0",
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof xStackVariants> {
  asChild?: boolean;
}

export const XStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, align, gap, justify, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(xStackVariants({ align, gap, justify, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
XStack.displayName = "XStack";

const yStackVariants = tv({
  base: "flex flex-col",
  variants: {
    align: {
      ...alignBase,
    },
    justify: {
      ...justifyBase,
    },
    gap: {
      ...gapBase,
    },
  },
  defaultVariants: {
    align: "start",
    justify: "start",
    gap: "0",
  },
});

export const YStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, align, gap, justify, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(yStackVariants({ align, gap, justify, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
XStack.displayName = "YStack";

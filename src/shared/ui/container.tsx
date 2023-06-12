import clsx from "clsx";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ children, className }: Props) => (
  <div className={clsx("max-w-4xl m-auto", className)}>{children}</div>
);

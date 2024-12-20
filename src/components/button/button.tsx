import { ButtonHTMLAttributes } from "react";
import { Link, LinkProps } from "@tanstack/react-router";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  variant: "primary" | "secondary";
}

const primaryClasses = "bg-primary text-white";
const secondaryClasses = "border-primary border border-solid text-primary";

const buildClasses = (variant: "primary" | "secondary", otherClasses?: string) => {
  const variantClasses = variant === "primary" ? primaryClasses : secondaryClasses;
  return `${variantClasses} ${otherClasses} px-4 py-2 rounded-lg`.trim();
}

export function Button(props: ButtonProps) {
  const {variant, className, ...buttonProps} = props;
  return (
    <button {...buttonProps}  className={buildClasses(variant, className)} />
  );
}

interface LinkButtonProps extends LinkProps {
  variant: "primary" | "secondary";
  className?: string;
}

export function LinkButton(props: LinkButtonProps) {
  const {variant, className,  ...linkProps} = props;
  return (
    <Link {...linkProps} className={buildClasses(variant, className)} />
  );
}

interface AnchorButtonProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  variant: "primary" | "secondary";
}

export function AnchorButton(props: AnchorButtonProps) {
  const {variant, className, ...anchorProps} = props;
  return (
    <a {...anchorProps} className={buildClasses(variant, className)} />
  );
}
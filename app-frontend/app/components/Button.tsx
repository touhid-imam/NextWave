import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  slug: string;
  color: string;
}

const Button = (button: Props) => {
  return (
    <Link
      href={`/${button.slug}`}
      className={`btn btn--medium btn--${button.color}`}
    >
      {button.text}
    </Link>
  );
};

export default Button;

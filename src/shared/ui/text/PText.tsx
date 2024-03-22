import { ComponentPropsWithoutRef, ElementType} from "react";
import s from "./ptext.module.css";

type PTextProps<T extends ElementType = 'p'> = {
  variant?: 'regular16' | 'bold'
} & ComponentPropsWithoutRef<T>;

const PText = <T extends ElementType = 'p'>(
  props: PTextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof PTextProps<T>>
) => {
  const {
    variant = 'regular16',
    className, as: Component = 'p',
    ...rest
  } = props;

  return <Component className={`${variant && s[variant]}  ${className}`} {...rest} />;
};

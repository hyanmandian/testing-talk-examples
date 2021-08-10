import { HTMLAttributes } from "react";

type Props = {
  show: boolean;
} & HTMLAttributes<HTMLElement>;

export function Loader({ show, ...props }: Props) {
  return show ? <div {...props}>Carregando...</div> : null;
}

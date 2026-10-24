import type { ComponentProps, MouseEvent } from "react";
import { navigate } from "./navigation";

type LinkProps = Omit<ComponentProps<"a">, "href"> & { to: string };

/** Anchor that navigates in-app. Modified clicks (new tab, etc.) and external targets keep native behavior. */
export function Link({ to, onClick, ...rest }: LinkProps) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (rest.target && rest.target !== "_self") return;
    e.preventDefault();
    navigate(to);
  };
  return <a href={to} onClick={handle} {...rest} />;
}

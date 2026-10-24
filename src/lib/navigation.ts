import { useSyncExternalStore } from "react";

/** Minimal History-API router: the site has a handful of static pages, so no routing library is needed. */

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

window.addEventListener("popstate", notify);

const normalize = (p: string) => p.replace(/\/+$/, "") || "/";

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getPath = () => normalize(window.location.pathname);

export function usePath(): string {
  return useSyncExternalStore(subscribe, getPath);
}

export function navigate(to: string): void {
  if (normalize(to) === getPath()) {
    window.scrollTo({ top: 0 });
    return;
  }
  window.history.pushState(null, "", to);
  notify();
}

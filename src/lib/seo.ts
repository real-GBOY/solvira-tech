import { SITE } from "@/config/site";

function setMeta(selector: string, attr: "content" | "href", value: string): void {
  document.head.querySelector(selector)?.setAttribute(attr, value);
}

interface PageMeta {
  title: string;
  description: string;
  path: string;
  index: boolean;
}

/** Keep title, description, canonical and share tags in step with the page shown (the HTML ships the home values). */
export function setPageMeta({ title, description, path, index }: PageMeta): void {
  document.title = title;
  const url = `${SITE.url}${path}`;
  setMeta('meta[name="description"]', "content", description);
  setMeta('link[rel="canonical"]', "href", url);
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('meta[property="og:title"]', "content", title);
  setMeta('meta[property="og:description"]', "content", description);
  setMeta('meta[name="twitter:title"]', "content", title);
  setMeta('meta[name="twitter:description"]', "content", description);
  setMeta('meta[name="robots"]', "content", index ? "index, follow, max-image-preview:large" : "noindex, follow");
}

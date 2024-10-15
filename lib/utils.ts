import qs from "query-string";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface URLQueryParams {
  params: string;
  key: string;
  value: string;
}
interface removeUrlQueryParams {
  params: string;
  keysToRemove: string[];
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function sanitizeQuery(query: string | undefined | null): string {
  if (query === "" || !query) return "";
  if (typeof query !== "string") {
    throw new Error("Invalid query type");
  }

  // Trim whitespace
  let sanitizedQuery = query.trim();

  // Escape special regex characters
  sanitizedQuery = sanitizedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  return sanitizedQuery;
}
export function removeKeysFromQuery({
  params,
  keysToRemove,
}: removeUrlQueryParams) {
  const currentUrl = qs.parse(params);
  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}
export function formUrlQuery({ params, key, value }: URLQueryParams) {
  const currentUrl = qs.parse(params);
  currentUrl[key] = value;
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

import { useState } from "react";

type SearchParams = Record<string, string | null | undefined>;

// Custom useSearchParams similar to that of React Router
function useSearchParams(): [URLSearchParams, (newParams: SearchParams) => void] {
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    () => new URLSearchParams(window.location.search)
  );

  const updateSearchParams = (newParams: SearchParams): void => {
    const currentUrl = new URL(window.location.href);

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        currentUrl.searchParams.delete(key); // Remove the parameter if value is null/undefined
      } else {
        currentUrl.searchParams.set(key, value);
      }
    });

    // Push the updated URL to the browser history without reloading
    window.history.pushState({}, "", currentUrl.toString());

    // Update local state
    setSearchParams(new URLSearchParams(currentUrl.search));
  };

  return [searchParams, updateSearchParams];
}

export default useSearchParams;

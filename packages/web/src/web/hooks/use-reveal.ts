import { useEffect } from "react";

/**
 * Adds `.is-in` to every `.reveal` element once it enters the viewport.
 * Runs once on mount and observes nodes added later.
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const scan = () => {
      for (const el of document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)")) {
        observer.observe(el);
      }
    };

    scan();
    const mutation = new MutationObserver(scan);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}

import { useEffect } from "react";

export function useClickOutside(ref, callback, exceptions) {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      let hasClickedAnException = false;

      exceptions.forEach((el) => {
        const exception = document.getElementById(el);
        if (exception.contains(e.target)) hasClickedAnException = true;
      });

      if (!hasClickedAnException) {
        callback();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}

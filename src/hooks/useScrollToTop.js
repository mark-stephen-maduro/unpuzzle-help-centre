import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (!location) return;

    window.scrollTo(0, 0);
  }, [location]);
}

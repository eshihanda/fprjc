import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-65ZK3BSK91", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}
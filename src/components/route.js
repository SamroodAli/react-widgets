import { useEffect } from "react";

const Route = ({ path, children }) => {
  useEffect(() => {
    window.addEventListener("popstate", () => {
      console.log("url changed");
    });
  }, []);
  return window.location.pathname === path ? children : null;
};

export default Route;

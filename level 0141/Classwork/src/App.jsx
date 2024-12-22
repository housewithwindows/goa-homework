import { useEffect, useState } from "react";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const [value, setValue] = useState("value");

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("resize");
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });

    return () => {
      console.log("clean terminal");
      window.removeEventListener("resize", () => {
        setHeight(0);
        setWidth(0);
      });
    };
  }, []);

  return (
    <>
      
      
        <div>width: {width}</div>
        <div>height: {height}</div>
      
    </>
  );
}





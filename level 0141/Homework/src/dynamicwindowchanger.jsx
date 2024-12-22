import { useEffect } from "react";
import { useState } from "react";


export default function WindowChanger() {
   


  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("resize");
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });
    if (width > height) {
        console.log("ფანჯარა არის ჰორიზონტალური");
    }else{
        console.log("ფანჯარა არის ვერტიკალური");
    };

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

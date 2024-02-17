import {React, useEffect} from "react";

export default function WaveDrawing({drawing}) {
  useEffect(() => {
    console.log(drawing);
  }, [drawing]);
    return <div>WaveDrawing</div>;
}
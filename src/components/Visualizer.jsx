import { React, useState, useEffect } from "react";
import VCDParse from "../scripts/vcd_parse";

export default function Visualizer() {
  const [data, setData] = useState(""); 

  // getting the file information
  function previewFile(){
    const content = document.querySelector(".content");
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        content.innerText = VCDParse(reader.result);
      },
      false,
    );

    if (file) {
      reader.readAsText(file);
    }
  }

  return <>
  <input type="file" onChange={previewFile} />
  <p className="content">{data}</p>
  <div>visualizer</div>
  </>;
}

import { React, useState, useEffect } from "react";
import VCDParse from "../scripts/vcd_parse";
import WaveDrawing from "./WaveDrawing";

export default function Visualizer() {
  const [data, setData] = useState(""); 
  const [key, setKey] = useState();

  const fileIn =
    '$date Sat Feb 17 04:44:30 2024 $end $version Icarus Verilog $end $timescale 1s $end $scope module half1_adder $end $var wire 1 ! f $end $var wire 1 " g $end $var reg 1 # d $end $var reg 1 $ e $end $upscope $end $enddefinitions $end $comment Show the parameter values. $end $dumpall $end #0 $dumpvars 1$ 1# z" z! $end #10 0# #20 0$ 1# #30 0# #40';

  useEffect(() => {
    const parsedVCD = VCDParse(fileIn);
    const signalVals = [];
    for(const symbol in parsedVCD[0]){
      signalVals.push([symbol, parsedVCD[0][symbol], parsedVCD[1]]);
    }
    setData(signalVals);
    setKey(parsedVCD[3]);
  }, []);

  return <div className="bg-gray-900 text-white p-5 overflow-auto">
    <div className="absolute bg-gray-900 pl-4 left-0">
    {
      data == "" ? <h1>Loading...</h1> :
      data.map((elem) => (
          <p className="pr-4 content-center pb-9">{key[elem[0]]}</p>
      ))
    }
    </div>
    { data == "" ? <h1>Loading...</h1> :
    data.map((elem) => (
    <div className="flex content-center border-t-[1px] border-slate-400 border-dashed w-auto">
      <WaveDrawing drawing={elem} />
    </div>
    ))}
    <div className="flex content-center border-b-[1px] border-slate-400 border-dashed"></div>

</div>;
}

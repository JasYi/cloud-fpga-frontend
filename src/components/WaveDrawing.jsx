import {React, useEffect, useRef, useState} from "react";
import useMousePosition from "./UseMousePosition";


export default function WaveDrawing(props) {
    console.log(props.scroll)
    const mousePosition = useMousePosition();
    const xConst = 10;
    const yConst = 15;
    const yPadding = 30;
    const endTime = parseInt(props.drawing[2]);

    const canvasRef = useRef(null);

    const tempWaveData = [];
    const [waveData, setWaveData] = useState([]);

    function findVal(time){
        const timeVals = props.drawing[1];
        let res = -1;
        console.log(timeVals);
        console.log(time);
        if(time < 0)
            return timeVals[0][0];
        else if(time > endTime){
            return timeVals[timeVals.length - 1][0];
        }
        for(let i = 0; i < timeVals.length; i++){
            console.log("time vals: " + timeVals[i][1] + " time " + time)
            if(timeVals[i][1] < time){
                console.log("under");
                res = timeVals[i][0]
            }
        }
        return res;
    }

    function getTime(time){
        if(time < 0)
            return 0;
        else if(time > endTime){
            return endTime;
        }
        return time;
    }

    // function for drawing 
    function drawPulse(y, start, end){
        let color = "green"
        if(y == -1)
            color = "red"
        tempWaveData.push([start*xConst, yPadding-y*yConst, end*xConst, yPadding-y*yConst, color]);
    }


    // drawing the wave function
    function draw(){
        const singleWave = props.drawing[1];
        for(let i = 0; i < singleWave.length; i++){
            let curr = singleWave[i];
            let next = singleWave[i+1];
            if(i <= singleWave.length - 2){
                drawPulse(curr[0], curr[1], singleWave[i+1][1]);
            }
            else{
                drawPulse(curr[0], curr[1], endTime);
            }
        }
    }

    useEffect(() => {
        if(props.drawing )
        draw();
        setWaveData(tempWaveData);
    }, [props.drawing]);

    return <>
    <div className="flex w-auto pl-3 ">
        <p className="w-10 pr-2 fixed" >{getTime((mousePosition["x"] - 20 - 44 + props.scroll)/xConst)} {findVal((mousePosition["x"] - 20 - 44 + props.scroll)/xConst)}</p>
        <svg width={endTime * xConst + 20} height="60" className="pl-8">
            {
            waveData == [] ? <></> : waveData.map((elem) => (
                <line x1={elem[0]} y1={elem[1]} x2={elem[2]} y2={elem[3]} stroke={elem[4]} stroke-width="3"/>
                ))
            }
            <line x1={mousePosition["x"] - 20 - 44 + props.scroll} y1="2" x2={mousePosition["x"] - 20 - 44 + props.scroll} y2="60" stroke="white" stroke-width="1"/>
        </svg>
    </div>
    </>;
}
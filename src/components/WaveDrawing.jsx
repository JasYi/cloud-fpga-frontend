import {React, useEffect, useRef, useState} from "react";


export default function WaveDrawing(props) {
    console.log(props.drawing);
    const xConst = 10;
    const yConst = 15;
    const yPadding = 30;
    const endTime = parseInt(props.drawing[2]);

    const canvasRef = useRef(null);

    const tempWaveData = [];
    const [waveData, setWaveData] = useState([]);

    // function for drawing 
    function drawPulse(y, start, end){
        console.log("drawing from: " + start + " to: " + end + " at y: " + y);
        let color = "green"
        if(y == -1)
            color = "red"
        tempWaveData.push([start*xConst, yPadding-y*yConst, end*xConst, yPadding-y*yConst, color]);
    }


    // drawing the wave function
    function draw(){
        console.log("in draw")
        console.log(props.drawing);
        const singleWave = props.drawing[1];
        console.log("wave plotting: " + singleWave);
        for(let i = 0; i < singleWave.length; i++){
            let curr = singleWave[i];
            let next = singleWave[i+1];
            console.log("next: " + curr)
            if(i <= singleWave.length - 2){
                console.log("test 1: " + curr[1]);
                console.log("test 2: " + singleWave[i+1][1]);
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
    <div className="flex w-auto pl-5 ">
        <svg width={endTime * xConst + 20} height="60" className="">
            {
            waveData == [] ? <></> : waveData.map((elem) => (
                <line x1={elem[0]} y1={elem[1]} x2={elem[2]} y2={elem[3]} stroke={elem[4]} stroke-width="3"/>
                ))
            }
        </svg>
        </div>
    </>;
}
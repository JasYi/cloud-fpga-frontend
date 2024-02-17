import {React, useEffect} from "react";

export default function WaveDrawing(props) {
    const xConst = 5;
    const yConst = 100;
    const yPadding = 20;
    const endTime = parseInt(props.drawing[1]);
    
    // function for drawing 
    function drawPulse(ctx, y, start, end){
        console.log("drawing from: " + start + " to: " + end + " at y: " + y);
        ctx.lineTo(start*xConst, yPadding - y*xConst);
        ctx.lineTo(end*xConst, yPadding - y*xConst);
    }


    // drawing the wave function
    function draw(){
        console.log(props.drawing);
        const singleWave = props.drawing[0]['#'];
        console.log("wave plotting: " + singleWave);
        const canvas = document.getElementById("test");
        if(canvas.getContext){
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            for(let i = 0; i < singleWave.length; i++){
                let curr = singleWave[i];
                let next = singleWave[i+1];
                console.log("next: " + next)
                if(i <= singleWave.length - 2){
                    console.log("test 1: " + curr[1]);
                    console.log("test 2: " + singleWave[i+1][1]);
                    drawPulse(ctx, curr[0], curr[1], singleWave[i+1][1]);
                }
                else{
                    drawPulse(ctx, curr[0], curr[1], endTime);
                }
            }
            ctx.stroke();
        }
    }

    useEffect(() => {
        if(props.drawing )
        draw();
    }, [props.drawing]);

    return <>
    <p>{JSON.stringify(props.drawing)}</p>
        <canvas id="test" width="150" height="150"></canvas>
    </>;
}
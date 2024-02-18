import {React, useEffect} from "react";
import WaveDrawing from "./WaveDrawing";

export default function WaveView(props) {
    useEffect(() => {
        
        const dataIn = props.drawing;

    }, [props.drawing]);

    return <>
    <WaveDrawing drawing={props.drawing} />
    </>;
}
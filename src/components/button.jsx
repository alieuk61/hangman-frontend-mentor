import { myContext } from "../context/context";
import { useContext, useState } from "react";
import PlayIcon from "../assets/images/icon-play";

export default function Button (){

    const {setToPause} = useContext(myContext);

    return(
        <div className="button">
            <PlayIcon />
        </div>
    )
}
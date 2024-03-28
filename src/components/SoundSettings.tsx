import React, {useState, useContext} from "react";
import { StateContext } from "./OverallContext";
import { StateProvider } from "./OverallContext";

const SoundSettings = () => {
    const {state, changeState} = useContext(StateContext);

    return <div onClick={changeState}>{state}</div>;

}

export default SoundSettings;
import React, {useContext, createContext, useState} from "react";

type StateContextType = {
    state: string;
    changeState: () => void;
};

const StateContext = createContext<StateContextType>({
    state:"loud",
    changeState: () => {},
});

const StateProvider = ({ children }: any) => {
    const [state, setState] = useState("loud");
    const changeState = () => setState("quiet")

    return(
        <StateContext.Provider value = {{state, changeState }}>
            {children}
        </StateContext.Provider>
    );
}

export {StateContext, StateProvider};





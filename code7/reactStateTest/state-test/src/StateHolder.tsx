import React, { createContext, useState } from "react";
interface IContextDefault {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>> | undefined;
}
interface IStateHolderProps {
    children: React.ReactNode;
}
const defaults: IContextDefault = {
    text: "you should not see this?",
    setText: undefined
}
const ExampleContext = createContext(defaults);
const StateHolder = (props: IStateHolderProps) => {
    const [text, setText] = useState(defaults.text);
    const providedState = {text, setText}; //shorthand for {text: text, setText: setText}
    return (
        <ExampleContext.Provider value={providedState}>
            {props.children}
        </ExampleContext.Provider>
    )
}
export {ExampleContext, StateHolder};
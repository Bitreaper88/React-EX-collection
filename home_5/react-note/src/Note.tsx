import React, { useState } from 'react';
interface INote {
    text: string
}

const Note: React.FC<INote> = props => {
    return (
        <div>
            Note
            {props.text}
        </div>
    )
}

const Container: React.FC = () => {

    const addNote = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("MouseEvent")
    }

    return (
        <div>
            <div>
            <button onClick={addNote}>
                Add a note
            </button>

            </div>
            <div id="notes">

            </div>

        </div>
    );
}

export default Container;
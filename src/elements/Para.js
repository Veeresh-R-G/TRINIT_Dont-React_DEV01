import React from 'react';
import { useState } from "react";

function Para() {
    let defStyles =
    {
        color: "black",
        font: 'Sans-serif',
        fontSize: "30px",
    }

    let [style, setStyle] = useState(defStyles);
    let [text2, setText] = useState("Customize Me")
    let [visible, setVisible] = useState(0);

    const changeText = (e) => {

        let userText = e.target.value;
        console.log(userText)
        setText(userText);
    }

    const changeFontSize = (e) => {
        // (document.querySelector("#font_size").value);
        let size = e.target.value
        console.log(size)
        let copyStyle = { ...style };

        copyStyle['fontSize'] = size
        setStyle(copyStyle);
    }

    const changeBackgroundColor = (e) => {
        let copyStyle = { ...style };

        let userColor = e.target.value;
        copyStyle["color"] = userColor;
        setStyle(copyStyle);
    }

    return (
        <div className='border-2 border-black w-myWidth7 rounded-xl mx-32'>
            <hr></hr>
            <p className="text-2xl uppercase underline font-black  mb-20 ">Custamize Paragraph</p>
            <p id="para" style={style} className='border border-black mx-4 rounded-lg'>{text2}</p>
            <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" placeholder="Type some Text" id="text3" type="text" onChange={changeText}></input><br />
            <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" id="font_size" type="text" onChange={changeFontSize} placeholder="Font Size(in px)"></input> <br />

            <p className='inline text-xl uppercase'>Text Color : </p>            <input id="font_color" type="color" onChange={changeBackgroundColor}></input>
        </div >);
}

export default Para;

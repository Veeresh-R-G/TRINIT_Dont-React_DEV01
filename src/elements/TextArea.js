import React from 'react';
import { useState } from 'react'

function TextArea() {

    let styles =
    {
        color: "#0400ff",
    }

    const [text, setText] = useState('');
    const [rows, setR] = useState(5);
    const [cols, setC] = useState(22);
    let [style, setStyle] = useState(styles);

    const handleChange = (e) => {
        setText(e.target.value);

    }


    const setr = (e) => {
        setR(e.target.value);

    }
    const setc = (e) => {
        setC(e.target.value);

    }

    const changeColor = (e) => {
        let temp = styles;
        console.log(e.target.value);
        temp['color'] = e.target.value;
        setStyle(temp);
        console.log(styles);
    }

    return <div className='border-2 border-black rounded-xl p-4 w-myWidth7'>

        <p className="text-2xl uppercase underline font-bold  mb-20 "> Text-Area Customization</p>
        Text Color <br />
        <input placeholder="color" id="bgcolor" type="color" onChange={changeColor} /> <br />
        <input className='shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md' placeholder='Enter text' type="text" onChange={handleChange} /> <br />
        <p className='inline'></p>
        <input className="w-48  shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" placeholder='Enter Rows' id="rows" type="number" min="5" max="30" onChange={setr} /> <br />
        <input className='w-48 shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md' placeholder='Enter Columns' id="cols" type="number" min="20" max="60" onChange={setc} />
        <br /><br />



        <textarea className='' style={style} rows={rows} cols={cols} value={text} />
    </div>;
}

export default TextArea;

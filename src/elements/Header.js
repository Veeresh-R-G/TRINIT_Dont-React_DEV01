import React from 'react';
import { useState } from "react";

function Header() {
    let defStyles =
    {

        color: "black",
        font: 'Sans-serif',
        fontSize: "2.25rem",
    }

    let [stylepara, setStylepara] = useState(defStyles);
    let [textpara, setTextpara] = useState("Custamize Me ! ")

    const changeText = (e) => {

        // let userText = (document.querySelector("#para11").value);
        let userText = e.target.value;
        //document.querySelector("#para").innerText = userText;
        console.log(userText)
        setTextpara(userText);
    }

    const handleHeader = () => {
        let size = (document.querySelector("#header_size").value);
        console.log(size)
        let copyStyle = { ...stylepara };
        if (size === 'H1') {
            copyStyle['fontSize'] = "2.25rem";
        }
        if (size === 'H2') {
            copyStyle['fontSize'] = "2rem";
        }
        if (size === 'H3') {
            console.log('true');
            copyStyle['fontSize'] = "1.75rem";
        }
        if (size === 'H4') {
            console.log('true');
            copyStyle['fontSize'] = "1.5rem";
        }
        if (size === 'H5') {
            console.log('true');
            copyStyle['fontSize'] = "1.25rem";
        }
        if (size === 'H6') {
            console.log('true');
            copyStyle['fontSize'] = "1rem";
        }
        // switch(size){
        //     case 'H1': copyStyle['fontSize'] = "2.25rem" ;
        //     case 'H2': copyStyle['fontSize'] = "2rem";
        //     case 'H3': copyStyle['fontSize'] = "1.75rem" ;
        //     case 'H4': copyStyle['fontSize'] = "1.5rem" ;
        //     case 'H5': copyStyle['fontSize'] = "1.25rem" ;
        //     case 'H6': copyStyle['fontSize'] = "1rem" ;


        // }
        setStylepara(copyStyle);
    }

    return (
        <div className='border-2 border-black w-myWidth7 rounded-xl'>
            <p className="text-2xl uppercase underline font-black  mb-12">Header - Tag Customization</p>
            <p id="para11" style={stylepara} className='border border-black mx-10 rounded-lg '>{textpara}</p>
            <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" placeholder="Type some Text" id="text1" type="text" onChange={changeText}></input>
            <br />
            <p>Choose the Heading size : </p>
            <select name="head_size" id="header_size" onChange={handleHeader}>
                <option value="H1">H1</option>
                <option value="H2">H2</option>
                <option value="H3">H3</option>
                <option value="H4">H4</option>
                <option value="H5">H5</option>
                <option value="H6">H6</option>
            </select>

        </div>);
}

export default Header;

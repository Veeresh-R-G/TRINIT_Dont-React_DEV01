import { useState } from "react";
const Button = () => {
    // let defColor = "black";
    // let defTextColor = "white"
    // let defMargin = 3;
    let defStyles =
    {
        backgroundColor: "#0400ff",
        color: "white",
        border: "1px",
        borderColor: "black",
        borderRadius: "4px",
        margin: "3px",
        padding: "4px",
        width: "160px",
        height: "34px",
        fontSize: "18px",
    }

    let [style, setStyle] = useState(defStyles);
    let [visible, setVisible] = useState(0);
    const changeBackgroundColor = () => {
        let copyStyle = { ...style };

        let userColor = (document.querySelector("#bgcolor").value);
        copyStyle["backgroundColor"] = userColor;
        setStyle(copyStyle);
    }
    const changeTextColor = (e) => {
        let copyStyle = { ...style };

        let userColor = e.target.value;
        copyStyle["color"] = userColor;
        setStyle(copyStyle);
    }

    const changeText = () => {

        let userText = (document.querySelector("#text").value);
        document.querySelector(".btn").innerText = userText;
    }

    const changeWidth = () => {
        let copyStyle = { ...style };

        let userWidth = (document.querySelector("#width").value);
        copyStyle["width"] = userWidth;
        setStyle(copyStyle);
    }
    const changeHeight = () => {
        let copyStyle = { ...style };

        let userHeight = (document.querySelector("#height").value);
        copyStyle["height"] = userHeight;
        setStyle(copyStyle);
    }
    const changeFontSize = () => {
        let copyStyle = { ...style };

        let userFontSize = (document.querySelector("#fontsize").value);
        copyStyle["fontSize"] = userFontSize;
        setStyle(copyStyle);
    }


    return (
        <div className="button border-2 border-black flex flex-col items-center rounded-xl w-myWidth7 pb-4 mr-32 ml-32">
            <p className="text-2xl uppercase underline font-black  mb-3">Button Customization</p>
            <button style={style} className="btn">
                Customize me
            </button>

            {
                /*
                 Here we will define what to do with the button 
                */
            }

            <div className="changes-here ">
                Background Color : &nbsp;
                <input style={{ border: "1px black solid", marginTop: "20px" }} placeholder="color" id="bgcolor" type="color" onChange={changeBackgroundColor}></input> <br />
                Text Color : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input style={{ border: "1px black solid", marginTop: "20px" }} placeholder="color" id="textcolor" type="color" onChange={changeTextColor}></input> <br />
                <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" style={{ border: "1px black solid", marginTop: "20px" }
                } placeholder="Type some Text" id="text" type="text" onChange={changeText} ></input> <br />

                <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" style={{ border: "1px black solid", marginTop: "20px" }} placeholder="Type Width(in px)" id="width" type="text" onChange={changeWidth} ></input > <br />

                <input className="pl-2 shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" style={{ border: "1px black solid", marginTop: "20px" }} placeholder="Type Height(in px)" id="height" type="text" onChange={changeHeight} ></input > <br />
                <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" style={{ border: "1px black solid", marginTop: "20px" }} placeholder="Type Font Size(in px)" id="fontsize" type="text" onChange={changeFontSize} ></input >
            </div >
        </div >
    );
}

export default Button;
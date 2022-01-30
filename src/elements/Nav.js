//header ge color haaku 


import { useState } from "react";
const Nav = () => {
    // let defColor = "black";
    // let defTextColor = "white"
    // let defMargin = 3;
    let defStyles1 =
    {
        backgroundColor: "#000000",
        color: "white",
        margin: "3px",
        padding: "16px",
        width: "100%",
        height: "58px",
        fontSize: "12px"

    }
    const initialLinks = {
        link1: "",
        link2: "",
        link3: "",
        link4: "",
    };
    const initialAText = {
        a1: "",
        a2: "",
        a3: "",
        a4: "",
    };

    //real navbar de f the spwlling
    let [style1, setStyle1] = useState(defStyles1);
    let [font, setFont] = useState("12px");
    let [links, setLinks] = useState(initialLinks);
    let [text, setTexts] = useState(initialAText);


    const changeFont = (e) => {
        let fontSize = (document.querySelector("#fontsize").value);
        document.querySelector("#fontsize").value = fontSize;

        setFont(fontSize + "px")
        let temp = { ...defStyles1 };
        temp["fontSize"] = font;
        setStyle1(temp);
    }



    const handleChange = (e) => {
        // setLinks(prevState => ({ ...prevState, [e.target.name]: e.target.value })); //this thingy
        let linkChoosen = e.target.name;
        let temp = { ...links }
        if (linkChoosen === 'link1') {
            temp['link1'] = e.target.value
        }
        else if (linkChoosen === 'link2') {
            temp['link2'] = e.target.value
        }
        else if (linkChoosen === 'link3') {
            temp['link3'] = e.target.value
        }
        else {
            temp['link4'] = e.target.value
        }

        setLinks(temp);
    }

    const handleChange1 = (e) => {
        // setLinks(prevState => ({ ...prevState, [e.target.name]: e.target.value })); //this thingy
        let textChoosen = e.target.name;
        let temp = { ...text }
        if (textChoosen === 'a1') {
            temp['a1'] = e.target.value
        }
        else if (textChoosen === 'a2') {
            temp['a2'] = e.target.value
        }
        else if (textChoosen === 'a3') {
            temp['a3'] = e.target.value
        }
        else {
            temp['a4'] = e.target.value
        }

        setTexts(temp);
    }
    const changeBackgroundColor = () => {
        let copyStyle = { ...defStyles1 };

        let userColor = (document.querySelector("#bgcolor").value);
        copyStyle["backgroundColor"] = userColor;
        setStyle1(copyStyle);
    }
    const changeTextColor = () => {
        let copyStyle = { ...defStyles1 };

        let userColor = (document.querySelector("#textcolor").value);
        copyStyle["color"] = userColor;
        setStyle1(copyStyle);
    }


    return (
        <div className="navbar border-2 border-black rounded-xl mb-20">
            <p className='text-3xl uppercase underline font-bold  mb-3'>navbar</p>
            <div className="navbar ">
                <nav style={style1}>
                    <a className="mr-28 p-2 px-10" href={(links['link1'])}>{text['a1']}</a>
                    <a className="mr-28 p-2 px-10" href={(links['link2'])}>{text['a2']}</a>
                    <a className="mr-28 p-2 px-10" href={(links['link3'])}>{text['a3']}</a>
                    <a className="mr-28 p-2 px-10" href={(links['link4'])}>{text['a4']}</a>
                </nav >
            </div >

            <div className="flex flex-row justify-center items-center">
                <div className="mr-56">

                    <p className="text-xl font-black"> FONT SIZE : &nbsp; &nbsp;</p>

                    <input className="" placeholder="Font Size" id="fontsize" type="range" onChange={changeFont} value={font} min="8" max="32" />{font}<br />
                    <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" placeholder="Link 1" id="text1" name="link1" type="text" onChange={handleChange} value={links.link1 || ''} /><br />
                    <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" placeholder="Link 2" id="text2" name="link2" type="text" onChange={handleChange} value={links.link2 || ''} /><br />
                    <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" placeholder="Link 3" id="text3" name="link3" type="text" onChange={handleChange} value={links.link3 || ''} /><br />
                    <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" placeholder="Link 4" id="text4" name="link4" type="text" onChange={handleChange} value={links.link4 || ''} /><br />
                    <p className="text-xl font-semibold uppercase inline">Choose Background Color : &nbsp;</p>
                    <input style={{ border: "1px black solid", }} placeholder="color" id="bgcolor" type="color" onChange={changeBackgroundColor}></input> <br />
                    <p className="text-xl font-semibold uppercase inline" > Choose Font Color : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <input className="mb-3 mt-3" style={{ border: "1px black solid", }} placeholder="color" id="textcolor" type="color" onChange={changeTextColor}></input> <br />
                </div>
                <div>

                    <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" placeholder="Text 1" id="atext1" name="a1" type="text" onChange={handleChange1} value={text.a1 || ''} /><br />
                    <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" placeholder="Text 2" id="atext2" name="a2" type="text" onChange={handleChange1} value={text.a2 || ''} /><br />
                    <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" placeholder="Text 3" id="atext3" name="a3" type="text" onChange={handleChange1} value={text.a3 || ''} /><br />
                    <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" placeholder="Text 4" id="atext4" name="a4" type="text" onChange={handleChange1} value={text.a4 || ''} /><br />

                </div>

            </div>

            {/* <div>
        {JSON.stringify(links)}
        </div> 
        {JSON.stringify(defStyles)}*/}

            {/* <input type="submit" value="ok!" onClick={doSomething} /> */}
        </div >
    );
}

export default Nav;
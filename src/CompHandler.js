import Button from "./elements/Button";
import Header from "./elements/Header";
import Nav from './elements/Nav'
import Para from "./elements/Para";
import TextArea from "./elements/TextArea";


const CompHandler = () => {
    let style =
    {
        display: "flex",
        flexDirection: "column",
        width: "240px",
        border: "1px black solid",
        height: "100vh"
    }
    // border border-black w-48 h-screen flex flex-col
    return (
        <div className="compoHandler m-12 grid grid-row-2">

            <Nav />
            <div className="flex flex-row my-10">
                <Button />
                <Header />
            </div>
            <div className="flex flex-row my-10">
                <Para />
                <TextArea />
            </div>




        </div>
    );
}

export default CompHandler;
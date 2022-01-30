const Home = () => {
    return (
        <div className="bg-custom w-screen h-screen">
            <div className="w-myWidth3 h-myHeight1 bg-white rounded-2xl ml-28 mt-28 absolute flex flex-row">
                <div className="  w-myWidth2 h-full ">
                    <h1 className="text-blue-900/90 text-5xl font-bold my-16 uppercase">Welcome ! ! </h1>
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab unde officia, obcaecati soluta aut tempora rerum possimus quibusdam incidunt eveniet?</h1>
                </div>
                <div className=" w-myWidth2 h-full">
                    <h1 className="text-blue-900/90 text-4xl font-bold my-24">Check the Demo here </h1>
                    <button><a className="text-white bg-blue-400 p-4 rounded-xl hover:bg-blue-600 uppercase" href="/compo">Click Me ! !</a></button>
                </div>

            </div>
        </div>
    );
}

export default Home;
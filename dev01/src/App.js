
import React, { Fragment,Component, useEffect, useState } from "react";
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import 'grapesjs/dist/grapes.min.js';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js';
import { render } from "react-dom";

// class App extends Component{
//   componentDidMount(){
    
//       grapesjs.init({
//         container: '#gjs',
//         pugins: ['gjs-preset-webpage'],
//       })
//     }

//   render(){
//     return (
//     <Fragment>
//       <div id="gjs"></div>
//     </Fragment>
//     );
//   }
// }

// export default App;

function App(){

  const [editor, setEditor] = useState(null);
  useEffect(()=>{
    const editor =  grapesjs.init({
        container: '#gjs',
        plugins: ['gjs-preset-webpage'],
         });
         setEditor(editor);

  },[]);

  return <div className="App">
    <div id="editor">
    <div id="gjs">
      
    </div>
    </div>

  </div>
}

export default App;
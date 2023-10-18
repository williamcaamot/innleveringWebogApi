import {BrowserRouter} from "react-router-dom";
import {Header} from "./Header.jsx";
import {Notes} from "./Notes.jsx";


function App(){



    return<BrowserRouter>
        <Header/>

        <Notes/>


    </BrowserRouter>
}

export default App;
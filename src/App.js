import React, { useContext } from "react"
import { Switch, Route } from 'react-router-dom'
import AppContext from './context/app-context'
import Header from "./components/Header"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"


function App() {
    const context = useContext(AppContext)
    console.log(context.name)
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/"><Photos /></Route>
                <Route path="/cart"><Cart /></Route>
            </Switch>
        </div>
    )
}

export default App
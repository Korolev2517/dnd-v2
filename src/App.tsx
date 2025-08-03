import { FieldComp } from './components/FieldComp';
import { CreateCardBtn } from "./components/CreateCardBtn.tsx";
// import { CardComponent } from "./components/CardCmponent.tsx";

import './App.css'

export default function App() {
    return (
        <div className='main'>
            <CreateCardBtn />
            <FieldComp />
            <FieldComp />
            <FieldComp />
        </div>
    )
}
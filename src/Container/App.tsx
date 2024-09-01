import React from "react";
import {Header, Footer} from '../Components/Layout';
import { ForecastItemDetails, HomePage, HW1, Login, Register, NoFound } from "../Pages";
import { ModalWindow } from "../Components/ModalWindow";
import { Route, Routes } from "react-router-dom";

function App() {
    return(
        <div>
            <Header />
            <div className="pb-5">
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/forecastItemDetails/:forecastItemId" element={<ForecastItemDetails/>}></Route>
                    <Route path="/HW1" element={<HW1/>}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/Register" element={<Register/>}></Route>
                    <Route path="/NoFound" element={<NoFound/>}></Route>
                </Routes>

            </div>
            <Footer />
        </div>
    );
}

export default App;
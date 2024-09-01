import React from "react";
import { ForecastItemList } from "../Components/ForecastItems";

function Home() {
    return(
        <div>
            <div className="container p-2">
                <ForecastItemList />
            </div>
        </div>
    )
}

export default Home;
import { useEffect, useState } from "react";
import "./App.css";
import BarChart from "./Component/BarChart";
import LineChart from "./Component/LineChart";
import PieChart from "./Component/PieChart";
import DoughnutChart from "./Component/DoughnutChart";
import Likelihood from "./KeyvaluePair/Likelihood";
import Revelance from "./KeyvaluePair/Revelance";
import Country from "./KeyvaluePair/Country";
import Topic from "./KeyvaluePair/Topic";
import Region from "./KeyvaluePair/Region";
import Intensity from "./KeyvaluePair/Intensity";
import Year from "./KeyvaluePair/Year";
import FilterData from './FilteredData/FilterData'

function App() {
  return (
    <div>
      <div className="mb-20">
        <FilterData/>
      </div>
      <div className=" py-5 bg-slate-700 shadow-xl "></div>
      <div className=" flex mx-4">
        <div className="max-w-[510px]  shadow-lg mx-12 my-8  border">
          <p className=" flex px-2 ml-1 my-2 text-xl font-semibold text-black">
            Livelihood
          </p>
          <Likelihood />
        </div>
        <div>
          <Revelance />
        </div>
      </div> 
        <div>
        <Intensity />
        </div>
        <div className="flex">
        <div>
      <Country />  
      </div>
        <div>
        <Region />
      </div>
      </div>
      <div >
        <Topic />
      </div>
      <div>
        <Year/>
      </div>
     
    </div>
  );
}

export default App;

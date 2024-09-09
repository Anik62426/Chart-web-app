
import React from 'react'
import { useState,useEffect } from 'react'
import BarChart from '../Component/BarChart';
import LineChart from '../Component/LineChart';
import PieChart from '../Component/PieChart';

const Region  = () => {
    const [likelihood, setlikelihoodData] = useState({
        labels: [],
        datasets: [
          {
            label: "Intensity",
            data: [],
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
      
      useEffect(()=>{
        fetch("https://chart-web-app.onrender.com/getRegion")
        .then((response) => response.json())
        .then((ele) => {
          const element = {  
            datasets: [
              {
                label: "Region",
                 
                            
                data: Object.values(ele),
                backgroundColor: [
                  '#426AF8',
                  '#44C1FF',
                  '#FEA305',
                  '#FF662F',
                  '#7AECCF',
                ],
                borderColor: [
                  '#426AF8',
                  '#44C1FF',
                  '#FEA305',
                  '#FF662F',
                  '#7AECCF',
                ],
                borderWidth: 2, 
                hoverOffset: 25,
                spacing:4,
                
            
              },
            ],
            labels: Object.keys(ele),
          };
          setlikelihoodData(element)
          })
      },[])



  return (
    <div>
        <div className=' border pt-2 pb-4  px-2 ml-3 mt-10 shadow-lg'  style={{ width: 450 }}>
        <p className=" flex px-2 ml-1 my-2 text-xl font-semibold text-black">
            Region
          </p>
        <PieChart chartData={likelihood} />
      </div>
      <div className=' border  pb-2  pt-3 px-1 ml-3 mt-5 shadow-lg'  style={{ width: 450 }}>
        <LineChart chartData={likelihood}/>
      </div>
    </div>
  )
}

export default Region
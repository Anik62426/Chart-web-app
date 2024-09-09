
import React from 'react'
import { useState,useEffect } from 'react'
import BarChart from '../Component/BarChart';
import DoughnutChart from '../Component/DoughnutChart';
import LineChart from '../Component/LineChart';

const Country = () => {
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
        fetch("https://chart-web-app.onrender.com/getCountry")
        .then((response) => response.json())
        .then((ele) => {
          const element = {
            labels: Object.keys(ele),
            datasets: [
              {
                label: "Country",
                 
                            
                data: Object.values(ele),
                backgroundColor: [
                  '#7AECCF',
                  '#FF662F',
                  '#FEA305',
                  '#44C1FF',
                  '#426AF8',
                 
                ],
                borderColor: [
                  '#7AECCF',
                  '#FF662F',
                  '#FEA305',
                  '#44C1FF',
                  '#426AF8',
                  
                ],
                borderWidth: 2, 
                hoverOffset: 20,
                spacing:5,
                
              },
            ],
          };
          setlikelihoodData(element)
          })
      },[])



  return (
    <div>
        <div className='border mt-10 ml-16 shadow-lg px-2 pt-2 pb-6' style={{ width: 700 }}>
        <p className=" flex px-2 ml-1 my-2 text-xl font-semibold text-black">
            Country
          </p>
        <DoughnutChart chartData={likelihood} />
      </div>
    </div>
  )
}

export default Country

import React from 'react'
import { useState,useEffect } from 'react'
import BarChart from '../Component/BarChart';
import DoughnutChart from '../Component/DoughnutChart';
import LineChart from '../Component/LineChart';
import PieChart from '../Component/PieChart';

const Topic  = () => {
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
        fetch("http://localhost:8000/getTopic")
        .then((response) => response.json())
        .then((ele) => {
          const element = {
            labels: Object.keys(ele),
            datasets: [
              {
                label: "Topic",
                 
                            
                data: Object.values(ele),
                backgroundColor: [
                 '#FEA305',
                  '#7AECCF',
                 '#426AF8', 
                 '#FF662F', 
                 '#44C1FF',    
                ],
                borderColor: [
                 '#FEA305',
                  '#7AECCF',
                 '#426AF8', 
                 '#FF662F',
                 '#44C1FF',
                ],
                borderWidth: 2, 
                hoverOffset: 25,
                spacing:5,
              },
            ],
          };
          setlikelihoodData(element)
          })
      },[])



  return (
    <div>
        <div className='border mt-10 ml-16 shadow-lg px-2 pt-2 pb-8' style={{ width: 1000,height:1100 }}>
        <p className=" flex px-2 ml-1 my-2 text-xl font-semibold text-black">
            Topic
          </p>
        <DoughnutChart chartData={likelihood} />
      </div>
    </div>
  )
}

export default Topic 
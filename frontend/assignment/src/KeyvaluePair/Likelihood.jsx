import React from 'react'
import { useState,useEffect } from 'react'
import LineChart from '../Component/LineChart';
import BarChart from '../Component/BarChart';
import PieChart from '../Component/PieChart';
import DoughnutChart from '../Component/DoughnutChart';
const Likelihood = () => {
    const [likelihood, setlikelihoodData] = useState({
        labels: [],
        datasets: [
          {
            label: "Livelihood",
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
        fetch("https://chart-web-app.onrender.com/getLikelihood")
        .then((response) => response.json())
        .then((ele) => {
          const element = {
            labels: [ 'Livelihood 1','Livelihood 2','Livelihood 3','Livelihood 4','Livelihood Null'],
            datasets: [
              {
                label: "Livelihood",
                 
                            
                data: Object.values(ele),
                backgroundColor: [
                  '#7AECCF',
                  '#FF662F',
                  '#FEA305',
                  '#44C1FF',
                  '#426AF8',
                 
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                ],
                borderWidth: 1, 
                hoverOffset: 20,
                
              },
            ],
          };
          setlikelihoodData(element)
          })
      },[])



  return (
    <div>
        <div className='pt-4' style={{ width: 300 }}>
        <DoughnutChart chartData={likelihood} />
      </div>
    </div>
  )
}

export default Likelihood
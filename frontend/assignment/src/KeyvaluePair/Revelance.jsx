
import React from 'react'
import { useState,useEffect } from 'react'
import LineChart from '../Component/LineChart';
import BarChart from '../Component/BarChart';
const Revelance = () => {
    const [likelihood, setlikelihoodData] = useState({
        labels: [],
        datasets: [
          {
            label: "Relevance",
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
        fetch("http://localhost:8000/getRelevance")
        .then((response) => response.json())
        .then((ele) => {
          const element = {
            labels: Object.keys(ele),
            datasets: [
              {
                label: "Relevance",
                 
                            
                data: Object.values(ele),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 2, 
                minBarLength: 8,
              },
            ],
          };
          setlikelihoodData(element)
          })
      },[])



  return (
    <div>
        <div className='my-8 py-3 px-3 border shadow-lg ' style={{ width: 800 }}>
        <p className=" flex px-2 ml-1 my-2 text-xl font-semibold text-black">
            Relevance
          </p>
        <BarChart chartData={likelihood} />
      </div>
    </div>
  )
}

export default Revelance
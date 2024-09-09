import React from 'react'
import { useState,useEffect } from 'react'
import LineChart from '../Component/LineChart';
import PieChart from '../Component/PieChart';

const Intensity = () => {
    const [userData, setUserData] = useState({
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
        fetch("https://chart-web-app.onrender.com/getdata")
        .then((response) => response.json())
        .then((ele) => {
          const element = {
            labels: Object.keys(ele),
            datasets: [
              {
                label: "Intensity",
                 
                            
                data: Object.values(ele),
                backgroundColor: [
                    'rgb(75, 192, 192)',
                    'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  
                ],
                borderColor: [
                    'rgb(75, 192, 192)',
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  
                ],
                borderWidth: 2, 
                tension: 0.2,
                hoverOffset: 20,
                spacing:3,
                    fill: {
                    target: "origin", 
                    above: "rgba(75, 192, 192, 0.2)"
                  },
                
              },
            ],
          };
          setUserData(element)
          })
      },[])
   

  return (
    <div className='flex'>
         <div className="border pt-2 pb-4  px-3 ml-16 shadow-lg" style={{ width: 750 }}>
         <p className=" flex my-2 text-xl font-semibold text-black">
            Intensity
          </p>
        <LineChart chartData={userData} />
      </div>
      <div className="border pt-2 pb-4  px-2 ml-3 shadow-lg" style={{ width: 400 }}>
      <p className=" flex my-2 text-xl font-semibold text-black">
            Intensity
          </p>
      <PieChart chartData={userData}/>
      </div>
    </div>
  )
}

export default Intensity
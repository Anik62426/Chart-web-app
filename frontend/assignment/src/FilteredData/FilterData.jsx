import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'title', headerName: 'title', width: 1000 },
  { field: 'sector', headerName: 'Sector', width: 100 },
  { field: 'topic', headerName: 'Topic', width: 100 },
  { field: 'insight', headerName: 'Insight', width: 250 },
  { field: 'country', headerName: 'Country', width: 250 },
  { field: 'region', headerName: 'Region', width: 250 },
  { field: 'source', headerName: 'Source', width: 200 },
  { field: 'pestle', headerName: 'Pestle', width: 200 },
  { field: 'impact', headerName: 'Impact', width: 100 },
  { field: 'intensity', headerName: 'Intensity', width: 100 }, 
  { field: 'relevance', headerName: 'Relevance', width: 100 },
  { field: 'likelihood', headerName: 'likelihood', width: 100 },
  { field: 'start_year', headerName: 'Start year', width: 200 },
  { field: 'end_year', headerName: ' End_year', width: 200 }, 
  { field: 'added', headerName: 'Added', width: 200 },
  { field: 'published', headerName: 'Published', width: 200 },
  
];

const rows = [
  {
  id: "668dab8426fdc58f9c733bb3", 
  end_year: null,
  intensity: 6,
  sector: "Energy",
  topic: "gas",
  insight: "Annual Energy Outlook",
  url: "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
  region: "Northern America",
  start_year: null,
  impact: null,
  added: "January, 20 2017 03:51:25",
  published: "January, 09 2017 00:00:00",
  country: "United States of America",
  relevance: 2,
  pestle: "Industries",
  source: "EIA",
  title: "U.S. natural gas consumption is expected to increase during much of the projection period.",
  likelihood: 3}
  
 
];

export default function DataTable() {

 const[useData,setUseData] = useState([]);
 
 useEffect(()=>{
    fetch("https://chart-web-app.onrender.com/getAlldata")
    .then((response) => response.json())
    .then((data)=>setUseData(data))
 },[])

 


  return (
    <div style={{ height: 400, width: '100%' }}>
         <p className=" flex my-2 pl-3 py-3 text-3xl font-bold text-black">
            Filtering Data
          </p>
      <DataGrid
        rows={useData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
    </div>
  );
}

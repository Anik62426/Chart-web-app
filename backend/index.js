import express from 'express';
import dotenv from "dotenv"
import connectDB from "./src/db/index.js";
import { User} from "../backend/src/models/user.model.js"
import cors from "cors"
const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))
app.use(cors());

dotenv.config({
    path: './.env'
})

app.get('/',(req,res)=>{
    res.send('server is ready');
});

app.get('/getAlldata',async(req,res)=>{
    let existedUser = await User.find({})
    // const documents = await User.find({})
    
    // for (let i = 0; i < documents.length; i++) {
    //     const doc = documents[i];
    //     await User.updateOne({ id: doc.id }, { $set: { id: i + 1 } });
    //   }

    res.send(existedUser);
});

app.get('/getdata',async(req,res)=>{
    let existedUser = await User.find({})
    let arr = {"key":"value"};
    
    existedUser.map((a)=>{
     arr[a.intensity] = arr[a.intensity] ? arr[a.intensity]+1 : 1;
    })
    console.log(arr);
    const filteredEntries = Object.entries(arr).filter(([key]) => key !== 'key');
    const filteredObj = Object.fromEntries(filteredEntries);
    res.send(filteredObj);
    // let count = 0;
    // for (var i = 1, l= Object.keys(existedUser).length; i <= l; i++) {
    //  count++;
    // }
    // console.log(count);
    
});

app.get('/getLikelihood',async(req,res)=>{
    let existedUser = await User.find({})
    let likevalue = {"key":"value"};
    
    existedUser.map((a)=>{
        likevalue[a.likelihood] = likevalue[a.likelihood] ? likevalue[a.likelihood]+1 : 1;
    })
    console.log(likevalue);
        const filteredEntries = Object.entries(likevalue).filter(([key]) => key !== 'key');
        const filteredObj = Object.fromEntries(filteredEntries);
    res.send(filteredObj);
});

app.get('/getRelevance',async(req,res)=>{
    let existedUser = await User.find({})
    let likevalue = {"key":"value"};
    
    existedUser.map((a)=>{
        likevalue[a.relevance] = likevalue[a.relevance] ? likevalue[a.relevance]+1 : 1;
    })
    console.log(likevalue);
        const filteredEntries = Object.entries(likevalue).filter(([key]) => key !== 'key');
        const filteredObj = Object.fromEntries(filteredEntries);
    res.send(filteredObj);
});

app.get('/getCountry',async(req,res)=>{
    let existedUser = await User.find({})
    let likevalue = {"key":"value"};
    
    existedUser.map((a)=>{
        likevalue[a.country] = likevalue[a.country] ? likevalue[a.country]+1 : 1;
    })
    console.log(likevalue);
        const filteredEntries = Object.entries(likevalue).filter(([key]) => key !== 'key');
        const filteredObj = Object.fromEntries(filteredEntries);
    res.send(filteredObj);
});

app.get('/getTopic',async(req,res)=>{
    let existedUser = await User.find({})
    let likevalue = {"key":"value"};
    
    existedUser.map((a)=>{
        likevalue[a.topic] = likevalue[a.topic] ? likevalue[a.topic]+1 : 1;
    })
    console.log(likevalue);
        const filteredEntries = Object.entries(likevalue).filter(([key]) => key !== 'key');
        const filteredObj = Object.fromEntries(filteredEntries);
    res.send(filteredObj);
});

app.get('/getRegion',async(req,res)=>{
    let existedUser = await User.find({})
    let likevalue = {"key":"value"};
    
    existedUser.map((a)=>{
        likevalue[a.region] = likevalue[a.region] ? likevalue[a.region]+1 : 1;
    })
    console.log(likevalue);
        const filteredEntries = Object.entries(likevalue).filter(([key]) => key !== 'key');
        const filteredObj = Object.fromEntries(filteredEntries);
    res.send(filteredObj);
});

app.get('/getYear',async(req,res)=>{
    let existedUser = await User.find({})
    let likevalue = {"key":"value"};
    
    existedUser.map((a)=>{
        likevalue[a.end_year] = likevalue[a.end_year] ? likevalue[a.end_year]+1 : 1;
    })
    console.log(likevalue);
        const filteredEntries = Object.entries(likevalue).filter(([key]) => key !== 'key');
        const filteredObj = Object.fromEntries(filteredEntries);
    res.send(filteredObj);
});



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })

})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
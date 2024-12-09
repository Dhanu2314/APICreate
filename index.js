// const express = require('express');
// //const users= require(".\ MOCK_DATA.json");
// const mockData = require('./MOCK_DATA.json');

// const app=express();
// // const PORT = 8000;
// // //Routes 
// // app.get("/users",(req,res) => {
// //     return res.json(users);
// // });
// // 
// app.listen(8003, () => {
//   console.log('Server is running on port 8003');
// });


// //app.listen(PORT, () => console.log('server started at PORT:${PORT}') )
// app.listen(PORT, () => console.log(`server started at PORT:${PORT}`) )
const express = require('express');
const app = express();
//const users = require("./MOCK_DATA.json");
//const users = require("./data/MOCK_DATA.json");
const users = require("./MOCK_DATA.json");

const PORT = process.env.PORT || 8004;
app.get("/api/users", (req, res) => {

  return res.json(users);  // Sends the users array as JSON response
});

app.listen(PORT, () => {
    console.log(`server started at PORT:${PORT}`);
});


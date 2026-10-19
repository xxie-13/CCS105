// //SQL (query) — mySQL
// const connection=require("../config/db");

// //GET
// exports.getAllUsers=(req,res)=>{
//     //res - select
//     connection.query("SELECT * FROM userdata",(err,rows,fields)=>{
//         if(err) throw err;
//         res.json(rows);
//     });
// };
// /*exports.getHello=(req,res)=>{
//     res.send ("<h1> hello </h1>") ;
// };*/

// //GET — SEARCH
// exports.getUserById=(req,res)=>{
//     const id=req.params.id;
//     connection.query("SELECT * FROM userdata WHERE id=?", [id], (err, rows, fields)=>{
//         if(err) throw err;

//         if(rows.length>0)
//             res.json(rows);
//         else
//             res.status(404).json({message: "User not found."})
//     });
// };

// /*exports.getUserByIp=(req,res)=>{
//     const ip=req.params.ip_address;
//     connection.query("SELECT * FROM userdata WHERE ip_address=?", [ip], (err, rows, fields)=>{
//         if(err) throw err;

//         if(rows.length>0)
//             res.json(rows);
//         else
//             res.status(404).json({message: "User not found."})
//     });
// };*/

// exports.getUserByIpOrEmail=(req,res)=>{
//     const ip_email=req.params.ip_email;
//     //const email=req.params.email;
//     connection.query("SELECT * FROM userdata WHERE ip_address=? OR email=?", [ip_email,ip_email], (err, rows, fields)=>{
//         if(err) throw err;

//         if(rows.length>0)
//             res.json(rows);
//         else
//             res.status(404).json({message: "User not found."})
//     });
// };

// //POST
// exports.createUser=(req,res)=>{
//     //dom
//     const {first_name, last_name, email, gender} = req.body;
//     connection.query('INSERT INTO userdata (first_name, last_name, email, gender) VALUES (?,?,?,?)', [first_name, last_name, email, gender], (err,result)=>{
//         if(err) throw err;
//         res.json({message: 'User created successfully', id:result.insertId});
//     });
// }

//SQL
//MySQL
const connection = require('../config/db');
//GET
exports.getAllUsers = (req, res) => {
    connection.query('SELECT * FROM userdata', (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
    });
};
exports.getHelloWorld=(req,res)=>{
    res.send("HELLO WORLD!");
}
//GET (search)
exports.getUserByIpOrEmail=(req,res)=>{
    const searchValue=req.params.search;
    connection.query('SELECT * FROM userdata WHERE ip_address=? OR email=?',[searchValue, searchValue],(err, rows, fields)=>{
        if(err) {
            res.status(500).json({message:"Database query failed"});
            return;
        }
        
        if(rows.length>0)
            res.json(rows)
        else
            res.status(404).json({message:"404 User not found!"})

    })
}


//POST
exports.createUser=(req,res)=>{
    const {fname,lname,email,gender,ip_address}=req.body;  
    connection.query('INSERT INTO userdata (first_name,last_name,email,gender,ip_address) VALUES (?,?,?,?,?)',[fname,lname,email,gender,ip_address],(err,result)=>{
        if(err) throw err;
        res.json({message:'User created successfully',id:result.insertId});
    });
}


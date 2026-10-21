// //SQL (query) — mySQL
const connection = require('../config/db');

//GET
exports.getAllUsers = (req, res) => {
    connection.query('SELECT * FROM userdata', (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
    });
};

/*exports.getHello=(req,res)=>{
    res.send("<h1> hello </h1>");
}*/


//GET — SEARCH
/*exports.getUserById=(req,res)=>{
    const id=req.params.id;
    connection.query("SELECT * FROM userdata WHERE id=?", [id], (err, rows, fields)=>{
        if(err) throw err;

        if(rows.length>0)
            res.json(rows);
        else
            res.status(404).json({message: "User not found."})
    });
};*/

/*exports.getUserByIp=(req,res)=>{
    const ip=req.params.ip_address;
    connection.query("SELECT * FROM userdata WHERE ip_address=?", [ip], (err, rows, fields)=>{
        if(err) throw err;

        if(rows.length>0)
            res.json(rows);
        else
            res.status(404).json({message: "User not found."})
    });
};*/

exports.getUserByIpOrEmail=(req,res)=>{
    const ip_email=req.params.ip_email;
    //const email=req.params.email;
    connection.query("SELECT * FROM userdata WHERE ip_address=? OR email=?", [ip_email,ip_email], (err, rows, fields)=>{
        if(err) {
            res.status(500).json({message:"Database query failed"});
            return;
        }

        if(rows.length>0)
            res.json(rows);
        else
            res.status(404).json({message: "User not found."})
    });
};


//POST — Create
exports.createUser=(req,res)=>{
    const {fname,lname,email,gender,ip_address,salary}=req.body;  
    connection.query('INSERT INTO userdata (first_name,last_name,email,gender,ip_address,salary) VALUES (?,?,?,?,?,?)',[fname,lname,email,gender,ip_address,salary],(err,result)=>{
        if(err) throw err;
        res.json({message:'User created successfully',id:result.insertId});
    });
};

//PUT (update/edit)
exports.updateUser=(req,res)=>{
    const {id, fname,lname,email,gender,ip_address,salary,department}=req.body; 
    connection.query(
        "UPDATE userdata SET first_name=?, last_name=?, email=?, gender=?, ip_address=?, salary=?, department=? WHERE id=?",[fname,lname,email,gender,ip_address,salary,department,id], (err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'User updated successfully'});
        else
            res.status(404).json({message: 'User not found'});
    })
};

/*exports.updateUser=(req,res)=>{
    const {department}=req.body; 
    connection.query("UPDATE userdata SET department=?",[department], (err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'User updated successfully'});
        else
            res.status(404).json({message: 'User not found'});
    })
}*/


//DELETE
exports.deleteUser=(req,res)=>{
    const id=req.body.id;
    connection.query('DELETE FROM userdata WHERE id=?', [id], (err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'User deleted successfully'});
        else
            res.status(404).json({message: 'User not found'});
    })

}
const express=require('express');
const router=express.Router();
const mysql=require('mysql');
var bcrypt = require('bcryptjs');
const conn=require('../config/database');



router.post("/register",(req,res)=>{

var sql="insert into Admin SET ?";

   var values={username:req.body.username, name:req.body.name, email:req.body.email, password:req.body.password};

    conn.query(sql,values,function(err,result){
       
        if(err){
            res.json({state:false,msg:"data not inserted!"});
        }
        else{
            res.json({state:true,msg:"data inserted!"});
        }
       
    });

});


router.post("/addTrain",(req,res)=>{
    //console.log(req.body);
   var sql="insert into train SET ?";

   var values={TrainName:req.body.TrainName, TrainType:req.body.TrainType, Classes:req.body.Classes};

    conn.query(sql,values,function(err,result){
       
        if(err){
            res.json({state:false,msg:"data not inserted!"});
        }
        else{
            res.json({state:true,msg:"data inserted!"});
        }
       
    });

});

router.get("/train_details",(req,res)=>{
    
    var sql="select * from train";

    conn.query(sql,function(err,rows,fields){
        if(err){
           // res.json({state:false,msg:"data not Displayed!"});
           res.status(500).send({error:'Failed to display '})
           
        };
        // res.json({state:true,msg:"data Displayed!"});
           /*res.status(200).json({
            //    message:"",
              rows
           
           });*/
           res.send(rows);
        
       // console.log(result);
    });
});

router.post("/edit_train/:id",(req,res)=>{

   var sql="update train SET ? where TrainNo=?" 

   var values={TrainName:req.body.TrainName, TrainType:req.body.TrainType, Classes:req.body.Classes};

   var Id=req.params.id;
   conn.query(sql,[values,Id], function(err,result){
  
    if(err){
        if(err){
            res.json({state:false,msg:"data not Updated!"});
        }
        else{
            res.json({state:true,msg:"data Updated!"});
        }

     }
    });
});


router.get("/findTrain/:id",(req,res)=>{
    
    var sql="select *from train where TrainNo=?";

    var Id=req.params.id;
    
    conn.query(sql,[Id],function(err,rows,fields){
        if(err){
           // res.json({state:false,msg:"data not Displayed!"});
           res.status(500).send({error:'Failed to find '})
           
        };
        // res.json({state:true,msg:"data Displayed!"});
        res.send(rows);
        
       // console.log(result);
    });
});

router.get("/deleteTrain/:id",(req,res)=>{

 var sql="delete from train where TrainNo=?";

 var Id=req.params.id;

 conn.query(sql,[Id],function(err,rows,fields){
    
        if(err){
            res.json({state:false,msg:"Not deleted"});
        }
        else{
            res.json({state:true,msg:"Deleted!"});
           
        }
        
     
});

});


router.get("/train_shedule",(req,res)=>{
    
    var sql="select * from trainshedule";

    conn.query(sql,function(err,rows,fields){
        if(err){
           // res.json({state:false,msg:"data not Displayed!"});
           res.status(500).send({error:'Failed to display '})
           
        };
        // res.json({state:true,msg:"data Displayed!"});
           /*res.status(200).json({
            //    message:"",
              rows
           
           });*/
           res.send(rows);
        
       // console.log(result);
    });
});


router.post("/addTrainS",(req,res)=>{
    //console.log(req.body);
   var sql="insert into trainshedule SET ?";

   var values={TrainName:req.body.TrainName, StartStation:req.body.StartStation, EndStation:req.body.EndStation, Date:req.body.Date, StartTime:req.body.StartTime, EndTime:req.body.EndTime};

    conn.query(sql,values,function(err,result){
       
        if(err){
            res.json({state:false,msg:"data not inserted!"});
        }
        else{
            res.json({state:true,msg:"data inserted!"});
        }
       
    });

});



router.post("/edit_trainS/:id",(req,res)=>{

    var sql="update trainshedule SET ? where sheduleNo=?" 
    var values={TrainName:req.body.TrainName, StartStation:req.body.StartStation, EndStation:req.body.EndStation, Date:req.body.date, StartTime:req.body.StartTime, EndTime:req.body.EndTime};
 
    var Id=req.params.id;
    conn.query(sql,[values,Id], function(err,result){
   
     if(err){
         if(err){
             res.json({state:false,msg:"data not Updated!"});
         }
         else{
             res.json({state:true,msg:"data Updated!"});
         }
 
      }
     });
 });
 
 
 router.get("/findTrainS/:id",(req,res)=>{
     
     var sql="select *from trainshedule where SheduleNo=?";
 
     var Id=req.params.id;
     
     conn.query(sql,[Id],function(err,rows,fields){
         if(err){
            // res.json({state:false,msg:"data not Displayed!"});
            res.status(500).send({error:'Failed to find '})
            
         };
         // res.json({state:true,msg:"data Displayed!"});
         res.send(rows);
         
        // console.log(result);
     });
 });
 
 router.get("/deleteTrainS/:id",(req,res)=>{
 
  var sql="delete from trainshedule where SheduleNo=?";
 
  var Id=req.params.id;
 
  conn.query(sql,[Id],function(err,rows,fields){
     
         if(err){
             res.json({state:false,msg:"Not deleted"});
         }
         else{
             res.json({state:true,msg:"Deleted!"});
            
         }
         
      
 });
 
 });










router.get("",(req,res)=>{
    res.send("Hello  users");
});

module.exports=router;
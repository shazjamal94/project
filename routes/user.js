const express = require('express');

const router = express.Router();

const User = require('../models/db')

// This route give the  details of all the user present in the database...
  
router.get('/' , async (req,res) =>{
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        res.json({ message:err });
    }
})




// This route takes you to user with the highest score in the  First Round just go to /user/highest/score/round/1..
router.get('/highest/score/round/1', async (req,res) =>{
   try{
       const users = await User.find().sort({candidate_score_Firstround:-1}).limit(1);
       res.json(users);
   }
   catch(err){
       res.json({ message:err});
   }
});


// This route takes you to user with the highest score in the  Second Round just go to /user/highest/score/round/2..
router.get('/highest/score/round/2', async (req,res) =>{
    try{
        const users = await User.find().sort({candidate_score_Secondround:-1}).limit(1);
        res.json(users);
    }
    catch(err){
        res.json({ message:err});
    }
 });


 // This route takes you to user with the highest score in the  Third Round just go to /user/highest/score/round/3..
router.get('/highest/score/round/3', async (req,res) =>{
    try{
        const users = await User.find().sort({candidate_score_Thirdround:-1}).limit(1);
        res.json(users);
    }
    catch(err){
        res.json({ message:err});
    }
 });


 // This route gives you average score of all user first round...
 router.get('/average/round/1', async (req,res) =>{
    try{
        const users = await User.aggregate(
            [
              {
                $group:{

                    AverageFirstRound: { $avg: "$candidate_score_Firstround" 
              }
            }
            
        }
    ]
        
         );
           
        res.json(users);
    }
    catch(err){
        res.json({ message:err});
    }
 });

  // This route gives you average score of all user Second round...
 router.get('/average/round/2', async (req,res) =>{
    try{
        const users = await User.aggregate(
            [
              {
                $group:{

                    AverageSecondRound: { $avg: "$candidate_score_Secondround" 
              }
            }
            
        }
    ]
        
         );
           
        res.json(users);
    }
    catch(err){
        res.json({ message:err});
    }
 });


 // This route gives you average score of all user third round...
 router.get('/average/round/2', async (req,res) =>{
    try{
        const users = await User.aggregate(
            [
              {
                $group:{

                    AverageThirdRound: { $avg: "$candidate_score_Thirdround" 
              }
            }
            
        }
    ]
        
         );
           
        res.json(users);
    }
    catch(err){
        res.json({ message:err});
    }
 });

// ths routes 
router.post('/',(req,res) =>{
    const user = new User({
        candidate_name:req.body.candidate_name,
        candidate_email:req.body.candidate_email,
        candidate_score_Firstround:req.body.candidate_score_Firstround,
        candidate_score_Secondround:req.body.candidate_score_Secondround,
        candidate_score_Thirdround:req.body.candidate_score_Thirdround
        
        
    });
    user.save()
        .then(data =>{
            res.json(data);
        })
        .catch(err =>{
            res.json({ message:err});
        });
});


module.exports = router;

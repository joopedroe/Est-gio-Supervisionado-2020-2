const express = require('express');
const User = require('../models/Usuario');



module.exports={
    async Autenticacao(req, res){
        const {userInput, password}=req.body;
        const user = await User.findOne({ where: {username: userInput} }).catch(console.log(User));
        console.log(user)
        if (!user){
            return res.status(402).send({erro:'Usuario não existe'}); 
        }
        console.log(password)
        console.log(user.password)
        if(password != user.password){
            
            return res.status(401).send({erro:'Senha inválida'}); 
        };
        user.password=undefined;


        res.status(200).send({user}); 

    },
}
const XMLHttpRequest = require('xhr2');
require("dotenv").config()
const { sign } = require("jsonwebtoken");


const token_generation = (req,res) => {
    const jsontoken = sign({username : req.params.user_name},process.env.TOKEN_ID)
    if(jsontoken){
        res.json({
            token:jsontoken
        })
    }
}

const Logic = async (req, res) => {
    let url = process.env.URL;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Authorization", process.env.API_KEY);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let response_data = JSON.parse(xhr.responseText);
        res.status(200).send(response_data.links.gui)
    }};

    let data = `user[name]=${req.params.user_name}`;

    xhr.send(data);

}




module.exports = {Logic,token_generation}
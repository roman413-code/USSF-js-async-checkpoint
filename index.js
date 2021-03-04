#!G:\SDI\async_checkpoint\ node

const yargs = require("yargs");
const axios = require("axios");
var fetch = require("node-fetch")
var request = require('request')
var fs = require('fs')
const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;





var url = `https://pokeapi.co/api/v2/pokemon/${options.name}`;

request(url, function(error, response, body)
    {
    fs.writeFileSync('pokelist.txt', body)
    
    

   
 });
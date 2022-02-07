const { ipcMain, app, BrowserWindow } = require('electron')
const path=require("path")
const express = require('express')
const check=require("zoomip")
console.log(check)
const verif = new check
console.log(verif.requests)
const web = express()
const parkings=[]
web.use(express.json())
var bodyParser = require('body-parser')
web.use(express.urlencoded({ extended: false }))
web.post('/', (req,res) => {
    parkings.push(req.body)
    console.log(req.body["ip"])
    const data =verif.requests(req.body['ip']) 
    console.log(data)
    res.status(200).json({"data":data})
    
})
web.listen(9999, () => {
    console.log('Serveur à lécoute')
  })
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'mainPreload.js'),
      nodeIntegration: true,
      contextIsolation: false
    },
    frame: false,
    
  })
  
  win.loadFile('./index.html');
  ipcMain.on('minimize', () => {
    win.minimize()
  });
}



app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
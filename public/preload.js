const { contextBridge } = require('electron/renderer')
const fs = window.require('fs');

// contextBridge.exposeInMainWorld('versions', {
//    app: ()=> require('electron').remote.app.getAppPath(),
// })

contextBridge.exposeInMainWorld('file', {
    readdirSync: (path) => fs.readdirSync(path),
    statSync: (path) => fs.statSync(path),
    join: (x,y) => pathModule.join(x,y)
 })
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('kreativpotok', {
  platform: process.platform
});

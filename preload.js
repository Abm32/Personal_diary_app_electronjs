const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
	title: "Personal Diary App",
	createNote: (data) => ipcRenderer.invoke('create-file', data)
})
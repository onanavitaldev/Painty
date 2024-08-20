const { app, BrowserWindow, Notification } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
      width: 1300,
      height: 800,
      icon: "locales/paint_color.png",
      titleBarStyle: '',
      titleBar: "Painty",
      titleBarOverlay: {
      color: '#fff',
      symbolColor: '#201a5f',
      height: 35
    }
  })

  win.loadFile('src/index.html')
}

const NOTIFICATION_TITLE = 'Ouverture de Painty...'
const NOTIFICATION_BODY = 'Commencez à realiser des simples dessins rapidement et facilement avec Painty.'
const NOTIFICATION_ICON= 'src/pic/paint_color.png'

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY, image: NOTIFICATION_ICON }).show()
}

app.whenReady().then(createWindow).then(showNotification)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
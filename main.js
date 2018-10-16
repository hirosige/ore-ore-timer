const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  // 新規ウインドウ生成
  win = new BrowserWindow({
    width: 800,
    height: 700
  })


  win.loadURL(`file://${__dirname}/dist/angular-with-electron/index.html`)

  //// 起動時に開発者ツールを開く　（コメントアウトしてます）
  // win.webContents.openDevTools()

  // ウインドウが閉じたときのイベント
  win.on('closed', function () {
    win = null
  })
}

// Electron初期化時にウィンドウ生成
app.on('ready', createWindow)

// すべてのウインドウが閉じたときにElectronを終了する。
app.on('window-all-closed', function () {

  // macOSの場合
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOSの場合
  if (win === null) {
    createWindow()
  }
})

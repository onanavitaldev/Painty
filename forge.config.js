// forge.config.js
module.exports = {
  // ...
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        iconUrl: 'https://url/to/icon.ico',
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: 'src/pic/paint_color.png'
      }
    },
    {
      // Path to a single image that will act as icon for the application
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: 'src/pic/paint_color.png'
        }
      }
    },
    {
      // Path to the icon to use for the app in the DMG window
      name: '@electron-forge/maker-dmg',
      config: {
        icon: 'src/pic/paint_color.png'
      }
    },
    {
      name: '@electron-forge/maker-wix',
      config: {
        icon: 'src/pic/paint_color.png'
      }
    }
  ]
  // ...
};
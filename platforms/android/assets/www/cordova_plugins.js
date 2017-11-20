cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-email-composer.EmailComposer",
        "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
        "pluginId": "cordova-plugin-email-composer",
        "clobbers": [
            "cordova.plugins.email",
            "plugin.email"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-sms-plugin.Sms",
        "file": "plugins/cordova-sms-plugin/www/sms.js",
        "pluginId": "cordova-sms-plugin",
        "clobbers": [
            "window.sms"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-crop.CropPlugin",
        "file": "plugins/cordova-plugin-crop/www/crop.js",
        "pluginId": "cordova-plugin-crop",
        "clobbers": [
            "plugins.crop"
        ]
    },
    {
        "id": "cordova-plugin-buildinfo.BuildInfo",
        "file": "plugins/cordova-plugin-buildinfo/www/buildinfo.js",
        "pluginId": "cordova-plugin-buildinfo",
        "clobbers": [
            "BuildInfo"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-email-composer": "0.8.10",
    "cordova-plugin-ionic-webview": "1.1.11",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.2.4-dev",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-sms-plugin": "0.1.11",
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-crop": "0.3.1",
    "cordova-plugin-buildinfo": "2.0.1"
};
// BOTTOM OF METADATA
});
# Template MBLabs

## Autor: Lucas Araujo e Silva

## Guide line

## AppCenter Setup
- Sign Up on [App Center](https://appcenter.ms/) and create a new App for your project (one for Android and one for IOS).

### Android
Modify the `android/app/src/main/assets/appcenter-config.json` with the key created on AppCenter
```json
{
  "app_secret": "{APP_SECRET_VALUE}"
}
```
Modify the app's `res/values/strings.xml` with the project name and the AppCenter DeploymentKey:

```xml
<resources>
  <string name="app_name">{app_name}</string>
  <string moduleConfig="true" name="CodePushDeploymentKey">{DeploymentKey}</string>
  <string
    moduleConfig="true"
    translatable="false"
    name="appCenterCrashes_whenToSendCrashes"
  >
    DO_NOT_ASK_JAVASCRIPT
  </string>
  <string
    moduleConfig="true"
    translatable="false"
    name="appCenterAnalytics_whenToEnableAnalytics"
  >
    ALWAYS_SEND
  </string>
</resources>
```

### IOS
Modify the app secret value on `ios/<app_name>/AppCenter-Config.plist` 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
  <key>AppSecret</key>
  <string>{APP_SECRET_VALUE}</string>
  </dict>
</plist>
```
Open `Info.plist` file, add change the {DeploymentKey} value.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
...
<key>CodePushDeploymentKey</key>
<string>{DeploymentKey}</string>
</dict>
```

Open `package.json` file, add change the ios codepush script with the name of the project and the AppCenter Account.
```json
{
  "codepush-ios": "appcenter codepush release-react -a {APP_CENTER_ACCOUNT}/{APP_CENTER_PROJECT_NAME} -m -d Production --plist-file ./ios/{NAME_OF_PROJECT}/Info.plist",
}
```

More details: 
- [Visual Studio App Center](https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/react-native)
- [mb-talk-app-center](https://github.dev/andrefangeloni/mb-talk-app-center#readme)

# Template MBLabs

## Autor: Lucas Araujo e Silva

## Guide line

### Comandos

Adicione esses comandos ao seu package.json

```sh
 "scripts": {
    "android": "yarn run android:clean && react-native run-android",
    "android:clean": "cd android && gradlew clean && cd ..",
    "android:mac": "yarn run android:clean:mac && react-native run-android",
    "android:clean:mac": "cd android && ./gradlew clean && cd ..",
    "pod-ios": "cd ios && pod install && cd .. && yarn ios",
    "pods:m1": "cd ios && arch -x86_64 pod install && cd ..",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  },
```

## iOS

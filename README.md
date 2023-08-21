To run

fill the .env file with your credentials

```
EXPO_PUBLIC_INSTABUG_TOKEN=[your token here]
EXPO_PUBLIC_LOGROCKET_APP_ID=[your id here]
```

you need eas-cli

```
npm install -g eas-cli
```

dependencies

```sh
yarn install
```

Then run the app

```sh
yarn ios

# or

yarn android
```

To reproduce the bug spam the button "Press me" until it stops incrementing the counter and then requests no longer work

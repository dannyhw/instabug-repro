import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import LogRocket from "@logrocket/react-native";
import Instabug, { InvocationEvent } from "instabug-reactnative";
import { useEffect, useState } from "react";

Instabug.init({
  token: process.env.EXPO_PUBLIC_INSTABUG_TOKEN ?? "",
  invocationEvents: [
    InvocationEvent.shake,
    InvocationEvent.screenshot,
    InvocationEvent.floatingButton,
  ],
});

export default function App() {
  useEffect(() => {
    LogRocket.init(process.env.EXPO_PUBLIC_LOGROCKET_APP_ID ?? "");
  }, []);

  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="press me"
        // Spam press the button to see the requests stop working
        onPress={async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          );
          const response1 = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          );
          const response2 = await fetch(
            "https://jsonplaceholder.typicode.com/todos/2"
          );
          const response3 = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          );

          console.log(
            "fetch done",
            response.status,
            response1.status,
            response2.status,
            response3.status
          );

          if (response.status === 200) {
            setCounter(counter + 1);
          }
        }}
      />
      <Text>Counter: {counter}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

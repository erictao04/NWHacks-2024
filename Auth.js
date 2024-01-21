import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "./config";

export default function Auth() {
  const [page, setPage] = useState("login");

  return (
    <View>
      <Text>Auth Page</Text>
      {page == "login" ? (
        <LogIn setPage={setPage} />
      ) : (
        <SignUp setPage={setPage} />
      )}
    </View>
  );
}

function LogIn({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Successfully logged in");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <View>
      <Text>Log in</Text>
      <Button title="Sign Up" onPress={() => setPage("signup")} />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Log In" onPress={loginUser} />
    </View>
  );
}

function SignUp({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Sucessfully created user");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <Button title="Log In" onPress={() => setPage("login")} />

      <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Sign Up" onPress={createUser} />
    </View>
  );
}

export function SignOut() {
  const signout = () => {
    signOut(auth)
      .then(() => {
        console.log("Successfully logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <Button title="Sign out" onPress={signout} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

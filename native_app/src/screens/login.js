import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View, Text, Image, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import axios from "axios";

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [status, setStatus] = useState("");

  const skip = () => {
    navigation.navigate("Home");
  };

  const login = async () => {
    console.log(user);
    console.log(pass);
    if (user == "" || pass == "") {
      return console.log("No data");
    }
    axios
      .post("https://ashtomatosauce-api.herokuapp.com/auth/login", {
        username: user,
        password: pass,
      })
      .then(async (response) => {
        console.log(response.data);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });
    /*
      if (res) {
        console.log("user logged");
        return navigation.navigate("Home");
      } else {
        console.log("User not found");
      }*/
  };

  const register = () => {
    navigation.navigate("Register");
  };

  return (
    <View
      style={
        (style = {
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        })
      }
    >
      <Image
        source={require("../../assets/mangaLogo.png")}
        style={(style = { width: 200, height: 200, marginTop: 70 })}
      ></Image>
      <View
        style={(style = { alignItems: "center", width: "100%", marginTop: 30 })}
      >
        <TextInput
          style={globalStyles.input}
          onChangeText={(newText) => setUser(newText)}
          placeholder={"Username"}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={globalStyles.input}
          onChangeText={(newText) => setPass(newText)}
          placeholder={"Password"}
        ></TextInput>
        <View
          style={
            (style = {
              flexDirection: "row",
              justifyContent: "flex-start",
              width: "100%",
              width: "70%",
            })
          }
        >
          <View style={globalStyles.btnView}>
            <Button color="crimson" title="Login" onPress={login} />
          </View>
          <View style={globalStyles.btnView}>
            <Button color="crimson" title="Skip" onPress={skip} />
          </View>
        </View>
      </View>
      <Text
        style={(style = { color: "blue", marginTop: 15 })}
        onPress={register}
      >
        {" "}
        Don't have an account?
      </Text>
      <Image
        source={require("../../assets/pagoda.png")}
        style={
          (style = {
            width: "100%",
            height: 300,
          })
        }
      ></Image>
    </View>
  );
}

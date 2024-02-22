import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = () => {
    if (username.length == 0) {
      console.error("Please enter email address");
    }
    console.log("Username:", username);
    console.log("Password:", password);
  };
  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={styles.container}>
      <Svg
        width={22}
        height={12}
        viewBox="0 0 22 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M2 10H20C20.55 10 21 10.45 21 11C21 11.55 20.55 12 20 12H2C1.45 12 1 11.55 1 11C1 10.45 1.45 10 2 10ZM1.5 5.57004C1.86 5.78004 2.32 5.65004 2.53 5.29004L3 4.47004L3.48 5.30004C3.69 5.66004 4.15 5.78004 4.51 5.58004C4.87 5.37004 4.99 4.92004 4.79 4.56004L4.3 3.72004H5.25C5.66 3.72004 6 3.38004 6 2.97004C6 2.56004 5.66 2.22004 5.25 2.22004H4.3L4.77 1.40004C4.98 1.04004 4.86 0.580044 4.5 0.370044C4.32574 0.27304 4.12045 0.248026 3.92799 0.300345C3.73554 0.352663 3.57117 0.478166 3.47 0.650044L3 1.47004L2.53 0.650044C2.42883 0.478166 2.26446 0.352663 2.07201 0.300345C1.87955 0.248026 1.67426 0.27304 1.5 0.370044C1.14 0.580044 1.02 1.04004 1.23 1.40004L1.7 2.22004H0.75C0.34 2.22004 0 2.56004 0 2.97004C0 3.38004 0.34 3.72004 0.75 3.72004H1.7L1.22 4.55004C1.02 4.91004 1.14 5.37004 1.5 5.57004ZM9.5 5.57004C9.86 5.78004 10.32 5.65004 10.53 5.29004L11 4.47004L11.48 5.30004C11.69 5.66004 12.15 5.78004 12.51 5.58004C12.87 5.37004 12.99 4.92004 12.79 4.56004L12.31 3.73004H13.26C13.67 3.73004 14.01 3.39004 14.01 2.98004C14.01 2.57004 13.67 2.23004 13.26 2.23004H12.3L12.77 1.41004C12.8689 1.23721 12.896 1.03247 12.8455 0.839856C12.795 0.647238 12.671 0.48213 12.5 0.380044C12.4153 0.330786 12.3217 0.298696 12.2246 0.285607C12.1275 0.272518 12.0288 0.278686 11.9341 0.303759C11.8394 0.328832 11.7505 0.372318 11.6726 0.431734C11.5947 0.49115 11.5292 0.565332 11.48 0.650044L11 1.47004L10.53 0.650044C10.4811 0.564937 10.4159 0.490367 10.338 0.430649C10.2602 0.370931 10.1712 0.327252 10.0764 0.302141C9.98149 0.27703 9.88259 0.270986 9.78537 0.284358C9.68816 0.29773 9.59456 0.330253 9.51 0.380044C9.15 0.590044 9.03 1.05004 9.24 1.41004L9.71 2.23004H8.75C8.65198 2.22872 8.55468 2.24688 8.46374 2.28348C8.3728 2.32007 8.29004 2.37437 8.22026 2.44322C8.15049 2.51206 8.09508 2.59409 8.05727 2.68453C8.01946 2.77497 7.99999 2.87202 8 2.97004C8 3.38004 8.34 3.72004 8.75 3.72004H9.7L9.22 4.55004C9.02 4.91004 9.14 5.37004 9.5 5.57004ZM22 2.97004C22 2.56004 21.66 2.22004 21.25 2.22004H20.3L20.77 1.40004C20.8689 1.22721 20.896 1.02247 20.8455 0.829856C20.795 0.637238 20.671 0.47213 20.5 0.370044C20.4153 0.320786 20.3217 0.288696 20.2246 0.275607C20.1275 0.262518 20.0288 0.268686 19.9341 0.293759C19.8394 0.318831 19.7505 0.362317 19.6726 0.421734C19.5947 0.48115 19.5292 0.555332 19.48 0.640044L19 1.47004L18.53 0.650044C18.4811 0.564937 18.4159 0.490367 18.338 0.430649C18.2602 0.370931 18.1712 0.327252 18.0764 0.302141C17.9815 0.27703 17.8826 0.270986 17.7854 0.284358C17.6882 0.29773 17.5946 0.330253 17.51 0.380044C17.15 0.590044 17.03 1.05004 17.24 1.41004L17.71 2.23004H16.76C16.6613 2.22778 16.5631 2.24523 16.4711 2.28137C16.3792 2.31751 16.2954 2.37161 16.2247 2.44051C16.1539 2.50941 16.0976 2.59173 16.059 2.68265C16.0204 2.77358 16.0004 2.87128 16 2.97004C16 3.38004 16.34 3.72004 16.75 3.72004H17.7L17.22 4.55004C17.1703 4.63513 17.1382 4.72928 17.1254 4.82697C17.1126 4.92466 17.1194 5.02391 17.1455 5.11892C17.1716 5.21392 17.2164 5.30277 17.2773 5.38023C17.3381 5.4577 17.4139 5.52223 17.5 5.57004C17.86 5.78004 18.32 5.65004 18.53 5.29004L19 4.47004L19.48 5.30004C19.69 5.66004 20.15 5.78004 20.51 5.58004C20.87 5.37004 20.99 4.92004 20.79 4.56004L20.31 3.73004H21.26C21.66 3.72004 22 3.38004 22 2.97004Z"
          fill="#FF6464"
        />
      </Svg>

      <Text style={styles.title}>LOGIN</Text>
      <Text style={styles.description}>
        Let’s get you setup with a new account!{" "}
      </Text>
      <Text style={styles.emailTxt}>EMAIL</Text>
      <TextInput
        style={styles.input}
        placeholder="john@example.com"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.emailTxt}>PASSWORD</Text>
      <View
        style={[styles.input,{flexDirection: "row",}]}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={hidePassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.visibilityIcon}
        >
          <Ionicons
            name={hidePassword ? "eye-off" : "eye"}
            size={24}
            color="#FF6464"
          />
        </TouchableOpacity>
      </View>
      <Text style={[{ color: "#FF6464", alignSelf: "center", marginTop: 10 }]}>
        Forgot Password
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#FFF",
    paddingTop: 50,
    paddingHorizontal: 20,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#545974",
  },
  description: {
    color: "#BABABA",
    fontSize: 12,
    fontWeight: "400",
  },
  emailTxt: {
    marginTop: 20,
    marginStart: 10,
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#FF6464",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  passwordInput: {
    flex: 1,
    width: "100%",
    height: 50,
    borderRadius: 15,
  },
  visibilityIcon: {
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#ffffff",
  },
});

export default LoginScreen;

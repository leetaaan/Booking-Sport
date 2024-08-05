import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";
import {
  errCode,
  placeHolder,
  routerLink,
  text,
  toastAler,
} from "../../../enum/Enum";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = () => {
    if (!email && !password) {
      ToastAndroid.show(toastAler.toastInfor, ToastAndroid.LONG);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.replace(routerLink.routerHome);
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errCode);
        if (errorCode == errCode.auth) {
          ToastAndroid.show(toastAler.toastInforErr, ToastAndroid.LONG);
        }
      });
  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "lora-bold",
          fontSize: 30,
          marginTop: 30,
        }}
      >
        Đăng nhập
      </Text>

      {/* Email */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "lora" }}>Email</Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
          placeholder={placeHolder.email}
        />
      </View>

      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "lora" }}>Mật khẩu</Text>
        <TextInput
          onChangeText={(value) => setPassword(value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder={placeHolder.password}
        />
      </View>

      {/* SignIn button */}
      <TouchableOpacity
        onPress={onSignIn}
        style={{
          padding: 15,
          backgroundColor: Colors.primary,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text style={{ color: Colors.white, textAlign: "center" }}>
          {text.signIn}
        </Text>
      </TouchableOpacity>

      {/* SignUp button */}
      <TouchableOpacity
        onPress={() => router.replace(routerLink.routerSignUp)}
        style={{
          padding: 15,
          backgroundColor: Colors.white,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text style={{ color: Colors.primary, textAlign: "center" }}>
          {text.signUp}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.gray,
    fontFamily: "lora",
  },
});

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FirebaseAuth } from "../FireBaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";

const ResgisterScreen = () => {
  const navigation = useNavigation();

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const authen = FirebaseAuth;

  const signUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(
        authen,
        auth.email,
        auth.password
      );
      alert('Đăng ký thành công')
      navigation.navigate("Login");
    } catch (error) {
      alert('Tên tài khoản đã tồn tại')
    }
  };
  return (
    <View className="flex-1 bg-neutral-800">
      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            marginTop: 30,
            marginLeft: 20,
          }}
        >
          Đăng ký tài khoản
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          Tài khoản
        </Text>
      </View>
      <View style={[style.SectionStyle]}>
        <TextInput
          value={auth.email}
          onChangeText={(e) =>
            setAuth((prev) => {
              return {
                ...prev,
                email: e,
              };
            })
          }
          style={{
            ...style.inputStyle,
          }}
          placeholder="Nhập tài khoản" //dummy@abc.com
          placeholderTextColor="#8b9cb5"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          underlineColorAndroid="#f000"
        ></TextInput>
      </View>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          Mật khẩu
        </Text>
      </View>
      <View style={[style.SectionStyle]}>
        <TextInput
          value={auth.password}
          onChangeText={(e) =>
            setAuth((prev) => {
              return {
                ...prev,
                password: e,
              };
            })
          }
          style={style.inputStyle}
          placeholder="Nhập mật khẩu" //dummy@abc.com
          placeholderTextColor="#8b9cb5"
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          keyboardType="default"
          secureTextEntry={true}
        />
      </View>
      {/* <View
        style={{
          marginTop: 10,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          Nhập lại mật khẩu
        </Text>
      </View>
      <View style={[style.SectionStyle]}>
        <TextInput
          style={style.inputStyle}
          placeholder="Nhập lại mật khẩu" //dummy@abc.com
          placeholderTextColor="#8b9cb5"
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          keyboardType="default"
          secureTextEntry={true}
        />
      </View> */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: 25,
        }}
      >
        <Text style={{ color: "#fff", marginRight: 8 }}>
          Bạn đã có tài khoản?
        </Text>
        <Text
          onPress={() => navigation.navigate("Login")}
          style={{ color: "blue", fontWeight: 800 }}
        >
          Đăng nhập
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={signUp}
      >
        <Text style={style.buttonStyle}>ĐĂNG KÝ</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: "#555",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#dadae8",
    backgroundColor: "#fff",
  },
  buttonStyle: {
    backgroundColor: "#fff",
    borderWidth: 0,
    color: "#000",
    borderColor: "#31a74a",
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    lineHeight: 40,
    textAlign: "center",
  },
});

export default ResgisterScreen;

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require("../assets/images/landing.png")}
        style={{ width: "100%", height: 450 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "lora-bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Sân Chất - Chất lượng sân, chất lượng dịch vụ!
        </Text>

        <Text
          style={{
            fontFamily: "lora",
            fontSize: 17,
            textAlig: "center",
            color: Colors.gray,
            marginTop: 20,
          }}
        >
          Sân Chất là ứng dụng đặt sân thể thao hàng đầu, kết nối bạn với những sân chơi chất lượng cao, đáp ứng mọi nhu cầu luyện tập và thi đấu. Với Sân Chất, bạn sẽ dễ dàng tìm kiếm và đặt sân bóng đá, cầu lông, tennis,... Một cách nhanh chóng và thuận tiện.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text
            style={{
              color: Colors.white,
              textAlign: "center",
              fontFamily: "lora",
              fontSize: 17,
            }}
          >
            Bắt đầu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 99,
    marginTop: "20%",
  },
});

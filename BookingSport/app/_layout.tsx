import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "lora": require("./../assets/fonts/Lora-Regular.ttf"),
    "lora-medium": require("./../assets/fonts/Lora-Medium.ttf"),
    "lora-bold": require("./../assets/fonts/Lora-Bold.ttf"),
  });
  return (
    <Stack screenOptions={{ headerShown: false }}>
      
    </Stack>
  );
}

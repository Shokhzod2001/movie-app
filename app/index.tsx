import { Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-600">
      <Text className="text-white text-3xl font-bold">
        Tailwind is Working!
      </Text>
    </View>
  );
}

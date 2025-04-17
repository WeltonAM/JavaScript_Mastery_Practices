import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Link href="/(auth)/signup">Signup</Link>
      <Link href="/(auth)">Login</Link>
    </View>
  );
}

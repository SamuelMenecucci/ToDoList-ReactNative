import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: colors["gray-300"],
  },
  content: {
    alignItems: "center",
    marginTop: 48,
  },
  header: {
    marginTop: 16,
    color: colors["gray-300"],
    fontFamily: "Inter_700Bold",
  },
  text: {
    color: colors["gray-300"],
    fontFamily: "Inter_400Regular",
  },
});

import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["gray-400"],
    borderRadius: 8,
    width: "100%",
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  taskText: {
    color: colors["gray-100"],
    flex: 1,
    textAlign: "center",
  },
  taskTextChecked: {
    color: colors["gray-300"],
    flex: 1,
    textAlign: "center",
    textDecorationLine: "line-through",
  },
});

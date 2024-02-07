import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    height: "100%",
  },

  form: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
  },
  input: {
    height: 52,
    backgroundColor: colors["gray-500"],
    flex: 1,
    padding: 12,
    borderRadius: 6,
    color: colors["gray-100"],
  },
  button: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors["blue-dark"],
    borderRadius: 6,
  },

  listInfosContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 36,
    marginBottom: 20,
  },
  info: {
    flexDirection: "row",
    gap: 8,
  },
  created: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "bold",
  },
  finished: {
    color: colors.purple,
    fontSize: 14,
    fontWeight: "bold",
  },
  quantity: {
    fontWeight: "bold",
    color: colors["gray-100"],
    backgroundColor: colors["gray-400"],
    width: 25,
    borderRadius: 8,
    textAlign: "center",
  },
});

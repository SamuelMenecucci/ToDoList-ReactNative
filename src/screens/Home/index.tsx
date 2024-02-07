import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Header } from "./components/Header";
import { colors } from "@/styles/global";
import { Task } from "./components/Task";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors["gray-300"]}
        />
        <TouchableOpacity style={styles.button}>
          <Image source={require("assets/plus.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.listInfosContainer}>
        <View style={styles.info}>
          <Text style={styles.created}>Criadas</Text>
          <Text style={styles.quantity}>0</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.finished}>Concluídas</Text>
          <Text style={styles.quantity}>0</Text>
        </View>
      </View>

      <Task />
    </View>
  );
}

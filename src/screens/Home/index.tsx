import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Header } from "./components/Header";
import { colors } from "@/styles/global";
import { Task } from "./components/Task";
import { useState } from "react";
import { EmptyList } from "./components/EmptyList";

type TaskListType = {
  text: string;
  checked: boolean;
};

export function Home() {
  const [taskList, setTaskList] = useState<TaskListType[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [finishedTasks, setFinishedTasks] = useState(0);

  const handleAddNewTask = () => {
    setTaskList((prevState) => [
      ...prevState,
      { text: newTask, checked: false },
    ]);
  };

  const handleCheckTask = (index: number) => {
    setTaskList((prevState) => {
      const oldValues = [...prevState];
      const checkValueItem = oldValues[index].checked;

      oldValues[index].checked = !checkValueItem;

      return [...oldValues];
    });

    const finishedTaskCounter = taskList.reduce((acc, currentValue) => {
      currentValue.checked && acc++;

      return acc;
    }, 0);

    setFinishedTasks(finishedTaskCounter);
  };

  const handleRemoveTask = (index: number) => {
    setTaskList((prevState) =>
      prevState.filter((element, elementIndex) => elementIndex !== index)
    );

    const finishedTaskCounter = taskList.reduce(
      (acc, currentValue, indexElement) => {
        currentValue.checked && index === indexElement && acc--;

        return acc;
      },
      finishedTasks
    );

    setFinishedTasks(finishedTaskCounter);
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors["gray-300"]}
            onChangeText={setNewTask}
            value={newTask}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
            <Image source={require("assets/plus.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.listInfosContainer}>
          <View style={styles.info}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.quantity}>{taskList.length}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.finished}>Concluídas</Text>
            <Text style={styles.quantity}>{finishedTasks}</Text>
          </View>
        </View>

        <View style={styles.listContent}>
          <FlatList
            keyExtractor={(task) => task.text}
            data={taskList}
            renderItem={({ item, index }) => (
              <Task
                task={item}
                onCheck={() => handleCheckTask(index)}
                onRemove={() => handleRemoveTask(index)}
              />
            )}
            ListEmptyComponent={() => <EmptyList />}
          />
        </View>
      </View>
    </View>
  );
}

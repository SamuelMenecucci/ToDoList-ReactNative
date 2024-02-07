import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type Props = {
  task: {
    checked: boolean;
    text: string;
  };
  onRemove: () => void;
  onCheck: () => void;
};

export function Task({ task, onRemove, onCheck }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCheck}>
        <Image
          source={
            task?.checked
              ? require("assets/checked.png")
              : require("assets/check.png")
          }
        />
      </TouchableOpacity>

      <Text style={task?.checked ? styles.taskTextChecked : styles.taskText}>
        {task.text}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Image source={require("assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}

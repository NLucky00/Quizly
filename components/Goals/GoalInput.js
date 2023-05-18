import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Modal } from "react-native";
import { Colors } from "../../constants/styles";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    setErrorMessage("");
  }

  function addGoalHandler() {
    if (enteredGoalText.trim() === "") {
      setErrorMessage("Please enter a goal!");
    } else {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
      setErrorMessage("");
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add your goals HERE!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        {errorMessage !== "" && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.primary100,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    padding: 16,
    backgroundColor: "#b180f0",
  },
  buttonContainer: {
    marginTop: 12,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    borderRadius: 20,
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
  },
});

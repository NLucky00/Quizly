import { View, Text, FlatList, StyleSheet } from "react-native";
import questions from "../../data/questions";

function SleepQuizScreen() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Text>SleepQuizScreen</Text>
    </View>
  );
}

export default SleepQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

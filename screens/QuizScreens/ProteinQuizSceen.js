import { View, Text, FlatList, StyleSheet } from "react-native";
import questions from "../../data/questions";

function ProteinQuizScreen() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Text>ProteinQuizScreen</Text>
    </View>
  );
}

export default ProteinQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

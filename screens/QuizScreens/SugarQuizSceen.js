import { View, Text, FlatList, StyleSheet } from "react-native";
import questions from "../../data/questions";

function SugarQuizScreen() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Text>SugarQuizScreen</Text>
    </View>
  );
}

export default SugarQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

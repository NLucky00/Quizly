import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import questions from "../../data/questions";

function VitaminsQuizScreen() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Text>VitaminsQuizScreen</Text>
    </View>
  );
}

export default VitaminsQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

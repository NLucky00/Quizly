import { View, Text, FlatList, StyleSheet } from "react-native";
import questions from "../../data/questions";

function FatQuizScreen() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Text>fat</Text>
    </View>
  );
}

export default FatQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

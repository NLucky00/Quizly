import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";

function Categories() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: Colors.primary100 }}>
      <View style={styles.innerContainer}>
        <Pressable
          onPress={() => navigation.navigate("QuizOverview")}
          style={styles.buttonCal}
        >
          <Text style={styles.text}>Calories</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("FatQuiz")}
          style={styles.buttonFat}
        >
          <Text style={styles.text}>Fat</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("SugarQuiz")}
          style={styles.buttonSugar}
        >
          <Text style={styles.text}>Sugar</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("ProteinQuiz")}
          style={styles.buttonProtein}
        >
          <Text style={styles.text}>Protein</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("VitaminsQuiz")}
          style={styles.buttonVit}
        >
          <Text style={styles.text}>Vitamins</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("CarbsQuiz")}
          style={styles.buttonCarbs}
        >
          <Text style={styles.text}>Carbs</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("SleepQuiz")}
          style={styles.buttonSleep}
        >
          <Text style={styles.text}>Sleep</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Categories;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    marginBottom: 95,
    backgroundColor: Colors.primary100,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonCal: {
    backgroundColor: "#f5428d",
    padding: 20,
    width: "90%",
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  buttonFat: {
    backgroundColor: "#f54242",
    padding: 20,
    width: "90%",
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  buttonSugar: {
    backgroundColor: "#f5a442",
    padding: 20,
    width: "90%",
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  buttonProtein: {
    backgroundColor: "#f5d142",
    padding: 20,
    width: "90%",
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  buttonVit: {
    backgroundColor: "#368dff",
    padding: 20,
    width: "90%",
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  buttonCarbs: {
    backgroundColor: "#41d95d",
    padding: 20,
    width: "90%",
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  buttonSleep: {
    backgroundColor: "#9eecff",
    padding: 20,
    width: "90%",
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
});

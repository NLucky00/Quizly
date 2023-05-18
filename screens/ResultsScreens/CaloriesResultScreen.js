import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Share,
  Modal,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";

function ResultsScreen({ route }) {
  const navigation = useNavigation();
  const { answers, points } = route.params;
  const percentage = (points / 5) * 100; // Assuming a maximum of 5 points

  const handleShare = () => {
    const message = `I scored ${points} points in the quiz!`;
    Share.share({
      message,
    });
  };

  const [showAnswers, setShowAnswers] = useState(false);

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const answersData = [
    {
      question: "How many calories are in a gram of carbohydrates?",
      answer:
        "The correct answer is 4 calories. Carbohydrates are one of the macronutrients that provide energy to the body. Each gram of carbohydrates contains approximately 4 calories.",
    },
    {
      question:
        "What is the recommended daily calorie intake for an average adult?",
      answer:
        "The correct answer is 2000-2500 calories. The recommended daily calorie intake for an average adult depends on various factors such as age, gender, weight, and activity level. However, a general guideline is to consume around 2000-2500 calories per day to maintain weight and support overall health.",
    },
    {
      question: "How many calories are in a gram of fat?",
      answer:
        "The correct answer is 9 calories. Fat is another macronutrient that is a concentrated source of energy. It contains more than twice the calories per gram compared to carbohydrates and protein. Each gram of fat provides approximately 9 calories.",
    },
    {
      question:
        "What is the term used to describe the number of calories burned during physical activity?",
      answer:
        "The correct answer is Caloric expenditure. Caloric expenditure refers to the number of calories the body burns during physical activity. It includes activities such as exercise, sports, and any other movement that requires energy expenditure.",
    },
    {
      question:
        "What is the term used to describe the amount of energy required to raise the temperature of 1 kilogram of water by 1 degree Celsius?",
      answer:
        "The correct answer is Kilocalorie. A kilocalorie, commonly referred to as a calorie, is the amount of energy required to raise the temperature of 1 kilogram of water by 1 degree Celsius. It is often used as a unit of measurement for the energy content of food.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subtitleContainer}>
        <Text style={styles.questionsText}>Questions Answered (5/5)</Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.pointsText}>
          You scored <Text style={styles.pointsContainer}>{points}</Text>{" "}
          points!
        </Text>
        <View style={styles.innerContainer}>
          <Pressable onPress={handleShare} style={styles.button}>
            <Ionicons
              name="share-social-outline"
              size={24}
              color="black"
              style={styles.shareIcon}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreTitle}>Score</Text>
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item }) => (
            <View style={styles.flatlistContainer}>
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign
                  name="checkcircle"
                  size={20}
                  color="green"
                  style={styles.answerIcon}
                />
              ) : (
                <AntDesign
                  name="closecircle"
                  size={20}
                  color="red"
                  style={styles.answerIcon}
                />
              )}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Pressable onPress={toggleAnswers} style={styles.answerButton}>
          <Text style={styles.answerButtonText}>Answers</Text>
        </Pressable>

        <Modal visible={showAnswers} animationType="slide">
          <View style={styles.answerContainer}>
            <FlatList
              data={answersData}
              renderItem={({ item }) => (
                <View style={styles.answerItem}>
                  <Text style={styles.questionText}>{item.question}</Text>
                  <Text style={styles.answerText}>{item.answer}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <Pressable onPress={toggleAnswers} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </Modal>
      </View>

      <Pressable
        onPress={() => navigation.navigate("Categories")}
        style={styles.retryButton}
      >
        <Text style={styles.retryButtonText}>Try another Quiz</Text>
      </Pressable>
    </View>
  );
}

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  questionsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pointsText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  pointsContainer: {
    fontSize: 28,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 5,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },
  shareIcon: {
    fontSize: 24,
  },
  scoreContainer: {
    backgroundColor: "white",
    borderRadius: 7,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scoreTitle: {
    color: "blue",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  flatlistContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  answerIcon: {
    marginLeft: 5,
  },
  answerButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  answerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  answerContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  answerItem: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  answerText: {
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#FF0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "green",
    padding: 16,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 5,
    marginTop: 20,
  },
  retryButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

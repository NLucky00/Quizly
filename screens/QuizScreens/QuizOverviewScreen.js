import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import questions from "../../data/questions";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

function QuizOverviewScreen() {
  const navigation = useNavigation();
  const data = questions;
  const totalQuestions = data.length;
  // points
  const [points, setPoints] = useState(0);

  // index of the question
  const [index, setIndex] = useState(0);

  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Counter
  const [counter, setCounter] = useState(15);

  // interval
  let interval = null;

  // progress bar
  const progressPercentage = Math.floor((index / totalQuestions) * 100);

  const currentQuestion = data[index];

  //ka8e fora poy to selectedAnswerIndex allaksei, tote trexei olo to useEffect
  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  // ------currentQuestion anti gia index
  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  //gia to timer
  useEffect(() => {
    const myInterval = () => {
      if (counter > 0) {
        setCounter((state) => state - 1);
      } else {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    // Clean up
    return () => {
      clearTimeout(interval);
    };
  }, [counter, index]);

  ///////////εδωωωωωωω
  useEffect(() => {
    if (index === data.length) {
      console.log(data.length);
      clearTimeout(interval);

      setCounter(0);
      navigation.navigate("CaloriesResult", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  //an epileksei apanthsh entws toy xronoy
  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  return (
    <ScrollView>
      <View style={styles.title}>
        <Text>Quiz Challenge</Text>
        <Pressable
          style={{ padding: 10, backgroundColor: "magenta", borderRadius: 20 }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            {counter}
          </Text>
        </Pressable>
      </View>

      <View style={styles.progress}>
        <Text>Your Progress</Text>
        <Text>
          ({index}/{totalQuestions}) questions answered
        </Text>
      </View>

      {/* Progress Bar
       */}
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          height: 10,
          borderRadius: 20,
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: "#FFC0CB",
            borderRadius: 12,
            position: "absolute",
            left: 0,
            height: 10,
            right: 0,
            width: `${progressPercentage}%`,
            marginTop: 20,
          }}
        />
      </View>

      <View style={styles.questionsContainer}>
        <Text style={styles.questionFont}>{currentQuestion?.question}</Text>
        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              style={
                selectedAnswerIndex === index &&
                index === currentQuestion.correctAnswerIndex
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "green",
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "red",
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
              key={item.options}
            >
              {selectedAnswerIndex === index &&
              index === currentQuestion.correctAnswerIndex ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  name="checkcircle"
                  size={20}
                  color="white"
                />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    padding: 10,
                    borderRadius: 20,
                  }}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text style={styles.optionsText}>{item.options}</Text>
              )}

              <Text style={{ marginLeft: 10 }}>{item.answer}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: "#F0F8FF",
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 17, textAlign: "center", fontWeight: "bold" }
            }
          >
            {!!answerStatus ? "Correct Answer" : "Wrong Answer"}
          </Text>
          //!! shmainei oti epistrefei  boolean apo to anwerStatus
        )}

        {index + 1 >= questions.length ? (
          <Pressable
            onPress={() =>
              navigation.navigate("CaloriesResult", {
                points: points,
                answers: answers,
              })
            }
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => {
              setIndex(index + 1);
              setCounter(15);
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Next Question</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
}

export default QuizOverviewScreen;

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  progress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  questionsContainer: {
    marginTop: 30,
    backgroundColor: "#F0F8FF",
    padding: 10,
    borderRadius: 6,
  },
  questionFont: {
    fontSize: 18,
    fontWeight: "bold",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#00FFFF",
    marginVertical: 10,
    borderRadius: 20,
  },
  optionsText: {
    borderColor: "#00FFFF",
    textAlign: "center",
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 10,
  },
});

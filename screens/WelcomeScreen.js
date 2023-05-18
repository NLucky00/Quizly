import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AuthContext } from "../store/auth-context";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../constants/styles";
import { BottomSheet } from "react-native-btr";

function WelcomeScreen() {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const navigation = useNavigation();
  const [fetchedMessage, setFetchedMesssage] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        "https://quiz-dipl-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMesssage(response.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Image
        style={{
          height: 350,
          width: "140%",
          resizeMode: "contain",
          marginLeft: -10,
        }}
        source={require("../assets/ZoomedLOGO.png")}
      />
      <Text style={styles.title}>Welcome!</Text>

      <Text style={styles.texts}>
        Choose your category and learn more about your eating habits!
      </Text>
      <Text>{fetchedMessage} </Text>

      <Pressable
        onPress={() => navigation.navigate("Categories")}
        style={styles.pressableContainer}
      >
        <Text style={styles.pressableTextContainer}>Categories</Text>
      </Pressable>
      <View>
        <Pressable
          onPress={toggleBottomNavigationView}
          style={styles.pressableContainerInfo}
        >
          <Text style={styles.pressableTextContainer}>Information</Text>
        </Pressable>
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
        >
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text style={styles.bottomSheetTextContainer}>
                What you need to know before you start:
              </Text>
              <View
                style={{
                  padding: 45,
                  paddingTop: 20,
                  backgroundColor: Colors.primary100,
                  borderRadius: 10,
                }}
              >
                <View style={styles.innerInnerViewBottomSheet}>
                  <Text style={{ color: "white" }}>●</Text>
                  <Text style={styles.innerInnerContainerBottomSheet}>
                    For each correct answer you get 10 points.
                  </Text>
                </View>

                <View style={styles.innerInnerViewBottomSheet}>
                  <Text style={{ color: "white" }}>●</Text>
                  <Text style={styles.innerInnerContainerBottomSheet}>
                    There is no negative marking for wrong answer.
                  </Text>
                </View>

                <View style={styles.innerInnerViewBottomSheet}>
                  <Text style={{ color: "white" }}>●</Text>
                  <Text style={styles.innerInnerContainerBottomSheet}>
                    For each question you have 15 sec.
                  </Text>
                </View>

                <View style={styles.innerInnerViewBottomSheet}>
                  <Text style={{ color: "white" }}>●</Text>
                  <Text style={styles.innerInnerContainerBottomSheet}>
                    At the end of the quiz, you can learn about the subject you
                    chose.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
    marginTop: -85,
    marginLeft: 0,
    backgroundColor: Colors.primary100,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: -130,
  },
  texts: {
    fontSize: 25,
    marginBottom: 8,
  },
  startQuizButton: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
  },
  pressableContainer: {
    backgroundColor: Colors.primary500,
    padding: 24,
    width: 180,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  pressableContainerInfo: {
    backgroundColor: "#f37c33",
    padding: 24,
    width: 180,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  pressableTextContainer: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "42%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetTextContainer: {
    textAlign: "center",
    padding: 20,
    fontSize: 20,
  },
  innerInnerContainerBottomSheet: {
    marginLeft: 4,
    color: "#722F37",
    fontSize: 16,
    fontWeight: "500",
  },
  innerInnerViewBottomSheet: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
  },
});

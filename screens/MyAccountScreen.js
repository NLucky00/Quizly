import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { Colors } from "../constants/styles";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";
import { useNavigation } from "@react-navigation/native";

function MyAccount() {
  const navigation = useNavigation();

  const [name, setName] = useState("Click me to choose your name");
  const [editingName, setEditingName] = useState(false);

  const handleNameChange = () => {
    setEditingName(true);
  };

  const handleNameSave = () => {
    setEditingName(false);
  };

  //for
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <Ionicons name="camera" size={24} color="black" />
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
            }}
          />
        </View>
        {editingName ? (
          <TextInput
            style={styles.editNameInput}
            value={name}
            onChangeText={setName}
            onBlur={handleNameSave}
            autoFocus
          />
        ) : (
          <TouchableOpacity onPress={handleNameChange}>
            <Text style={styles.name}>{name}</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.bio}>
          After everything you learned, will you add some new goals?
        </Text>
      </View>

      <Pressable
        onPress={() => navigation.navigate("Goals")}
        style={{
          backgroundColor: Colors.primary500,
          padding: 14,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 20,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          ADD NEW GOALS
        </Text>
      </Pressable>
    </View>
  );
}

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary100,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    marginTop: -25,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 30,
  },
  editNameInput: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    marginBottom: 10,
  },
});

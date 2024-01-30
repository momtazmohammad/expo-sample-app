import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function Snackbar({ msg, backColor, onPress, open, time }) {
  useEffect(() => {
    if (open)
      setTimeout(() => {
        onPress();
      }, time);
  }, [open]);
  return (
    open && (
      <View style={[styles.snackContainer, { backgroundColor: backColor }]}>
        <Text style={styles.text}>{msg}</Text>
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            name="close"
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    )
  );
}
const styles = StyleSheet.create({
  snackContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    position: "absolute",
    bottom: 25,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    width: "95%",
  },
  text: {
    color: "#eee",
    fontSize: 20,
    fontWeight: "600",
    width: "90%",
  },
  icon: {
    marginRight: 10,
  },
});
export default Snackbar;

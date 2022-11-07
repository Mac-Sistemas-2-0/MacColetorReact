import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";



const Reload = () => {
  return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={100} color="#0000ff" />
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#FFF",
    opacity: 0.5
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  none: {
    display: "none"
  },
  flex: {
    display: "flex"
  }
});

export default Reload;
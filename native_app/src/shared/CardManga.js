import React from "react";
import { StyleSheet, TextPropTypes, View } from "react-native";

export default function CardManga(props) {
  return (
    <View style={styles.cardManga}>
      <View style={styles.cardMangaContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardManga: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: "100%",
  },
  cardMangaContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { CardColours } from "../assets/colors";
import { LinearGradient } from "expo-linear-gradient";

export const PokemonCard = ({ name, id }) => {
  return (
    <>
      <LinearGradient
        colors={[CardColours.gold, CardColours.white]}
        start={{
          x: 0,
          y: 0.5,
        }}
        end={{
          x: 1,
          y: 0.5,
        }}
        style={styles.card}
      >
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <Text style={styles.index}>#{id}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>

        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          }}
        />
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "95%",
    height: 100,
    backgroundColor: CardColours.pastelpink,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 25,
    alignSelf: "center",

    textTransform: "capitalize",
    color: "white",
  },
  image: {
    width: 120,
    height: 100,
    paddingVertical: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  index: {
    fontSize: 18,
    fontStyle: "italic",
    color: "white",
  },
});

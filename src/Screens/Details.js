import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { View, Image, Center, Icon, Button, IconButton } from "native-base";
import { CardColours } from "../assets/colors";
import { getPokemonDetails } from "../API/API";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {  useDispatch } from "react-redux";
import { addToFav, removeFromFav } from "../Store/Pokemon/actions";
import styles from "../Styles/DetailsStyles";

export const Details = ({ navigation, route }) => {
  const dispatch = useDispatch();
  console.log("route.params.favorite", route.params.fav);
  const id = route.params.id;
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [types, setTypes] = useState([]);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [fav, setFav] = useState(route.params.fav);
  const [pokemon, setPokemon] = useState({
    id: route.params.id,
    name: route.params.name,
  });

  const HeightWeightConversion = (height, weight) => {
    setHeight((pokemonDetails.height / 3.28084).toFixed(2));
    setWeight((pokemonDetails.weight / 10).toFixed(2));
  };

  useEffect(() => {
    getPokemonDetails(id).then((res) => {
      setPokemonDetails(res);
      setTypes(res.types);
    });
  }, [id]);

  useEffect(() => {
    HeightWeightConversion(pokemonDetails.height, pokemonDetails.weight);
  }, [pokemonDetails]);

  const handleFavourite = () => {
    // Adding the pokemon to Favourites if fav=false and removing it if fav=true
    if (fav) {
      console.log("Removing Fav", route.params.id);
      dispatch(removeFromFav(route.params.id));
      setFav(false);
    } else {
      console.log("Adding Fav");
      dispatch(addToFav(pokemon));
      setFav(true);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[CardColours.gold, CardColours.pastelgreen]}
        start={{
          x: 1.4,
          y: 0.9,
        }}
        end={{
          x: 0.8,
          y: 0.1,
        }}
        style={styles.ImageContainer}
      >
        <View style={styles.header}>
          <Button
            style={styles.BackButton}
            leftIcon={
              <Icon
                as={Ionicons}
                style={{ color: "black" }}
                name="arrow-back"
                size="sm"
              />
            }
            onPress={() => navigation.goBack()}
          >
            <Text>Back</Text>
          </Button>
          <IconButton
            icon={
              <Icon
                as={Ionicons}
                name="star"
                size="lg"
                style={{ color: fav ? "yellow" : "black", alignSelf: "center" }}
              />
            }
            onPress={() => handleFavourite()}
          />
        </View>
        <Center>
          <Image
            style={styles.img}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            }}
            alt="Pokemon"
          />
        </Center>
        <Text style={styles.name}>{route.params.name}</Text>
      </LinearGradient>

      <View style={styles.DetailsContainer}>
        {/* <Text style={styles.details}> id: {pokemonDetails.id} </Text> */}
        <Text style={styles.subheading}>Height: {height} feet </Text>
        <Text style={styles.subheading}>Weight: {weight} kg </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subheading}>Types: </Text>

          {types.map((type, keyExtractor) => (
            <Text
              key={keyExtractor}
              style={{
                ...styles.type,
                backgroundColor: CardColours[type.type.name],
              }}
            >
              {type.type.name}{" "}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

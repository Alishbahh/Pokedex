import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Button, Center, Icon, Image } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { PokemonCard } from "../Components/PokemonCard";
import styles from "../Styles/FavouriteStyles";

import { getPokemonDetails } from "../API/API";
import { LinearGradient } from "expo-linear-gradient";
import { CardColours } from "../assets/colors";

export const Favourites = (props) => {
  const Favourites = useSelector((state) => state.favourites);
  const navigation = useNavigation();
  const [visible, setModalVisible] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [types, setTypes] = useState([]);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const HeightWeightConversion = (height, weight) => {
    // console.log("height", height);
    // console.log("weight", weight);
    setHeight((height / 3.28084).toFixed(2));
    setWeight((weight / 10).toFixed(2));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainheading}> Favourites </Text>
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
          <Text>Home </Text>
        </Button>
      </View>

      <View
        style={{
          paddingTop: 160,
          width: "100%",
          paddingBottom: 40,
          alignSelf: "center",
          marginLeft: 25,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ width: "95%", alignSelf: "center" }}
          data={Favourites}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                getPokemonDetails(item.id).then((res) => {
                  setPokemonDetails(res);
                  setTypes(res.types);
                  HeightWeightConversion(res.height, res.weight);
                  setModalVisible(true);
                });
              }}
            >
              <PokemonCard name={item.name} id={item.id} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />

        {/* **********MODAL *********/}
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            setModalVisible(!visible);
          }}
          onDismiss={() => {
            setModalVisible(!visible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!visible);
                  }}
                >
                  <Text style={styles.modalHeaderCloseText}>X</Text>
                </TouchableOpacity>
              </View>
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
                <Center>
                  <Image
                    style={styles.img}
                    source={{
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
                    }}
                    alt="Pokemon"
                  />
                </Center>
                <Text style={styles.name}>{pokemonDetails.name}</Text>
              </LinearGradient>
              <Text style={styles.subheading}> Height: {height} feet</Text>
              <Text style={styles.subheading}> Weight:{weight} kg</Text>
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
        </Modal>
      </View>
    </View>
  );
};

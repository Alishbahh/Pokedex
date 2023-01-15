import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  Button,
  Icon,
  FlatList,
  Box,
  Select,
  CheckIcon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { getPokemonList } from "../API/API";
import { PokemonCard } from "../Components/PokemonCard";
import { useSelector } from "react-redux";
import styles from "../Styles/HomeStyles";
export const HomeScreen = ({ navigation, route }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [offset, setOffset] = useState(0);

  const Favourites = useSelector((state) => state.favourites);
  var fav = false;

  const mapFavorites = (id) => {
    // THIS FUNCTION IS USED TO CHECK WHETHER POKEMON HAS BEEN FAVVED
    // OR NOT(SO I CAN INITALIZE THE STATE OF
    // FAV BUTTON ACCORDINGLY IN DETAILS SCREEN)

    fav = false;
    for (let i = 0; i < Favourites.length; i++) {
      if (Favourites[i].id == id) {
        fav = true;
      }
    }

    return fav;
  };

  useEffect(() => {
    getPokemonList(pageSize, offset).then((res) => {
      setPokemonList(res.results);
    });
  }, [pageSize]);

  useEffect(() => {
    getPokemonList(pageSize, offset).then((res) => {
      setPokemonList(res.results);
    });
  }, [offset]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mainheading}> Pokédex </Text>

          <Button
            style={styles.FavButton}
            leftIcon={
              <Icon
                as={Ionicons}
                style={{ color: "gold" }}
                name="star"
                size="sm"
              />
            }
            onPress={() => navigation.navigate("Favourites")}
          >
            <Text>Go To Favourites </Text>
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
            data={pokemonList}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate("Details", {
                    id: item.url.split("/")[6],
                    name: item.name,
                    fav: mapFavorites(item.url.split("/")[6]),
                  });
                }}
              >
                <PokemonCard name={item.name} id={item.url.split("/")[6]} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
        </View>

        <View style={styles.bottom}>
          <Text style={styles.pagesize}> Items Per Page</Text>
          <Box maxW="20">
            <Select
              selectedValue={pageSize}
              Type="underlined"
              minWidth="20"
              placeholder="#"
              _selectedItem={{
                bg: "gold",
                endIcon: <CheckIcon size="1" />,
              }}
              mt={1}
              onValueChange={(itemValue) => {
                setPageSize(parseInt(itemValue));
              }}
            >
              <Select.Item label="10" value="10" />
              <Select.Item label="15" value="15" />
              <Select.Item label="20" value="20" />
              <Select.Item label="25" value="25" />
              <Select.Item label="30" value="30" />
            </Select>
          </Box>

          <View style={styles.paginationContainer}>
            <Pressable
              style={styles.pagination}
              disabled={offset == 0}
              onPress={() => {
                if (offset > 0) {
                  setOffset(offset - pageSize);
                }
              }}
            >
              <Text style={offset === 0 ? styles.disabled : styles.pagination}>
                {" "}
                {"<<"}Prev{" "}
              </Text>
            </Pressable>
            <Pressable
              style={styles.pagination}
              onPress={() => setOffset(offset + pageSize)}
            >
              <Text style={styles.pagination}> Next{">>"} </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

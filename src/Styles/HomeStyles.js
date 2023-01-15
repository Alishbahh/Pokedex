
import { StyleSheet } from "react-native";
import { CardColours } from "../assets/colors";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      backgroundColor: "gold",
      height: 150,
      width: "100%",
      position: "absolute",
      top: 0,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    mainheading: {
      alignSelf: "center",
      paddingTop: 50,
      textAlign: "center",
      fontSize: 25,
    },
    FavButton: {
      height: 40,
      width: "40%",
      backgroundColor: "white",
      alignSelf: "center",
      marginTop: 10,
      borderRadius: 20,
      paddingHhorizontal: 20,
    },
    bottom: {
      backgroundColor: "white",
      flexDirection: "row",
      height: 50,
      width: "100%",
      position: "absolute",
      bottom: 0,
      borderRadius: 20,
    },
    pagesize: {
      alignSelf: "center",
      marginHorizontal: 3,
    },
    pagination: {
      alignSelf: "center",
      marginHorizontal: 3,
      color: 'black',
    },
    disabled:{
      alignSelf: "center",
      marginHorizontal: 3,
      color: 'lightgrey',

    },
    paginationContainer: {
      flexDirection: "row",
      marginLeft: 60,
    },
  });

  
export default styles;
  
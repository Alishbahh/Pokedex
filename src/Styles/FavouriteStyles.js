import { StyleSheet } from "react-native";
import { CardColours } from "../assets/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    type: {
      fontSize: 18,
      marginHorizontal: 10,
      fontStyle: "italic",
      fontVariant: ["small-caps"],
      alignSelf: "center",
      backgroundColor: CardColours.pastelgreen,
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      textAlign: "center",
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
    BackButton: {
      height: 40,
      width: "40%",
      backgroundColor: "white",
      alignSelf: "center",
      marginTop: 10,
      marginBottom:0,
      borderRadius: 20,
      paddingHhorizontal: 20,
    },

    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
    modalView: {
      marginHorizontal: 5,
      backgroundColor: 'white',
      borderRadius: 20,
      padding:20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 7,
      height:'70%',
      width:'85%',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: '#828282',
    },
    modalHeader: {
      flexDirection: 'row',
      marginBottom: 15,
      justifyContent: 'space-between',
    },
    modalHeaderContent: {
      flexDirection: 'row',
      marginLeft: 10,
      justifyContent: 'space-between',
    },
    modalHeaderCloseText: {
      textAlign: 'center',
      paddingHorizontal: 7,
      paddingVertical: 3,
      fontWeight: 'bold',
      color: 'CardColours.pastelgreen',
      borderRadius: 500,
    },
    img: {
      width: 250,
      height: 200,
    },
    name: {
      fontSize: 35,
      alignSelf: "center",

      fontWeight: "bold",
      textTransform: "capitalize",
      color: "white",
    },
    subheading: {
      fontSize: 20,
      fontWeight: "500",
      fontStyle: "italic",
      fontVariant: ["small-caps"],
      color: "black",
      marginVertical: 15,
    },
    ImageContainer: {
      backgroundColor: CardColours.pastelgreen,
     borderRadius:20,
      width: "100%",
      height: "50%",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  export default styles;
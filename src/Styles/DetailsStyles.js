import { StyleSheet } from "react-native";
import { CardColours } from "../assets/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageContainer: {
    backgroundColor: CardColours.pastelgreen,

    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  DetailsContainer: {
    backgroundColor: CardColours.white,
    width: "100%",
    height: "40%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
    marginTop: -15,
  },
  BackButton: {
    height: 40,
    width: "25%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  name: {
    fontSize: 35,
    alignSelf: "center",
    fontStyle: "italic",
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "white",
  },
  img: {
    width: 250,
    height: 300,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "italic",
    fontVariant: ["small-caps"],
    color: "black",
    marginVertical: 20,
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
  details: {
    fontSize: 22,
    fontVariant: ["kern"],
    color: "black",
    marginBottom: 30,
    top: 0,
  },
});

export default styles;

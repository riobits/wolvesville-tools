import { View, Image, StyleSheet, Pressable } from "react-native";
import { SelectorType } from "../types";
import { choiceImages } from "../data/constants";

interface ChoiceProps {
  type: SelectorType;
  currentType: SelectorType;
  onPress: () => void;
}

const Choice = ({ type, currentType, onPress }: ChoiceProps) => {
  const image = choiceImages[type];
  const isActive = type === currentType;

  return (
    <View style={[styles.outerContainer, isActive && styles.active]}>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <Image style={styles.image} source={image} resizeMode="contain" />
      </Pressable>
    </View>
  );
};

export default Choice;

const styles = StyleSheet.create({
  outerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
    borderRadius: 50,
    overflow: "hidden",
  },
  innerContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 25,
    height: 25,
  },
  active: {
    borderColor: "purple",
  },
});

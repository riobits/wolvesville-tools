import { View, StyleSheet } from "react-native";
import Choice from "./Choice";
import { SelectorType } from "../types";

interface ChoicesProps {
  selectorType: SelectorType;
  onChoicePress: (type: SelectorType) => void;
}

const Choices = ({ selectorType, onChoicePress }: ChoicesProps) => {
  const pressHandler = (type: SelectorType) => {
    return () => {
      onChoicePress(type);
    };
  };

  return (
    <View style={styles.selectorTypes}>
      <Choice
        type="good"
        currentType={selectorType}
        onPress={pressHandler("good")}
      />
      <Choice
        type="evil"
        currentType={selectorType}
        onPress={pressHandler("evil")}
      />
      <Choice
        type="unknown"
        currentType={selectorType}
        onPress={pressHandler("unknown")}
      />
      <Choice
        type="died"
        currentType={selectorType}
        onPress={pressHandler("died")}
      />
    </View>
  );
};

export default Choices;

const styles = StyleSheet.create({
  selectorTypes: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    flexWrap: "wrap",
  },
});

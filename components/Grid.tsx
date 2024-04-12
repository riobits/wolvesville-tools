import { View, StyleSheet } from "react-native";
import { Player, SelectorType } from "../types";
import GridItem from "./GridItem";

interface GridProps {
  players: Player[];
  onPlayerPress: (id: number) => void;
}

const Grid = ({ players, onPlayerPress }: GridProps) => {
  const pressHandler = (id: number) => {
    return () => {
      onPlayerPress(id);
    };
  };

  return (
    <View style={styles.grid}>
      {players.map((player) => (
        <GridItem
          key={player.id}
          player={player}
          onPress={pressHandler(player.id)}
        />
      ))}
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 550,
  },
});

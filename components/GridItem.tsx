import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Player } from "../types";
import { choiceImages } from "../data/constants";

interface GridItemProps {
  player: Player;
  onPress: () => void;
}

const GridItem = ({ player, onPress }: GridItemProps) => {
  const auraStyle = player.aura && styles[player.aura];

  const content = player.aura ? (
    <View style={styles.auraContainer}>
      <Text style={styles.auraText}>{player.id}</Text>
      <Image
        style={styles.image}
        source={choiceImages[player.aura]}
        resizeMode="contain"
      />
    </View>
  ) : (
    <Text>{player.id}</Text>
  );

  return (
    <View style={styles.columnContainer}>
      <View style={[styles.column, auraStyle]}>
        <Pressable
          style={styles.itemContainer}
          android_ripple={{ color: "#ccc" }}
          onPress={onPress}
        >
          {content}
        </Pressable>
      </View>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  good: {
    backgroundColor: "#2ecc71",
  },
  evil: {
    backgroundColor: "#e74c3c",
  },
  unknown: {
    backgroundColor: "#f39c12",
  },
  died: {
    backgroundColor: "#7f8c8d",
  },
  auraContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  auraText: {
    position: "absolute",
    top: 5,
    color: "#fff",
  },
  columnContainer: {
    width: "25%",
    height: "25%",
    padding: 2,
  },
  column: {
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  itemContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});

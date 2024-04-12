import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Player, SelectorType } from "../types";

import Grid from "../components/Grid";
import Choices from "../components/Choices";
import PrimaryButton from "../components/PrimaryButton";

import { playersData } from "../data/constants";

const HomeScreen = () => {
  const [selectorType, setSelectorType] = useState<SelectorType>("good");
  const [players, setPlayers] = useState<Player[]>(playersData);

  const resetHandler = () => {
    setPlayers(playersData);
  };

  const selectorTypeHandler = (type: SelectorType) => {
    setSelectorType(type);
  };

  const playerAuraHandler = (id: number) => {
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player) => {
        if (player.id === id) {
          if (player.aura === selectorType) return { ...player, aura: null };
          return {
            ...player,
            aura: selectorType,
          };
        }
        return player;
      });
    });
  };

  return (
    <ScrollView>
      <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
      <Grid players={players} onPlayerPress={playerAuraHandler} />
      <View style={styles.container}>
        <Text style={styles.title}>Selector Type</Text>
        <Choices
          onChoicePress={selectorTypeHandler}
          selectorType={selectorType}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

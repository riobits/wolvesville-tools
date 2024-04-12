import { Player, SelectorType } from "../types";

export const choiceImages: { [k in SelectorType]: any } = {
  good: require("../assets/images/Good.png"),
  evil: require("../assets/images/Evil.png"),
  unknown: require("../assets/images/Unknown.png"),
  died: require("../assets/images/Gravestone.png"),
};

export const playersData: Player[] = [];

for (let i = 1; i <= 16; i++) {
  playersData.push({ id: i, aura: null });
}

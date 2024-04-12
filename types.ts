export type SelectorType = "good" | "evil" | "unknown" | "died";

export interface Player {
  id: number;
  aura: SelectorType | null;
}

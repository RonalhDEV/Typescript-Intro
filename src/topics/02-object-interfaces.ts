const skills: string[] = ["Bask", "Counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const ronaldo: Character = {
  name: "Ronaldo",
  hp: 100,
  skills: ["Bask", "Counter"],
};

ronaldo.hometown = "Pereira";

console.table(ronaldo);

export {};

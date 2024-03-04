

function addNumbers(a: number, b: number) {
    return a + b
}

const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`; 
}

function multiply( firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2) 
// const result2: string = addNumberArrow(1, 2)
// const multiplyResult:number = multiply(5)
// console.log({ result, result2, multiplyResult });


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const heahtCharacter = ( character: Character, amount: number) => {
    if ( character.hp + amount >= 100 ) {
        character.hp = 100;
        console.log("Curado al máximo");
        
    } else {
        character.hp += amount;
    }
}

const ronaldo: Character = {
    name: "Ronaldo",
    hp: 20,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}
heahtCharacter(ronaldo, 50)
heahtCharacter(ronaldo, 40)

ronaldo.showHp();


export {}
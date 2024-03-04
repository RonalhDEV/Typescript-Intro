

interface AudioPlayer {
    audioVolue: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolue: 60,
    songDuration: 436,
    song: "Atlantis",
    details: {
        author: "Seafret",
        year: 2016
    }
}

const song = "New song"

const { song:anotherSong, songDuration:duration, details } = audioPlayer
const { author } = details

// console.log("Song: ", anotherSong);
// console.log("Duration: ", duration);
// console.log("Author: ", author );

const [, , trunks = "Not found"]: String[] = ["Goku", "Vegeta"];

// console.log("Personaje: ", dbz[3] || "Personaje no encontrado");

// const trunks = dbz[3] || "No hay personaje";

console.error("Personaje: ", trunks);

export {}
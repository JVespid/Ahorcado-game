export default function seEncript() {
  const encrypt = ({ word, clue }) => {
    let Encriptador = [/e/gi, /i/gi, /a/gi, /o/gi, /u/gi];
    let palabrasClave = ["enter", "imes", "ai", "ober", "ufat"];

    let newWord = word;
    if (word && word.trim()) {
      for (let i = 0; i < palabrasClave.length; i++) {
        newWord = newWord.replace(Encriptador[i], palabrasClave[i]);
      }
    }

    let newClue = clue;
    if (clue && clue.trim()) {
      for (let i = 0; i < palabrasClave.length; i++) {
        newClue = newClue.replace(Encriptador[i], palabrasClave[i]);
      }
    }

    return { newWord, newClue };
  };

  const decrypt = ({ word, clue }) => {
    let palabrasClave = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g];
    let desencriptar = ["e", "i", "a", "o", "u"];
    let newWord = word;

    if (word && word.trim()) {
      for (let i = 0; i < palabrasClave.length; i++) {
        newWord = newWord.replace(palabrasClave[i], desencriptar[i]);
      }
    }
    let newClue = clue;
    if (clue && clue.trim()) {
      for (let i = 0; i < palabrasClave.length; i++) {
        newClue = newClue.replace(palabrasClave[i], desencriptar[i]);
      }
    }

    return { newWord, newClue };
  };

  return { encrypt, decrypt };
}

import axios from "axios";

export const useDBWords = () => {
  const url = "/api/wordApiSupabase";

  const getValue = async () => {
    const { data } = await axios.get(url);
    return { result: data };
    //setValues(data);
  };

  const getValueRandom = async () => {
    const { data } = await axios.get(url, { params: { random: true } });
    return { result: data };
    //setValues(data);
  };
  const addValue = async ({ word, clue, password }) => {
    const limits = /[a-zA-Z]/;
    const limitsComas = /[áéíóúüÁÉÍÓÚ]/;
    const limitNoLetter = /[^a-zA-Z]/;
    const wordNew = word
      .split("")
      .filter(
        (e, index) =>
          e == " " &&
          (limits.test(word[index - 1]) || limits.test(word[index + 1])),
      )
      .join("");

    if (limitsComas.test(wordNew) || limitNoLetter.test(wordNew)) {
      return {
        result: {
          status: 400,
          data: "word no valid",
          message: "error, the word have a character not allowed",
        },
      };
    }
    const result = await axios.post(url, {
      type: "AddWord",
      word,
      clue,
      password,
    });
    return { result };
  };

  const ranking = async ({ name, punctuations }) => {
    const result = await axios.post(url, {
      type: "Ranking",
      name,
      punctuations,
    });
    return { result };
  };

  return { getValue, addValue, getValueRandom };
};

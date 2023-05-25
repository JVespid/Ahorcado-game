import { createClient } from "@supabase/supabase-js";

export default async function wordApiSupabase(req, res) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  const id =
    typeof req.body.id != "number" ? parseInt(req.body.id) : req.body.id;
  let dat = { code: 401, data: null, message: "error the server internal" },
    info = false;

  switch (req.method) {
    case "POST":
      if (
        !req.body.word.trim() ||
        req.body.password !== process.env.PASSWORD_MASTER
      ) {
        dat.message = "error, check password or word";
        break;
      }
      dat = await addWord({
        res,
        supabase,
        word: req.body.word,
        clue: req.body.clue,
      });
      info = true;
      break;
    case "GET":
      if (req.query.random) {
        dat = await getWordsRandom({ res, supabase });
        info = true;
      } else {
        dat = await getWordsAll({ res, supabase });
        info = true;
      }
      break;
    case "PUT":
      if (!(req.body.word.trim() !== "" && id !== undefined)) break;
      dat = await updateWord({ res, supabase, word: req.body.word, id });
      info = true;
      break;
    case "DELETE":
      dat = await deleteWord({ res, supabase, id });
      info = true;
      break;

    default:
      info = false;
      break;
  }
  if (info) {
    const { code, data, message } = dat;

    res.status(code).json({ data, message });
  } else {
    res.status(400).json({
      data: { method: res.method, query: res.query },
      message: "review the query data",
    });
  }
}

const getWordsAll = async ({ supabase }) => {
  const { data, error } = await supabase.from("words").select("*");
  if (error) return { code: 400, data: error, message: "Error fetching words" };

  return { code: 200, data, message: "Words fetched successfully" };
};

const getWordsRandom = async ({ supabase }) => {
  const { data, error } = await supabase.from("words").select("*");
  if (error) return { code: 400, data: error, message: "Error fetching words" };
  const data1 = data[Math.floor(Math.random() * data.length)];

  return { code: 200, data: data1, message: "Words fetched successfully" };
};

const addWord = async ({ supabase, word, clue }) => {
  const { data: wordLast, error: errorLast } = await supabase
    .from("words")
    .select(word)
    .eq("word", word);

  if (wordLast)
    return { code: 400, data: errorLast, message: "Error adding word" };

  if (wordLast != word) {
    const { data, error } = await supabase
      .from("words")
      .insert({ word: word, clue: clue });
    if (error) return { code: 400, data: error, message: "Error adding word" };
    return { code: 200, data, message: "Word added successfully" };
  }
  return {
    code: 220,
    data: { wordLast, wordActual: word },
    message: "Word already exists",
  };
};

const updateWord = async ({ supabase, word, id }) => {
  const { data, error } = await supabase
    .from("words")
    .update({ word })
    .eq("id", id);
  if (error) return { code: 400, data: error, message: "Error updating word" };

  return { code: 200, data, message: "Word updated successfully" };
};

const deleteWord = async ({ supabase, id }) => {
  const { data, error } = await supabase.from("words").delete().eq("id", id);
  if (error) return { code: 400, data: error, message: "Error deleting word" };

  return { code: 200, data, message: "Word deleted successfully" };
};

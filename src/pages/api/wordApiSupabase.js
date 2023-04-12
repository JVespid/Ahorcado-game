import { createClient } from "@supabase/supabase-js";

export default async function wordApiSupabase(req, res) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  const id =
    typeof req.query.id != "number" ? parseInt(req.query.id) : req.query.id;

  if (req.method === "POST" && req.body.word.trim() !== "") {
    console.log("post word");
    addWord({ res, supabase, word: req.body.word });
  }
  if (req.method === "GET") {
    console.log("get words");
    const { code, data, message } = await getWordsAll({ res, supabase });
    console.log("code", code, "data", data, "message", message)
    res.status(code).json({ data, message });
  }
  if (req.method === "PUT" && req.body.word.trim() !== "" && id !== undefined) {
    console.log("put word");
    updateWord({ res, supabase, word: req.body.word, id });
  }
  if (req.method === "DELETE") {
    console.log("delete word");
    deleteWord({ res, supabase, id });
  }
  /* res.status(400).json({
    data: { method: res.method, query: res.query },
    message: "review the query data",
  }); */
}

const getWordsAll = async ({ res, supabase }) => {
  const { data, error } = await supabase.from("words").select("*");
  if (error) {
    return { code: 400, data: error, message: "Error fetching words" };
    res.status(400).json({ data: error, message: "Error fetching words" });
  }

  return { code: 200, data, message: "Words fetched successfully" };
  res.status(200).json({ data, message: "Words fetched successfully" });
};

const addWord = async ({ res, supabase, word }) => {
  const { data: wordLast, error: errorLast } = await supabase
    .from("words")
    .select(word)
    .eq("word", word);
  if (errorLast) {
    res.status(400).json({ data: errorLast, message: "Error adding word" });
  }
  if (wordLast != word) {
    const { data, error } = await supabase.from("words").insert({ word });
    if (error) {
      res.status(400).json({ data: error, message: "Error adding word" });
    }
    res.status(200).json({ data, message: "Word added successfully" });
  }
  res.status(200).json({
    data: { wordLast, wordActual: word },
    message: "Word already exists",
  });
};

const updateWord = async ({ res, supabase, word, id }) => {
  const { data, error } = await supabase
    .from("words")
    .update({ word })
    .eq("id", id);
  if (error) {
    res.status(400).json({ data: error, message: "Error updating word" });
  }
  res.status(200).json({ data, message: "Word updated successfully" });
};

const deleteWord = async ({ res, supabase, id }) => {
  const { data, error } = await supabase.from("words").delete().eq("id", id);
  if (error) {
    res.status(400).json({ data: error, message: "Error deleting word" });
  }
  res.status(200).json({ data, message: "Word deleted successfully" });
};

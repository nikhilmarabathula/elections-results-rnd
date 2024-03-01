import supabase from "./supabase";

export async function getSearchResults() {
  let { data: assemblies, error } = await supabase
    .from("assemblies")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Assemblies data could not be loaded");
  }

  return assemblies;
}

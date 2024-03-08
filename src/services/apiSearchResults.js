import supabase from "./supabase";

export async function getSearchResults(searchCategory) {
  if (searchCategory === "Assembly") {
    return await getAssemblyResults();
  } else if (searchCategory === "Parliament") {
    return await getParliamentResults();
  } else if (searchCategory === "District") {
    return await getDistrictsResults();
  } else if (searchCategory === "Mandal") {
    return await getMandalResults();
  }
}

async function getAssemblyResults() {
  console.log("fetching assembly results");
  let { data: assemblies, error } = await supabase
    .from("assemblies")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Assemblies data could not be loaded");
  }

  return assemblies;
}

async function getParliamentResults() {
  console.log("fetching parliament results");
  let { data: parliaments, error } = await supabase
    .from("assemblies")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Parliaments data could not be loaded");
  }

  return parliaments;
}

async function getDistrictsResults() {
  console.log("fetching districts  results");
  let { data: districts, error } = await supabase
    .from("assemblies")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Districts data could not be loaded");
  }

  return districts;
}

async function getMandalResults() {
  console.log("fetching mandal results");
  let { data: mandals, error } = await supabase.from("assemblies").select("*");

  if (error) {
    console.error(error);
    throw new Error("Mandals data could not be loaded");
  }

  return mandals;
}

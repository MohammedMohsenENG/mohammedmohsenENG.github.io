'use strict'

async function getData(lang) {
  switch (lang) {
    case "ar":
      var url = "http://localhost:5500/db/ar.json";
      break;

    case "en":
      var url = "http://localhost:5500/db/en.json";
      break;

    case "fr":
      var url = "http://localhost:5500/db/fr.json";
      break;

    default:
      return console.error("there is no content");
  }

  try {
    const response = await fetch(url);
    console.log(response.status);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.json();
    console.log(result);

    return result
  } catch {
    console.error("error");
  }
}

export const content = await getData("ar");

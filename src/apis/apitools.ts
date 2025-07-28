import DeviantArt from "deviantart.ts";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { createObjectCsvWriter } from "csv-writer";

const username = "Parastos ";
dotenv.config({ path: "./.env" });
console.log("CLIENT ID:", process.env.DEVIANTART_CLIENT_ID);
console.log("CLIENT SECRET:", process.env.DEVIANTART_CLIENT_SECRET);

// Set up CSV writer
const csvWriter = createObjectCsvWriter({
  path: "./deviations.csv",
  header: [
    { id: "title", title: "Title" },
    { id: "views", title: "Views" },
    { id: "favourites", title: "Favourites" },
    { id: "comments", title: "Comments" },
  ],
});

interface DeviationStats {
  title: string;
  views: number;
  favourites: number;
  comments: number;
}

async function fetchAllDeviations(user: string) {
  let offset = 0;
  const allDeviations: DeviationStats[] = [];

  // Login to DeviantArt
  const deviantArt = await DeviantArt.login(
    process.env.DEVIANTART_CLIENT_ID!,
    process.env.DEVIANTART_CLIENT_SECRET!
  );

  while (true) {
    const response = await deviantArt.gallery.all({
      username: user,
      offset: offset,
      limit: 24,
    });

    const chunk = response.results.map((d: any) => ({
      title: d.title,
      views: d.stats?.views || 0,
      favourites: d.stats?.favourites || 0,
      comments: d.stats?.comments || 0,
    }));

    allDeviations.push(...chunk);

    // console.log("Pushed");

    if (!response.has_more || response.next_offset == null) break;

    offset = response.next_offset;
  }

  await csvWriter.writeRecords(allDeviations);
  console.log("CSV file written successfully.");
}

async function fetchUserStats(username: string) {
  // We're interested in number of follows and number of deviations

  // Login to DeviantArt
  const deviantArt = await DeviantArt.login(
    process.env.DEVIANTART_CLIENT_ID!,
    process.env.DEVIANTART_CLIENT_SECRET!
  );

  const response = await deviantArt.user.profile({ username });
  return response.stats;
}

async function getArtistsInGroup(group: string) {
  const req =
    "https://www.deviantart.com/_puppy/gruser/module/group_members?gruserid=15820214&gruser_typeid=4&username=German-History&moduleid=5967185439&offset=159&limit=24&da_minor_version=20230710&csrf_token=SnWVTWFkS9NhZPxN.t038z9.YtMq8twu-fAIX4YtAKQWNniGP0XGTnYNLrPfGLyEDY4";

  fetch(req, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

async function artistAnalysis(username: string) {
  fetchUserStats(username);
  fetchAllDeviations(username);
}

function main() {
  const args = process.argv.slice(2); // Grab args after 'node scriptname'
  if (args.length < 1) {
    console.error("Usage: ts-node script.ts <username>");
    process.exit(1);
  }

  const username = args[0];
  artistAnalysis(username);
}

main();

// Average Quality (Average Favourites)

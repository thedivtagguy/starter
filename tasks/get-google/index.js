import { docToArchieML } from "@newswire/doc-to-archieml";
import chalk from "chalk";
import { google } from "googleapis";
import logger from "./helpers/logger/index.js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

// Read the credentials file
// This has the Google API credentials json file
dotenv.config({ path: path.join(process.cwd(), ".env") });
const credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;

if (!credentials) {
  logger.error(chalk`Couldn't find the Google API credentials file.`);
  process.exit(0);
}

// Config file contains the Google doc IDs
const configFile = path.join(process.cwd(), "google.json");
const configDetails = JSON.parse(fs.readFileSync(configFile, "utf8"));

logger.info(chalk`{green.bold Fetching docs...}`);

async function main() {
  // Authenticate with Google
  const auth = await google.auth.getClient({
    keyFilename: credentials,
    scopes: ["https://www.googleapis.com/auth/documents.readonly"],
  });

  const { docs } = configDetails;

  // Loop through the docs and fetch them
  if (docs) {
    for (const doc in docs) {
      const documentId = docs[doc].id || docs[doc];
      const data = await docToArchieML({ documentId, auth });
      // Filepath is doc
      const filePath = path.join(process.cwd(), doc);

      // Write the file
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      logger.info(chalk`{yellow.bold Saved} ${doc}`);
    }
  }

  logger.info(chalk`{green.bold ✅ Fetched all}`);
}

main().catch(console.error);

import { shortest } from "@antiwork/shortest";

// Uses baseUrl from config to determine what page to visit.
shortest("Perform a search for 'shortest'")
  .expect("The search results include a GitHub 'shortest' repo by Antiwork.");

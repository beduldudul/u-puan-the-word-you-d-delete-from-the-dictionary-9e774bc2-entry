import { mkdirSync, writeFileSync } from "node:fs";

// The word to erase from the dictionary forever: Monday.
// Delete it and every week starts on Tuesday.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Monday");

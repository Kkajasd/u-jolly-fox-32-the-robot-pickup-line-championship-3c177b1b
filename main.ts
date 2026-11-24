// The Robot Pickup Line Championship
// make.fun bounty u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b
// The line is 77 characters: short, machine-rooted (autocomplete),
// with the surprise that the machine's prediction is a name, not a word.
// Writes one original robot pickup line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I asked my autocomplete to finish this sentence, and it just typed your name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

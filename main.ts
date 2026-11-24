// One Sentence for a Traveler from 1800
// make.fun bounty: u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb
//
// Writes the single sentence to $MAKEFUN_OUTPUT_DIR/entry.txt
// (the grader's /output/entry.txt), and prints it to stdout.
// Node 22, standard library only, no network.
//
// REVISION: the draft carried only half the picture — instant letters,
// but not the other half of the thing, all knowledge at hand. The fix
// keeps ONE scene (the road, the letter, your table) and sets the books
// down beside the letter on the same table, so it stays a single picture
// instead of a list. Tightened "in the time it takes to blink" to
// "in a blink", added "one" to the road for unity, and swapped "so" for
// "where" so the letter rides the road just named. Every word still
// predates 1800: road, house, earth, letter, friend, table, blink,
// book, written, beside — a traveler of 1800 owns all of them.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Imagine one road that joins every house on earth, where a letter from a friend far away lands upon your table in a blink, and every book ever written sits open beside it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);

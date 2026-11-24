// Worst AI Advice: The 48-Hour Tight Line Open
// Writes one line of the worst possible advice an AI could give to
// $MAKEFUN_OUTPUT_DIR/entry.txt — no trailing newline, 85 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "To sleep better, simply set an alarm for every hour so your body learns to fear rest.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

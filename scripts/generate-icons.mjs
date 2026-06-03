import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = join(here, "..", "public");
const svgPath = join(publicDir, "favicon.svg");

const svg = await readFile(svgPath);

const sizes = [
  { file: "icon-192.png", size: 192, pad: 0, bg: "#0d1a3a" },
  { file: "icon-512.png", size: 512, pad: 0, bg: "#0d1a3a" },
  { file: "apple-touch-icon.png", size: 180, pad: 0, bg: "#0d1a3a" },
  // Maskable: inner safe area is ~80% of canvas, so pad the artwork in.
  { file: "icon-512-maskable.png", size: 512, pad: 64, bg: "#0d1a3a" },
];

for (const { file, size, pad, bg } of sizes) {
  const inner = size - pad * 2;
  const rendered = await sharp(svg, { density: 384 })
    .resize(inner, inner, { fit: "contain", background: bg })
    .png()
    .toBuffer();

  const out = await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: bg,
    },
  })
    .composite([{ input: rendered, top: pad, left: pad }])
    .png()
    .toBuffer();

  await writeFile(join(publicDir, file), out);
  console.log(`wrote ${file} (${size}x${size})`);
}

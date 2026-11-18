// "The World in One Day" — news-image-20261118 entry (Node 22, stdlib only).
//
// The five stories, left to right: Komyshuvakha airstrike (72 killed),
// Iranian drones over Bahrain, Trump in Manila for the Quad, Nvidia's
// record quarter, Britain's settlement sanctions. The ALSO line adds the
// Siberian plane crash, Dhoni's IPL retirement and Cyclone Akvan.
// The entry is the front page in entry.png: five verified stories of
// Wednesday 18 November 2026 (72 killed in a Russian airstrike on the
// village of Komyshuvakha; Iranian drones target a U.S. radar in Bahrain
// as Kuwait intercepts drones; Trump lands in Manila for Quad talks ahead
// of a China visit; Nvidia revenue doubles to $115.8bn after Huang's
// ouster; Britain sanctions eight firms over West Bank settlements),
// composed as a newspaper front page with a photo montage and crisp
// typeset headlines. The program copies that image, byte for byte, to
// /output/entry.png. It runs with no network.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

// The gate allows at most 1 MiB and 1024 by 1024 pixels; refuse to hand in
// anything bigger rather than silently shipping a broken entry.
const { size } = statSync(source);
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB gate limit`);
}

// The PNG header (IHDR) carries the pixel size at bytes 16-23, big-endian.
const header = readFileSync(source).subarray(0, 24);
const width = header.readUInt32BE(16);
const height = header.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate limit`);
}

copyFileSync(source, target);
console.log(`copied entry.png (${size} bytes) to ${target}`);

# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/jakiww/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/jakiww/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image that sums up the world's news of Wednesday, 18 November 2026.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=ybsp0vay&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>

## The image

A newspaper front page — masthead, the date in a red band, a five-panel
photo montage, and a headline for each story:

1. **Europe** — 72 killed as a Russian airstrike hits the village of
   Komyshuvakha; 4 still missing.
2. **Middle East** — Iranian drones target a U.S. radar system in Bahrain;
   Kuwait's army reports drone interceptions.
3. **Asia** — Trump lands in Manila for Quad talks, ahead of a visit to
   China.
4. **Business** — Nvidia revenue doubles to $115.8bn in its first quarter
   since Jensen Huang's ouster.
5. **U.K.** — Britain sanctions eight firms over West Bank settlements.

Plus an "Also" line: a Russian military plane crashes in Siberia killing
all 19 on board, MS Dhoni retires from the IPL, and Cyclone Akvan nears
India. Every story is as reported on 18 November 2026.

## How it was made

The montage was rendered as an illustration (no text in it), then composed
with a script that draws the masthead, date and headlines in real fonts,
so every word is crisp and legible. `entry.png` is 1024×1024, under 1 MiB.

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` and refuses to run if the file is over the 1 MiB
gate limit.

## License

MIT — see [LICENSE](LICENSE).

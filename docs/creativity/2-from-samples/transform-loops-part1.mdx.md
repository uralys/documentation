# (non précisé)

*Credit: [@Poldoore](https://www.youtube.com/channel/UC0sL7gqDMe_ggIzEkkdTsug) on YouTube*:

*"In Part 1 of this mini series I’m sharing 5 creative techniques to transform loops and make them sound like YOU. These tips will help you move beyond just dragging and dropping loops into your project and show you how to truly flip them into something totally different. Oh, and you won’t have to worry anymore about getting hit with copyright claims.*

00:00 // The problem
00:54 // Borrowing grooves
10:00 // Generative chopping
15:16 // Streeeeetch
19:40 // Loop collage
21:11 // Wavetable fun


<!--
import theProblemI from './the-problem-i.png';
import borrowingGroovesII from './borrowing-grooves-ii.png';
import generativeChoppingIII from './generative-chopping-iii.png';
import streeeeetchIV from './streeeeetch-iv.png';
import loopCollageV from './loop-collage-v.png';
import wavetableFunVI from './wavetable-fun-vi.png'; -->

import chapitre from './intro.png';

## 1: The problem
*00:00 → 00:54*
- **Idée clé :** Many producers use the same sample sites and drop loops in unchanged, leading to duplicate sounds and possible copyright issues. Encouragement to transform loops so they sound unique.
- **Procédé / réglages :** (non précisé)
- **Résultat :** (non précisé)
- **Notes :** Mentions Splice and that shazaming melodic loops often reveals duplicates.

<VideoPlayer videoId="vJaaOwqCkbk" overlay={chapitre}/>


## 2: Borrowing grooves
*00:54 → 10:00*
- **Idée clé :** Extract the rhythm from a drum loop, then rebuild it with your own drum sounds for a more personal groove.
- **Procédé / réglages :**
  - Right‑click audio clip → **Convert Drums to New MIDI Track**; Live maps hits to a default 606 kit; verify it aligns with the original loop.
  - Use **Velocity** MIDI effect: setting **Out Hi**/**Out Low** both to 100 makes all notes hit 100; more natural results with **Out Low ≈ 70–80**. Re‑record via MIDI routing to print adjusted velocities.
  - In the Drum Rack, **Extract Chain** to split sounds to separate tracks; rename for clarity.
  - **Kicks:** pick two from *Donut Drums 3* (main + short “ghost”); put on‑beat hits on main, in‑between on ghost; set velocities to 100 and **Copy Value to Siblings**; keep ghost slightly softer.
  - **Snare:** swap to *Interlace One* from *Donut Drums 3*; even velocities and set around 100.
  - **Hi‑hats:** load two triplet hats; on‑beat to main, in‑between to smaller hat; shorten the smaller hat and reduce embedded noise; balance levels.
- **Résultat :** Human, Dilla‑style swing using your own kit while preserving the loop’s groove.
- **Notes :** Glue bus with **Glue Compressor** (HP sidechain, slow attack, fast release, a few dB). Optionally layer the original break: **high‑pass** it and use a transient designer (e.g., **Transient Master**) with **slow attack**, then blend for live character.

<VideoPlayer videoId="vJaaOwqCkbk" overlay={chapitre}/>


## 3: Generative chopping
*10:00 → 15:16*
- **Idée clé :** Slice a melodic loop and let **Live 12**’s MIDI generative tools create patterns; tighten feel with Gate mode and vary slice divisions.
- **Procédé / réglages :**
  - Copy the sidechain compressor; drop the loop in **Simpler** → **Slice** mode (start with **½‑beat** slices); create an empty MIDI clip.
  - In **MIDI Generative Tools**, set pitch range from **C1** (first chop) to **D♯2** (highest chop); shorten to a **2‑bar** loop; press **Generate** until it feels right.
  - Change grid (e.g., **1/8 notes**) to alter quantization; set **Trigger Mode = Gate** so notes play only for note length.
  - Duplicate to **4 bars** and tweak notes for variation.
  - Try **¼‑note** slicing in Simpler to introduce more chops and textures; keep sidechain pumping.
- **Résultat :** A dynamic, chopped French‑house‑leaning loop after tweaks and added instrumentation.
- **Notes :** Tools used: Ableton **Simpler**, **Live 12** MIDI generative tools, sidechain compressor. Specific presets (non précisé).

<VideoPlayer videoId="vJaaOwqCkbk" overlay={chapitre}/>


## 4: Streeeeetch
*15:16 → 19:40*
- **Idée clé :** Turn any sample into evolving ambient pads using the free **P Stretch** (Paul’s Extreme Time Stretch) and play it via Simpler.
- **Procédé / réglages :**
  - Load sample in **P Stretch**; **Stretch Amount = 1** ≈ **24 s**; max stretches to **6 h 49 min**; set around **≈ 10** for **~4 min**.
  - Render/export the stretched audio and import into Live.
  - Drop into **Simpler** on a MIDI track; **unwarp**, **normalize**, set **very slow attack** and **very long release** for pad behavior.
  - Play on MIDI keyboard; audition **−1** and **−2 octaves** and try different sections.
- **Résultat :** Smooth, cinematic, evolving pads from an ordinary sample.
- **Notes :** Author notes Ableton’s extreme stretching sounded rough to them; P Stretch sounded “pure magic.” Other settings/presets (non précisé).

<VideoPlayer videoId="vJaaOwqCkbk" overlay={chapitre}/>


## 5: Loop collage
*19:40 → 21:11*
- **Idée clé :** Build a new groove by collaging the best bits from multiple drum loops.
- **Procédé / réglages :**
  - Import several drum loops; **chop** out kick from one, snare from another, etc.
  - In **Warp**, **tighten transients** to remove tails/reverb bleed.
  - **Sidechain** selected elements to kick/snare to make them sit in the rhythm.
  - Add a subtle **vinyl crackle** or **tape noise** layer to glue the collage.
- **Résultat :** A cohesive, unique drum loop made from disparate sources.
- **Notes :** Plugins/presets (non précisé).

<VideoPlayer videoId="vJaaOwqCkbk" overlay={chapitre}/>


## 6: Wavetable fun
*21:11 → 33:38*
- **Idée clé :** Import melodic or percussive samples into **Ableton Wavetable** and animate **Position/Warp/Fold** with envelopes/LFOs for rich textures.
- **Procédé / réglages :**
  - Insert **Wavetable** on a MIDI track; add **reverb**/**delay** on a return; **boost Wavetable output gain**.
  - Basics: default **Basic Shapes** table (sine, triangle, saw, square); morph via **Oscillator Position**; use **Warp** and **Fold** to reshape.
  - Import a **flute** hit as wavetable (textured sounds yield interesting results); try **octave down**; tweak until it varies.
  - **Mod Matrix:** map **Amp Env → Warp**; **LFO 1 → Position** (**Retrigger off**); **LFO 2 → Fold** (Random waveform). Negative modulation inverts movement.
  - **Env 3 → LFO 1 rate** (which modulates Position) for evolving motion; pitch **up an octave** if desired.
  - Use **Oscillator 2** with a **bass‑guitar** sample; both oscillators share the filter; still modulate OSC2 via Mod Matrix; blend OSC1/OSC2 to taste. Also try a **drum loop** as wavetable; for one sound, the **“modern” setting** was preferred (contexte non précisé).
- **Résultat :** A vibey, textural pluck evolving from imported trumpet/bass samples; further rich timbres from a percussive loop as wavetable.
- **Notes :** Mentions a “golden pack” made for **Zenheiser** on Splice; specific presets/modes for “modern” (non précisé).

<VideoPlayer videoId="vJaaOwqCkbk" overlay={chapitre}/>


## À retenir (TL;DR)
- **Convert Drums to New MIDI Track** to capture a loop’s groove; replace sounds, **Extract Chain** per drum, and print velocities (Velocity **Out Low ≈ 70–80**; **100/100** yields flat 100).
- Layer **main + ghost kicks**; **Copy Value to Siblings**; keep ghost quieter; bus with **Glue Compressor** (HP sidechain, slow attack, fast release).
- **Simpler Slice + Live 12 Generative Tools:** set note range (**C1–D♯2**), keep it **2 bars**, try **Gate** mode and tweak grid; vary **slice division** (½‑beat → ¼‑note).
- For evolving pads, use **P Stretch** (e.g., **Stretch ≈ 10 → ~4 min**), then in **Simpler**: **unwarp**, **normalize**, **slow attack/long release**.
- **Loop collage:** isolate best hits across loops; **tighten transients** in Warp; **sidechain** to kick/snare; add **vinyl/tape noise** for glue.
- In **Wavetable**, import textured samples (melodic or percussive); modulate **Position/Warp/Fold** (LFO retrigger **off** as needed); layer **OSC2** with a separate wavetable and blend.


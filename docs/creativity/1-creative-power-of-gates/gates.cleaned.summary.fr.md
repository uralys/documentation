# Creative Gates — Résumé chapitré (à partir du transcript)

> Résumé fidèle et synthétique du transcript fourni. Chaque chapitre indique le **point de départ** (horodatage).

---

## Chapter 1: Introduction — **0:00**
**Idée générale.** Présentation du **gate** comme outil souvent négligé pour la création. Plan de la vidéo : d’abord les principes et contrôles, puis une série d’applications créatives.

---

## Chapter 2: What is a gate? — **0:21**
**Définition & usages.**
- **Gate vs. compresseur :** le compresseur **réduit** ce qui dépasse un seuil ; le **gate** **réduit/coupe** ce qui **passe en dessous** du seuil.
- **Nettoyage vocal :** supprimer bruit de fond et respirations entre les phrases dans des prises faites en pièce non traitée (rue, clim, etc.).
- **Batterie multi-micros :** retirer les **bleeds** (ex. cymbales/snare dans le micro de kick).

**Contrôles essentiels.**
- **Threshold :** niveau à dépasser pour ouvrir le gate.
- **Floor :** niveau quand le gate est fermé (à −∞ = silence total).
- **Attack / Hold / Release :** vitesse d’ouverture, durée de maintien, retour au niveau de floor.
- **Lookahead :** ajoute un léger délai pour mieux attraper les transitoires rapides.
- **Flip :** écouter ce qui est **coupé** (partie “gated out”).
- **Return (hysteresis) :** écart entre niveau d’ouverture et de fermeture, réduit l’effet “haché”.

**Transition.** Fin de la section : passage aux usages **créatifs** des gates.

---

## Chapter 3: Bouncy pad — **3:22**
**But.** Donner du **groove** et du **mouvement** à un pad statique via **sidechain gating**.

**Setup.**
- Groove house + **pad**. Deux couches **Soundtoys Crystallizer** en **parallèle** : +1 octave et +2 octaves, **pan** L/R pour la largeur.
- Gate placé sur le pad. **Sidechain** activé ; source : **drum break** riche en transitoires (le **timbre** du break importe peu, on veut le **rythme**).

**Réglages & geste.**
- **Threshold :** détermine quels coups de batterie ouvrent le gate (plus bas = plus de coups passent).
- **Release** plus long = plus **fluide** ; **Floor** remonté = on garde un peu de corps du pad.
- A/B avec/sans gate ; puis **sidechain au kick** pour caler le mouvement.
- **Automatiser Release** pour faire **évoluer** le groove.
- **Mapper un LFO** sur Release ; **taux non entier** → **polyrhythmie** subtile.
- On peut **réarranger le break** qui pilote le gate pour varier le groove.

**Ajout de basse.**
- Basse **tenue** pour accompagner les accords ; vérifier la **bonne octave** (repérage visuel via EQ), ajuster avec le **“MIDI pigeon device”** (changement d’octave rapide).
- **Auto Filter** en mode **MS2** (type MS‑20), **Drive** pour plus de grain.
- Copier **gate modulé** et **compresseur sidechain kick** sur la basse.
- Nettoyer le **bas** du pad à l’EQ pour éviter la **boue** avec la basse.
- Écoute du **loop** complet une fois calé.

---

## Chapter 4: Stuttering synth — **12:06**
**But.** Créer un **groove séquencé/robotique**.

**Méthode.**
- Gate sur les **chords**, sidechainé par les **hi‑hats**.
- Variante propre : **dupliquer** la piste de hats, la **muter** et la renommer **“gate trigger”** ; router le sidechain du gate vers cette piste **inaudible** → le **pattern** pilote le gate sans s’entendre.
- Utiliser les **outils génératifs MIDI** de Live pour créer un **pattern** (steps/density/pattern).

**Exemples.**
- Gater le **haut** d’une **basse** sur une **boucle de hats en 1/16** → groove **robotique**.
- Outil tiers cité : **Gate Lab** (gratuit, Audiomodern) avec presets et options stéréo.

---

## Chapter 5: Textured drums — **15:10**
**But.** Apporter une **texture lo‑fi** et un **espace vivant** aux drums avec **crackle** + **reverbs** + **gates**.

**Texture “crackle” pilotée par la batterie.**
- Loop dreamy lo‑fi (sons du **Golden sample pack** créé pour **Zenheiser** / dispo sur Splice).
- Enregistrer un **field recording** de **crackle** ; gater le crackle via sidechain **kick**, puis **snare**, puis **hats**.
- **Important :** si plusieurs gates sur la même source crackle, les mettre **en parallèle** (Audio Effect Rack). En **série**, le second ne s’ouvrira pas correctement.

**Reverb modelée par gate (pré‑reverb).**
- Chaîne **dry** + chaîne **100% reverb** (Audio Effect Rack).
- **EQ** de la reverb : atténuer **~200 Hz** (muddiness), et **1–5 kHz** pour lisser (utile sur voix).
- Placer un **gate AVANT la reverb** et pousser pour obtenir un **clic très court** → change drastiquement le **caractère** de la queue.
- **Moduler Release** (LFO). Forme **Random** → variations **imprévisibles** et organiques.

**Spring reverb.**
- Essai avec **Arturia Spring Reverb** (stéréo, **100% wet** en parallèle).
- Plus le **clic** est **court**, plus la spring sonne **rebond/“boinky”**.
- Ajuster le niveau et écouter **en contexte**.

---

## Chapter 6: Classic 80’s gated reverb — **22:48**
**But.** Produire le **snare 80’s** (queue coupée net).

**Procédé.**
- Loop disco ; **Lexicon Reverb** sur le **clap**/snare 2. Réduire la largeur via **Utility**.
- Placer un **gate APRÈS la reverb** → queue **tronquée**, effet **claustro** typique.
- **Hold/Release** façonnent la **tail**.

---

## Chapter 7: Bursts of reverb — **23:45**
**But.** Obtenir des **“bouffées” de reverb rythmiques** au lieu d’un lavage continu (ex. sur un loop orgue + delay dans *Dusty Echoes*).

**Procédé.**
- Reverb en **parallèle** sur le loop, **gate AVANT** la reverb pour que **seuls les impacts forts** déclenchent la reverb.
- Résultat : reverb **rythmique**, propre et lisible dans le mix.

---

## Chapter 8: Glitchy drum fills — **24:58**
**But.** Superposer un **break vintage** pour amener un **grain organique** et des **shuffle** glitchés.

**Contexte.**
- Vibe electro‑soul : **halftime drums** + guitare, séquence **acid‑like** (modulaire), **plucks** du **Moog Matriarch**.

**Étapes.**
- Importer un **drum break** et le **pitcher** au tempo. Appliquer un **gate** sidechainé par le **kick** (puis un second pour la **snare** sur piste dupliquée).
- Troisième piste : même break en **double‑tempo**, **sans sidechain** ; **isoler** les parties **shuffle** via gate (focus sur transitoires) → **boucle percussive** glitchée.
- Réintégrer les **drums programmés** : la couche gated apporte **grain**, **shuffle** et **vie**.
- Avantage : la couche gated **s’adapte** automatiquement si vous **modifiez** les patterns MIDI de kick/snare.

**Clôture.** Fin : récapitulatif et appel à questions/astuces en commentaires.

---

## À retenir (TL;DR)
- **Deux placements clés :** *Gate avant reverb* → transforme la **matière** de la queue ; *Gate après reverb* → **snare 80’s** (queue coupée).
- **Sidechain créatif :** piloter un pad/bruit par **drums** (ou un **pattern muet**) pour générer du **groove** précis.
- **Modulation** : **Release** modulé (automation ou **LFO** non entier) = **mouvement** et **polyrhythmie** naturelles.
- **Parallèles, pas série** quand plusieurs gates pilotent **la même source** de texture (ex. crackle) pour éviter les blocages.
- **Gestion du bas** : séparer rôles **basse/pad** (EQ, filtres) pour garder un bas **propre**.

> Horodatages de départ par chapitre : 0:00, 0:21, 3:22, 12:06, 15:10, 22:48, 23:45, 24:58.

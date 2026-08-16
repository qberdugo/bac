# Passation — Partie « Forme canonique et variations » (chapitre « Équations du second degré »)

## Contexte
Ce dossier est la **première partie** du chapitre de maths « Équations du second degré » (hiérarchie du site : matière → chapitre → partie, voir `chapitres.js` à la racine). Les deux autres parties du chapitre vivent dans `../second-degre-resolution/` et `../second-degre-factorisation/`.

**Historique important** : ce cours contenait à l'origine tout le chapitre (jusqu'à la formule et au solveur). Lors de la création de la partie 2, les étapes « résoudre = intersections », « discriminant », « formule pas à pas » et « solveur » ont été **déplacées dans `../second-degre-resolution/cours.html`** (avec 4 des 5 questions du quiz) pour que cette partie colle à son titre. La question du ballon (étape 1) reste volontairement **sans réponse ici** : c'est le fil rouge du chapitre, résolue à la fin de la partie 2.

Cours interactif créé pour une élève entrant en première, bases fragiles en maths. Approche : concret d'abord (ballon de basket), concepts introduits progressivement, très graphique, tutoiement, aucun prérequis supposé (même x² est expliqué).

## Fichiers
- `cours.html` — cours complet, autonome (aucune dépendance, fonctionne hors ligne), canvas + vanilla JS.
- `maths-second-degre-fiche.pdf` — fiche de révision A4, téléchargeable.
- `fiche-source.html` — source de la fiche (HTML/CSS, mêmes variables de couleur que `assets/site.css`). C'est le fichier à éditer pour corriger la fiche.
- `fiche.png` — aperçu de la fiche affiché dans `fiche.html`, généré depuis le PDF.

### Régénérer la fiche après une modification de `fiche-source.html`
La première version de la fiche (héritée d'une session précédente) était générée avec reportlab : le dégradé de l'en-tête (bleu → violet → rose) y rendait en blocs de couleur nets au lieu d'un dégradé lisse. Solution : `fiche-source.html` + rendu via Chrome headless, qui applique le vrai `linear-gradient` CSS.

```bash
cd maths/second-degre
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --disable-gpu \
  --print-to-pdf="maths-second-degre-fiche.pdf" \
  --no-pdf-header-footer \
  "file://$(pwd)/fiche-source.html"

# régénérer l'aperçu PNG (haute résolution, ~1700x2400) depuis le PDF :
# (utiliser un dossier de sortie local : avec /tmp, qlmanage peut annoncer
#  "produced one thumbnail" sans rien écrire)
mkdir -p ../../.qlout
qlmanage -t -s 2400 -o ../../.qlout maths-second-degre-fiche.pdf
cp ../../.qlout/maths-second-degre-fiche.pdf.png fiche.png
rm -rf ../../.qlout
```

Attention au remplissage de la page A4 : le contenu doit occuper presque toute la hauteur de 297mm sans déborder sur une 2ᵈᵉ page (vérifier avec `mdls -name kMDItemNumberOfPages` après un `mdimport` pour forcer le rafraîchissement, Spotlight cache sinon l'ancienne valeur).

## Structure du cours (6 étapes)
1. Ballon de basket animé (trajectoire = parabole ; la question « où retombe-t-il ? » est posée et renvoyée à la partie 2)
2. y = x² avec curseur (deux opposés → même carré)
3. Famille y = ax² + bx + c (3 sliders, rôles de a, b, c)
4. Forme canonique y = a(x − α)² + β (sliders a, α, β ; sommet ; équivalence affichée avec la forme développée ; α = −b/2a)
5. Tableau de variations (deux tableaux a > 0 / a < 0 en HTML/CSS, slider a qui surligne le tableau correspondant ; vocabulaire croissante/décroissante, minimum/maximum)
6. Quiz (5 QCM recentrés sur a/c, forme canonique, α = −b/2a et variations) + récap en cartes + liens fiche et partie 2

## Points techniques importants (bugs déjà corrigés — ne pas réintroduire)
Le moteur de tracé (`creerPlot`, `cadreParabole`, `pasGrille`) est copié à l'identique dans les cours des parties 2 et 3 : tout correctif ici doit y être reporté (et inversement).
- **Retina/dpr** : `canvas.height = h*dpr` réécrit l'attribut `height`. La hauteur CSS est mémorisée une seule fois (`cssH`) dans `creerPlot` et jamais relue depuis l'attribut. Sinon la moitié basse des graphes est coupée sur écran Retina.
- **Cadrage adaptatif** : `cadreParabole(a, b, c, inclureZero)` garantit sommet, racines, axe horizontal (et (0,c) si demandé) visibles. Utilisé aux étapes 3 et 4 (et dans les parties 2-3). Testé sur toutes les combinaisons extrêmes des sliders.
- **Grille adaptative** : `pasGrille()` choisit un pas 1/2/5/10 selon l'étendue.
- Le ballon recalcule son cadre selon la force (le tir « fort » sortait de l'écran).
- La section « résoudre = intersections » (désormais en partie 2) utilise un cadre volontairement FIXE : pédagogique, ne pas le rendre adaptatif.

## Idées de suite possibles
- Exercices générés aléatoirement avec correction
- Version imprimable du cours

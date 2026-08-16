# Passation — Cours interactif « équations du second degré »

## Contexte
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
qlmanage -t -s 2400 -o /tmp/qlout maths-second-degre-fiche.pdf
cp /tmp/qlout/maths-second-degre-fiche.pdf.png fiche.png
```

Attention au remplissage de la page A4 : le contenu doit occuper presque toute la hauteur de 297mm sans déborder sur une 2ᵈᵉ page (vérifier avec `mdls -name kMDItemNumberOfPages` après un `mdimport` pour forcer le rafraîchissement, Spotlight cache sinon l'ancienne valeur).

## Structure du cours (9 étapes)
1. Ballon de basket animé (trajectoire = parabole, question : où retombe-t-il ?)
2. y = x² avec curseur (deux opposés → même carré)
3. Famille y = ax² + bx + c (3 sliders, rôles de a, b, c)
4. Forme canonique y = a(x − α)² + β (sliders a, α, β ; sommet ; équivalence affichée avec la forme développée ; α = −b/2a)
5. Résoudre = intersections avec l'axe horizontal (slider c, cadre volontairement FIXE pour voir la courbe bouger)
6. Discriminant Δ = b² − 4ac (badge coloré 2/1/0 solutions)
7. Formule x = (−b ± √Δ)/2a, exemple x² − x − 6 = 0 déroulé pas à pas
8. Solveur libre (inputs a, b, c → résolution détaillée + graphe)
9. Quiz (5 QCM avec explications) + récap en cartes

## Points techniques importants (bugs déjà corrigés — ne pas réintroduire)
- **Retina/dpr** : `canvas.height = h*dpr` réécrit l'attribut `height`. La hauteur CSS est mémorisée une seule fois (`cssH`) dans `creerPlot` et jamais relue depuis l'attribut. Sinon la moitié basse des graphes est coupée sur écran Retina.
- **Cadrage adaptatif** : `cadreParabole(a, b, c, inclureZero)` garantit sommet, racines, axe horizontal (et (0,c) si demandé) visibles. Utilisé aux étapes 3, 4, 6 et dans le solveur. Testé sur toutes les combinaisons extrêmes des sliders.
- **Grille adaptative** : `pasGrille()` choisit un pas 1/2/5/10 selon l'étendue.
- Étape 5 : cadre fixe assumé (pédagogique), dimensionné pour toute la course du slider.
- Le ballon recalcule son cadre selon la force (le tir « fort » sortait de l'écran).

## Idées de suite possibles
- Forme factorisée y = a(x − x₁)(x − x₂)
- Signe du trinôme / tableau de signes
- Exercices générés aléatoirement avec correction
- Version imprimable du cours

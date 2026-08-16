# Passation — Cours interactif « équations du second degré »

## Contexte
Cours interactif créé pour une élève entrant en première, bases fragiles en maths. Approche : concret d'abord (ballon de basket), concepts introduits progressivement, très graphique, tutoiement, aucun prérequis supposé (même x² est expliqué).

## Fichiers
- `cours-second-degre.html` — cours complet, autonome (aucune dépendance, fonctionne hors ligne), canvas + vanilla JS.
- `fiche-second-degre.pdf` — fiche de révision A4 (générée avec reportlab + DejaVu Sans, même code couleur que le cours).

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

# Passation — Partie « Résolution d'une équation du second degré » (chapitre « Équations du second degré »)

## Contexte
Ce dossier est la **deuxième partie** du chapitre de maths « Équations du second degré » (hiérarchie du site : matière → chapitre → partie, voir `chapitres.js` à la racine). Elle reprend le fil narratif de la partie 1 (`maths/second-degre/`) : la question « où retombe le ballon ? » posée en ouverture du chapitre est **résolue à la fin de cette partie** (étape 7). Les sections « résoudre = intersections », « discriminant », « formule pas à pas » et « solveur » ont été **déplacées ici depuis la partie 1** (qui est désormais centrée sur la forme canonique et les variations, conformément à son titre).

Même élève, même approche que la partie 1 : concret d'abord, très graphique, tutoiement, aucun prérequis au-delà de la partie 1.

## Fichiers
- `cours.html` — cours complet, autonome (aucune dépendance, fonctionne hors ligne), canvas + vanilla JS. Le moteur de tracé (`creerPlot`, `cadreParabole`, `pasGrille`) est une copie de celui de la partie 1 : les correctifs Retina/cadrage documentés dans `../second-degre/NOTES.md` s'appliquent ici aussi (ne pas les réintroduire).
- `maths-second-degre-resolution-fiche.pdf` — fiche de révision A4, téléchargeable.
- `fiche-source.html` — source de la fiche (HTML/CSS). C'est le fichier à éditer pour corriger la fiche, jamais le PDF directement.
- `fiche.png` — aperçu de la fiche affiché dans `fiche.html`, généré depuis le PDF.

### Régénérer la fiche après une modification de `fiche-source.html`
```bash
cd maths/second-degre-resolution
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --disable-gpu \
  --print-to-pdf="maths-second-degre-resolution-fiche.pdf" \
  --no-pdf-header-footer \
  "file://$(pwd)/fiche-source.html"

# aperçu PNG (dossier de sortie local : avec /tmp, qlmanage peut annoncer
# "produced one thumbnail" sans rien écrire)
mkdir -p ../../.qlout
qlmanage -t -s 2400 -o ../../.qlout maths-second-degre-resolution-fiche.pdf
cp ../../.qlout/maths-second-degre-resolution-fiche.pdf.png fiche.png
rm -rf ../../.qlout
```
La fiche doit tenir sur UNE page A4 (vérifier `strings *.pdf | grep /Count`, et `mdls -name kMDItemNumberOfPages` seulement après `mdimport`, sinon Spotlight sert une valeur en cache).

## Structure du cours (8 étapes)
1. La question en suspens (trajectoire du ballon redessinée, point d'atterrissage marqué « x = ? m »)
2. Résoudre = intersections avec l'axe horizontal (slider c, cadre volontairement FIXE — déplacé depuis la partie 1)
3. Discriminant Δ = b² − 4ac (3 sliders, badge coloré 2/1/0 solutions — déplacé)
4. Formule x = (−b ± √Δ)/2a, exemple x² − x − 6 = 0 déroulé pas à pas (déplacé)
5. Cas rapides : b = 0 (isoler x², ±) et c = 0 (facteur commun, produit nul — sème l'idée pour la partie 3) ; x² = négatif → aucune solution
6. Solveur libre (inputs a, b, c → résolution détaillée + graphe — déplacé)
7. Le grand final : résolution pas à pas de −0,05x² + 0,9x + 2 = 0 → x = 20 et x = −2, avec interprétation (−2 rejeté car derrière la joueuse — réflexe « la solution a-t-elle un sens ? »)
8. Quiz (5 QCM, dont 4 déplacés depuis la partie 1) + récap en cartes + lien vers la partie 3

## Idées de suite possibles
- Exercices générés aléatoirement avec correction
- Équations se ramenant au second degré (bicarrées, quotients)

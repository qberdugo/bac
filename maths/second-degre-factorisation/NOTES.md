# Passation — Partie « Factorisation et signe d'un trinôme » (chapitre « Équations du second degré »)

## Contexte
Ce dossier est la **troisième et dernière partie** du chapitre de maths « Équations du second degré » (hiérarchie du site : matière → chapitre → partie, voir `chapitres.js` à la racine). Contenu entièrement nouveau (rien n'a été déplacé depuis les parties 1-2), qui s'appuie explicitement sur elles : la « règle du produit nul » a été semée dans le cas rapide c = 0 de la partie 2, l'exemple x² − x − 6 (racines −2 et 3) est réutilisé pour l'inéquation, et le récap clôt le chapitre avec « les 3 écritures » (développée / canonique / factorisée).

Même élève, même approche : concret d'abord, très graphique, tutoiement.

## Fichiers
- `cours.html` — cours complet, autonome (canvas + vanilla JS). Moteur de tracé copié des parties 1-2 (correctifs Retina/cadrage : voir `../second-degre/NOTES.md`, ne pas les réintroduire), avec en plus `plot.ombrerSigne(f)` : bandes verticales semi-transparentes vertes (y > 0) / rouges (y < 0) entre la courbe et l'axe, utilisées aux étapes 4 et 6.
- `maths-second-degre-factorisation-fiche.pdf` — fiche A4 téléchargeable.
- `fiche-source.html` — source de la fiche (à éditer, jamais le PDF directement).
- `fiche.png` — aperçu affiché dans `fiche.html`, généré depuis le PDF.

### Régénérer la fiche après une modification de `fiche-source.html`
```bash
cd maths/second-degre-factorisation
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --disable-gpu \
  --print-to-pdf="maths-second-degre-factorisation-fiche.pdf" \
  --no-pdf-header-footer \
  "file://$(pwd)/fiche-source.html"

mkdir -p ../../.qlout
qlmanage -t -s 2400 -o ../../.qlout maths-second-degre-factorisation-fiche.pdf
cp ../../.qlout/maths-second-degre-factorisation-fiche.pdf.png fiche.png
rm -rf ../../.qlout
```
Une seule page A4 (vérifier `strings *.pdf | grep /Count`). La fiche a 8 boîtes : les paddings sont déjà resserrés (`.contenu` 7mm, corps 13,5px) — si tu ajoutes du contenu, vérifie qu'elle ne déborde pas sur une 2ᵉ page.

## Structure du cours (7 étapes)
1. La forme factorisée y = a(x − x₁)(x − x₂) (sliders a, x₁, x₂ ; forme développée équivalente affichée ; cas racine double détecté ; piège des signes)
2. La règle du produit nul (statique : règle + exemple (x − 2)(x + 5) = 0 ; renvoi au cas rapide c = 0 de la partie 2)
3. Factoriser un trinôme : méthode Δ → racines → a(x − x₁)(x − x₂), exemple 2x² − 2x − 12 = 2(x + 2)(x − 3), puis « factoriseur » interactif (inputs a, b, c ; gère Δ > 0 / Δ = 0 → a(x − x₀)² / Δ < 0 → impossible)
4. Le signe du trinôme (sliders a, x₁, x₂ ; zones vert/rouge via ombrerSigne ; symboles +/− écrits dans chaque zone le long de l'axe ; règle d'or « signe de a à l'extérieur »)
5. Le tableau de signes (deux tableaux HTML a > 0 / a < 0, mêmes styles .tabvar que les variations de la partie 1, slider qui surligne le bon tableau ; cas Δ = 0 et Δ < 0 en encart)
6. Application : inéquation x² − x − 6 ≤ 0 déroulée pas à pas (étapes cliquables) → S = [−2 ; 3], intervalle souligné en vert sur le graphe ; remarque « ≥ 0 » → extérieur
7. Quiz (5 QCM) + récap en cartes (dont « les 3 écritures ») + retour accueil

## Points techniques
- Étape 4 : si x₁ ≈ x₂ (racine double), le symbole du signe « entre les racines » n'est pas affiché et le commentaire bascule sur le cas Δ = 0.
- Les sliders x₁/x₂ de l'étape 4 peuvent être croisés (x₁ > x₂) : les valeurs sont réordonnées avant calcul.

## Idées de suite possibles
- Exercices générés aléatoirement (équations, factorisations, inéquations) avec correction
- Somme et produit des racines (x₁ + x₂ = −b/a, x₁x₂ = c/a)

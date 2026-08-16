# Mes révisions

Site statique de révisions, organisé en 3 niveaux : **matière** (ex. Mathématiques) → **chapitre** (ex. Équations du second degré) → **partie** (ex. Forme canonique et variations). Chaque partie a son **cours interactif** (HTML autonome, canvas + JS vanilla, aucune dépendance) et sa **fiche de révision** consultable en ligne et téléchargeable en PDF.

Hébergé sur GitHub Pages. Aucun build : ce qui est dans le repo est servi tel quel.

## Structure

```
index.html              Accueil (matières → chapitres → parties, généré depuis chapitres.js)
chapitres.js            Données : matières, chapitres et parties affichés à l'accueil
assets/site.css         Style commun (accueil + pages fiche)
maths/                  Chapitre « Équations du second degré », une partie par dossier :
  second-degre/               Partie 1 « Forme canonique et variations »
  second-degre-resolution/    Partie 2 « Résolution d'une équation du second degré »
  second-degre-factorisation/ Partie 3 « Factorisation et signe d'un trinôme »
```

Chaque dossier de partie contient les mêmes fichiers :

```
cours.html            Cours interactif (autonome, fonctionne hors ligne)
fiche.html            Page qui affiche la fiche + boutons de téléchargement
fiche.png             Aperçu image de la fiche (affiché dans fiche.html)
matiere-partie-fiche.pdf   Fiche A4 téléchargeable (nom explicite)
fiche-source.html     Source HTML de la fiche (à éditer, puis régénérer le PDF — voir NOTES.md)
NOTES.md              Notes techniques de la partie (bugs corrigés, régénération de la fiche, pistes de suite)
```

## Ajouter une partie à un chapitre existant

1. Créer un dossier `matiere/nom-de-la-partie/` avec : `cours.html`, `fiche.html`, `fiche.png` et le PDF de la fiche nommé explicitement `matiere-partie-fiche.pdf` (s'inspirer de `maths/second-degre/`).
2. Ajouter l'entrée correspondante dans le tableau `parties` du chapitre, dans `chapitres.js`.
3. Commit + push : le site se met à jour tout seul.

## Ajouter un chapitre ou une matière

- Nouveau chapitre : ajouter `{ titre, emoji, parties: [...] }` dans le tableau `chapitres` de la matière (`chapitres.js`).
- Nouvelle matière : ajouter un objet dans `MATIERES` (`chapitres.js`), avec sa `couleur` de badge et la couleur de `texte` lisible dessus.

## Tester en local

```
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

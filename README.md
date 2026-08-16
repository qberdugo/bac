# Mes révisions

Site statique de révisions : pour chaque chapitre, un **cours interactif** (HTML autonome, canvas + JS vanilla, aucune dépendance) et une **fiche de révision** consultable en ligne et téléchargeable en PDF.

Hébergé sur GitHub Pages. Aucun build : ce qui est dans le repo est servi tel quel.

## Structure

```
index.html              Accueil (liste des matières/chapitres, générée depuis chapitres.js)
chapitres.js            Données : matières et chapitres affichés à l'accueil
assets/site.css         Style commun (accueil + pages fiche)
maths/
  second-degre/
    cours.html          Cours interactif (autonome, fonctionne hors ligne)
    fiche.html          Page qui affiche la fiche + boutons de téléchargement
    fiche.png           Aperçu image de la fiche (affiché dans fiche.html)
    fiche.pdf           Fiche A4 téléchargeable
    NOTES.md            Notes techniques du chapitre (bugs corrigés, pistes de suite)
```

## Ajouter un chapitre

1. Créer un dossier `matiere/nom-du-chapitre/` avec 4 fichiers : `cours.html`, `fiche.html`, `fiche.png`, `fiche.pdf` (s'inspirer de `maths/second-degre/`).
2. Ajouter l'entrée correspondante dans `chapitres.js`.
3. Commit + push : le site se met à jour tout seul.

Pour une nouvelle matière, ajouter un objet dans `MATIERES` (`chapitres.js`).

## Tester en local

```
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

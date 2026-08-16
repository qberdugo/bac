/*
 * Liste des matières et chapitres affichés sur la page d'accueil.
 *
 * Pour ajouter un chapitre :
 *  1. Crée un dossier (ex. maths/derivees/) contenant :
 *       cours.html              — le cours interactif
 *       fiche.html              — la page qui affiche la fiche
 *       fiche.png               — l'aperçu de la fiche (image)
 *       matiere-chapitre-fiche.pdf — la fiche téléchargeable (nom explicite,
 *                                    ex. maths-second-degre-fiche.pdf)
 *  2. Ajoute une entrée dans le tableau "chapitres" de la matière ci-dessous,
 *     avec le champ "pdf" qui donne le nom exact de ce fichier PDF.
 * Pour ajouter une matière, ajoute un nouvel objet dans MATIERES.
 */
const MATIERES = [
  {
    nom: "Mathématiques",
    emoji: "📐",
    couleur: "#4361ee",
    chapitres: [
      {
        titre: "Les équations du second degré",
        emoji: "🏀",
        description:
          "Paraboles, forme canonique, discriminant et la fameuse formule — en partant d'un ballon de basket. Curseurs, solveur et quiz inclus.",
        dossier: "maths/second-degre",
        pdf: "maths-second-degre-fiche.pdf",
      },
    ],
  },
];

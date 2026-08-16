/*
 * Données de la page d'accueil — hiérarchie à 3 niveaux :
 *
 *   MATIERES (matière) → chapitres (chapitre) → parties (partie)
 *
 *   - matière  : ex. "Mathématiques" — badge coloré en tête de section.
 *   - chapitre : ex. "Équations du second degré" — un titre qui regroupe
 *                plusieurs parties (pas de contenu propre).
 *   - partie   : ex. "Forme canonique et variations" — une carte à l'accueil,
 *                avec SON cours interactif, SA fiche et SON dossier.
 *
 * Pour ajouter une PARTIE à un chapitre existant :
 *  1. Crée un dossier (ex. maths/second-degre-discriminant/) contenant :
 *       cours.html              — le cours interactif
 *       fiche.html              — la page qui affiche la fiche
 *       fiche.png               — l'aperçu de la fiche (image)
 *       matiere-partie-fiche.pdf — la fiche téléchargeable (nom explicite,
 *                                  ex. maths-second-degre-fiche.pdf)
 *  2. Ajoute une entrée dans le tableau "parties" du chapitre ci-dessous,
 *     avec le champ "pdf" qui donne le nom exact de ce fichier PDF.
 * Pour ajouter un CHAPITRE, ajoute dans "chapitres" de la matière un objet :
 *   { titre, emoji, parties: [ ... ] }  (emoji distinct de celui de la matière)
 * Pour ajouter une MATIÈRE, ajoute un nouvel objet dans MATIERES avec :
 *   - couleur : la couleur du code couleur par matière (ex. jaune pour maths)
 *   - texte   : la couleur du texte du badge, pour rester lisible sur "couleur"
 *               (mettre une couleur sombre si "couleur" est claire, sinon "#fff")
 */
const MATIERES = [
  {
    nom: "Mathématiques",
    emoji: "📐",
    couleur: "#FFC107",
    texte: "#22223b",
    chapitres: [
      {
        titre: "Équations du second degré",
        emoji: "🧮",
        parties: [
          {
            titre: "Forme canonique et variations",
            emoji: "🏀",
            description:
              "Lire une parabole : la recette a, b, c, le sommet avec la forme canonique, et le tableau de variations — en partant d'un ballon de basket.",
            dossier: "maths/second-degre",
            pdf: "maths-second-degre-fiche.pdf",
          },
          {
            titre: "Résolution d'une équation du second degré",
            emoji: "🎯",
            description:
              "Le discriminant Δ, la fameuse formule et les cas rapides — avec un solveur pas à pas. Et enfin la réponse : où retombe le ballon ?",
            dossier: "maths/second-degre-resolution",
            pdf: "maths-second-degre-resolution-fiche.pdf",
          },
          {
            titre: "Factorisation et signe d'un trinôme",
            emoji: "🚦",
            description:
              "La forme factorisée, la règle du produit nul, le signe du trinôme et le tableau de signes — jusqu'à ta première inéquation.",
            dossier: "maths/second-degre-factorisation",
            pdf: "maths-second-degre-factorisation-fiche.pdf",
          },
        ],
      },
    ],
  },
];

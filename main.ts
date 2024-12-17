// Fonction pour remplacer les points-virgules par des virgules
async function convertCsvDelimiter(inputFile: string, outputFile: string) {
    try {
        // Lecture du fichier CSV d'entrée
        const csvContent = await Deno.readTextFile(inputFile);

        // Remplacement des points-virgules par des virgules
        const newCsvContent = csvContent.replace(/;/g, ',');

        // Écriture dans le nouveau fichier
        await Deno.writeTextFile(outputFile, newCsvContent);

        console.log(`Conversion terminée ! Le fichier ${outputFile} a été créé.`);
    } catch (error) {
        console.error("Erreur lors de la conversion : ", error);
    }
}

// Appel de la fonction avec des fichiers d'exemple
const inputCsv = "input.csv";
const outputCsv = "output.csv";
convertCsvDelimiter(inputCsv, outputCsv);

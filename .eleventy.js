// Import fast-glob package
const fg = require('fast-glob');

// Executer la recherche d'images dans /uplaods
const galleryImages = fg.sync(['src/uploads/*.jpg']);

module.exports = function (eleventyConfig) {

    // Créer une collection d'images
    eleventyConfig.addCollection('uploads', function(collection) {
      return galleryImages;
    });
    
    // Ce dossier est cloné lors du build
    eleventyConfig.addPassthroughCopy("./src/uploads");
    eleventyConfig.addPassthroughCopy("./src/css");
  
    return { 
      dir: {
          // Va chercher les fichiers à générer dans src
            input: "src",
          // Génère les fichiers html dans le dossier public
            output: "public"
      }
    }
  };
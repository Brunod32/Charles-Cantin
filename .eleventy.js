module.exports = function(eleventyConfig) {
    
    // Ce dossier est cloné lors du build
    eleventyConfig.addPassthroughCopy("./src/img");
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
module.exports = function (grunt) {
  grunt.initConfig({
    zip: {
      fxhash: {
        cwd: "dist/",
        src: ["dist/index.html", "dist/index.js", "dist/style.css"],
        dest: "upload.zip",
      },
    },
  });

  grunt.loadNpmTasks("grunt-zip");
};

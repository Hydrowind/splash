/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require('./src/scss/prism-evening-light.css');

exports.onClientEntry = () => {
    const pathFonts = [
        `https://fonts.googleapis.com/css?family=Poppins`,          // Poppins
        `https://fonts.googleapis.com/css?family=Roboto+Mono`,      // Roboto Mono
        `https://fonts.googleapis.com/icon?family=Material+Icons`,  // Material Icons
    ]

    pathFonts.forEach(path => {
        const link = document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute(`href`, path)
        document.head.appendChild(link)
    });
}
import Typography from "typography";

export default new Typography({
  googleFonts: [
    { name: "Open Sans Condensed", styles: ["700", "800"] },
    { name: "Spectral", styles: ["400", "400i", "700"] }
  ],
  headerFontFamily: [
    "Open Sans Condensed",
    "Century Gothic",
    "CenturyGothic",
    "URW Gothic L",
    "Avant Garde",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Spectral", "Georgia", "serif"],
  scaleRatio: 2.25,
  baseLineHeight: 1.1
});

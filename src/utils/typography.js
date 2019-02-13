import Typography from "typography";

export default new Typography({
  googleFonts: [
    { name: "Muli", styles: ["700"] },
    { name: "Spectral", styles: ["400", "400i", "700"] }
  ],
  headerFontFamily: [
    "Muli",
    "Century Gothic",
    "CenturyGothic",
    "URW Gothic L",
    "Avant Garde",
    "sans-serif"
  ],
  bodyFontFamily: ["Spectral", "Georgia", "serif"],
  scaleRatio: 2.25,
  baseLineHeight: 1.1
});

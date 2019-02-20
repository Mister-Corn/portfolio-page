import Typography from "typography";

export default new Typography({
  googleFonts: [
    { name: "Muli", styles: ["300", "900"] },
    { name: "Roboto", styles: ["400", "400i"] }
  ],
  headerFontFamily: [
    "Century Gothic",
    "CenturyGothic",
    "Muli",
    "URW Gothic L",
    "Avant Garde",
    "Arial",
    "sans-serif"
  ],
  headerWeight: 900,
  bodyFontFamily: ["Roboto", "Arial", "sans-serif"],
  scaleRatio: 2.25,
  baseLineHeight: 1.1
});

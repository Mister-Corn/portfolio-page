import Typography from "typography";

export default new Typography({
  googleFonts: [
    { name: "Open Sans Condensed", styles: ["700", "800"] },
    { name: "Gentium Basic", styles: ["400", "400i"] }
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
  bodyFontFamily: ["Gentium Basic", "Georgia", "serif"],
  scaleRatio: 2.25,
  baseLineHeight: 1.1
});

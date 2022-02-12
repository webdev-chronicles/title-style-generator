'use strict';

const title = document.getElementById('the-title');
const changeButton = document.getElementById('change-style');
const removeButton = document.getElementById('clear-style');
const ghostParagrahp = document.getElementById('ghost-paragrahp');

const colors = ["AliceBlue","Aqua","Aquamarine","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","ForestGreen","Fuchsia","Gainsboro","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","Yellow","YellowGreen"];

const fontWeight = [100,200,300,400,500,600,700,800,900];

const fontDecoration = ['none','underline','overline','line-through','blink'];

const fontSize = ['2rem','2.5rem','3rem','3.5rem','4rem','4.5rem','5rem','5.5rem','6rem','6.5rem',];

const fontTransform = ['uppercase','lowercase','capitalize','none'];

const fontFamily = [`'IBM Plex Sans Thai Looped', sans-serif`,`'Roboto', sans-serif`,`'Montserrat', sans-serif`,`'Merriweather', serif`,`'Source Serif Pro', serif`,`'Spectral', serif`,`'DM Mono', monospace`,`'Space Mono', monospace`,`'Cormorant Garamond', serif`,`'Kalam', cursive`];

const myStyles = {
    myColor: colors,
    myFontWeight: fontWeight,
    myFontDecoration: fontDecoration,
    myFontSize: fontSize,
    myFontTransform: fontTransform,
    myFontFamily: fontFamily
}

function getStyle(property){
    let style = property[Math.floor(Math.random() * property.length)];
    return style;
}

function applyStyles(){
    title.style.color = getStyle(colors);
    title.style.fontWeight = getStyle(fontWeight);
    title.style.textDecoration = getStyle(fontDecoration);
    title.style.fontSize = getStyle(fontSize);
    title.style.textTransform = getStyle(fontTransform);
    title.style.fontFamily = getStyle(fontFamily);
}

function removeStyles(){
    title.removeAttribute('style');
}

changeButton.addEventListener('click', applyStyles);
removeButton.addEventListener('click', removeStyles);



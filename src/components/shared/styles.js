const theme = 'dark';
// const theme = 'light';
export const lightTheme = theme === 'light';

export const color1 = lightTheme ? 'white' : '#061a44'; // white / dark blue
export const color2 = lightTheme ? 'white' : '#010e2c'; // white / very dark blue
export const color3 = lightTheme ? '#005ac9' : 'cyan'; // softish blue / cyan

export const textHover = lightTheme ? 'color: blue' : 'text-shadow: 0 0 10px cyan';

if (lightTheme) {
  document.body.style.background = '#e1eaee';
  document.body.style.color = '#061a44';
}

export const backgroundColor1 = `background-color: ${ color1 }`;
export const backgroundColor2 = `background-color: ${ color2 };`;
export const backgroundColor3 = `background-color: ${ color3 };`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${ lightTheme ? '#a9b6ff' : '#387679' }`;
export const cyanBoxShadow = `box-shadow: 0px 0px 4px 2px ${ color3 }`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeL = 'font-size: 2em';
export const fontSizeM = 'font-size: 1.5em;';
export const fontSizeS = 'font-size: 1.0em';
export const fontSizeXS = 'font-size: .75em';

export const textAlignCenter = 'text-align: center';
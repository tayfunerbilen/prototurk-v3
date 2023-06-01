export function getContrastColor(hexColor) {
  if (hexColor.indexOf('#') === 0) {
    hexColor = hexColor.slice(1);
  }
  if (hexColor.length === 3) {
    hexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2];
  }
  if (hexColor.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  var r = parseInt(hexColor.slice(0, 2), 16),
    g = parseInt(hexColor.slice(2, 4), 16),
    b = parseInt(hexColor.slice(4, 6), 16);
  // YIQ equation from http://24ways.org/2010/calculating-color-contrast
  var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  if (yiq >= 128) {
    return 'black'; // dark colors - black font
  } else {
    return 'white'; // bright colors - white font
  }
}

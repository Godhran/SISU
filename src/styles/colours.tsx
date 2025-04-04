export const Colours = {
  light: "#fbfbfb",
  dark: "#554d56",
  blocked: "#ff7531",
  completed: "#f3f859",
  todo: "#c3c0c3",
  inProgress: "#7bc9ff",
};

export const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )})`
    : null;
};

export const rgbToHex = (r: number, g: number, b: number) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const componentToHex = (value: number) => {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

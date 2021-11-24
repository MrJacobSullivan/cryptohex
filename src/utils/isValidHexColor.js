export const isValidHexColor = (hex) => {
  return hex.match(/^(?:[0-9a-fA-F]{3}){2}$/i);
};

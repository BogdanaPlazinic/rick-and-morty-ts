export const safelyParseJSON = (json: string) => {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.error("An error has occurred while parsing JSON ", error);
    return undefined;
  }
};

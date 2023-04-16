export const covertEmoji = (before: string) => {
  return `${before.replace("U+", "&#")};`;
};

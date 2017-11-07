/**
 * @param min - min value
 * @param max - max value
 * @return random Int
 */
export const getRandomInt = (min, mix) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param unicode <String> - text string and returs one of it.
 * @return random character from unicode
 */
export const randomCharacter = (unicode) => {
  return unicode[Math.floor(Math.random() * unicode.length)];
}

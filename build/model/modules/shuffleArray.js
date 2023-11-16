/**
 * 배열을 무작위로 섞어 반환합니다.
 * @param {Array} array - 섞을 배열입니다.
 * @returns {Array} 섞인 배열입니다.
 */
export default function(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
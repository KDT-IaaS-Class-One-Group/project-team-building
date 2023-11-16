import shuffleArray from "./shuffleArray.js";
/**
 * 배열을 받아서 4개의 팀으로 나누는 함수입니다.
 * @param {Array} array - 팀으로 나눌 배열입니다.
 * @param {boolean} [addLeader=true] - 각 팀의 첫 번째 원소에 '팀장-'을 추가할지 여부입니다. 기본값은 true입니다.
 * @returns {Array} - 4개의 팀으로 나눈 결과를 반환합니다.
 * @requires ./shuffleArray.js
 */
export default function(array, addLeader = true) {
  const shuffled = shuffleArray(array);
  const teams = [
    shuffled.slice(0, 4),
    shuffled.slice(4, 8),
    shuffled.slice(8, 12),
    shuffled.slice(12)
  ];

  // 각 팀의 첫 번째 원소에 '팀장-' 추가
  if ((addLeader)) {
    teams.forEach(team => {
      if (team.length > 0) {
        team[0] = '팀장-' + team[0];
      }
    });
  }

  return teams;
}
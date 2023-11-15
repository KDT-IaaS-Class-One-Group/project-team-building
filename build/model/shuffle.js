const studentList = [];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 배열 셔플
const shuffledArray = shuffleArray(studentList);
console.log(shuffledArray);

function createTeams(array) {
  const shuffled = shuffleArray(array);
  const teams = [
    shuffled.slice(0, 4),
    shuffled.slice(4, 8),
    shuffled.slice(8, 12),
    shuffled.slice(12)
  ];

  // 각 팀의 첫 번째 원소에 '팀장-' 추가
  teams.forEach(team => {
    if (team.length > 0) {
      team[0] = '팀장-' + team[0];
    }
  });

  return teams;
}
// 팀 생성 및 출력
const teams = createTeams(shuffledArray);
console.log(teams);

// function generateShuffledArrays(array, times) {
//   const result = [];
//   for (let i = 0; i < times; i++) {
//     const shuffledArray = shuffleArray([...array]);
//     result.push(shuffledArray);
//   }
//   return result;
// }

// const shuffledArrays = generateShuffledArrays(studentList, 100);
// console.log(shuffledArrays);
// import fs from 'fs';

// fs.writeFileSync('shuffledArrays.json', JSON.stringify(shuffledArrays, null, 2), (err) => {
//   if (err) throw err;
//   console.log('Data written to file');
// });

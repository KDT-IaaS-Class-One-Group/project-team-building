import fs from 'fs';

const studentList = [
  "이상해씨",
  "이상해풀",
  "이상해꽃",
  "파이리",
  "리자드",
  "리자몽",
  "꼬부기",
  "어니부기",
  "거북왕",
  "캐터피",
  "단데기",
  "버터플",
  "뿔충이",
  "딱충이",
  "독침붕",
  "구구",
  "피죤",
];


fs.writeFile('studentList.json', JSON.stringify(studentList, null, 2), (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
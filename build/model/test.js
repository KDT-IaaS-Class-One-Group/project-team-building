import fs from 'fs';
// data 디렉토리에 있는 studentList.json 파일을 읽어서 studentList 변수에 저장해줘
/**
 * 해당 함수는 JSON 파일을 읽어서 파싱한 후 반환합니다.
 * fs.readFileSync() 메소드를 사용하므로 fs 모듈을 import 해야 합니다.
 * @param {string} path - 경로를 입력해주세요.
 * @returns {object} - json에서 파싱된 객체가 리턴됩니다.
 */
function readAndParseJson(path) {
  const jsonData = fs.readFileSync(path, 'utf8');
  const parsedData = JSON.parse(jsonData);
  return parsedData;
}

const studentList = readAndParseJson('data/studentList.json');
console.log(studentList.length);

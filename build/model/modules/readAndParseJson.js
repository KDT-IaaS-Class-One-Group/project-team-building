import fs from 'fs';
/**
 * 지정된 경로에서 JSON 파일을 읽고 파싱하여 반환합니다.
 * @param {string} path - JSON 파일 경로
 * @returns {Object} - 파싱된 JSON 데이터
 * @requires fs
 */
export default function(path) {
  const jsonData = fs.readFileSync(path, 'utf8');
  const parsedData = JSON.parse(jsonData);
  return parsedData;
}

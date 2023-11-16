import fs from 'fs';
import path from 'path';

// JSON 데이터 로드
const data = JSON.parse(fs.readFileSync('../model/shuffledArrays.json', 'utf8'));

// SQL 파일을 쓰기 위한 스트림 생성
const writeStream = fs.createWriteStream('shuffledArrays.sql');

// 각 JSON 객체를 SQL INSERT 문으로 변환
data.forEach((item, index) => {
  const values = data.map(item => 
    '(' + item.map(value => `'${value}'`).join(', ') + ')'
  ).join(',\n');
  const sql = `INSERT INTO tableName (column1, column2, ...) VALUES\n${values};\n`;
  writeStream.write(sql);
});

writeStream.end();
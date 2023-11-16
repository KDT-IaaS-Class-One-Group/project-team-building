/**
 * 이 모듈은 팀 빌딩 프로젝트에서 학생 목록을 셔플하고, 팀을 생성하는 역할을 합니다.
 * shuffleArray, readAndParseJson, createTeams 모듈에 의존합니다.
 *
 * @module shuffle
 * @requires fs
 * @requires path
 * @requires ./modules/shuffleArray.js
 * @requires ./modules/readAndParseJson.js
 * @requires ./modules/createTeams.js
 */

// built-in module
import fs, { readFileSync } from 'fs';
import path from 'path';

// custom module
import shuffleArray from './modules/shuffleArray.js';
import readAndParseJson from './modules/readAndParseJson.js';
import createTeams from './modules/createTeams.js';

/**
 * 학생 목록을 셔플하고, 팀을 생성합니다.
 *
 * @type {Array}
 * @exports teams
 */
const studentList = readAndParseJson('data/studentList.json');
const shuffledArray = shuffleArray(studentList);
const teams = createTeams(shuffledArray, true);

console.log(studentList.length); // readAndParseJson 함수가 반환한 배열의 길이
console.log(shuffledArray); // shuffleArray 함수가 반환한 배열
console.log(shuffledArray.length); // shuffleArray 함수가 반환한 배열의 길이
console.log(teams); // createTeams 함수가 반환한 배열

export default teams; // teams 배열을 내보냅니다.

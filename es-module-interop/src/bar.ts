import zoo from './zoo';
import { default as zoo2 } from './zoo';
import def from './def';
import moment from 'moment'; // 3rd party example
import path from 'path'; // built-in example


console.log(zoo());
console.log(zoo2());

console.log(moment());

console.log(def());
const mydir = path.dirname(__filename);

/**
 * @link https://www.typescriptlang.org/tsconfig#esModuleInterop
 * @link https://www.typescriptlang.org/tsconfig#allowSyntheticDefaultImports
 */
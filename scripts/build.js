import fs from 'fs'
import { promisify } from 'util'
import pkg from '../package.json'

const writeFile = promisify(fs.writeFile)

async function main() {
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.nyc;
  delete pkg.babel;
  delete pkg.private;
  pkg.bin = { "swagger2server" : "./bin/swagger2server.js" },
  await Promise.all([
    writeFile('dist/package.json', JSON.stringify(pkg, undefined, 2)),
  ]);
}

main();

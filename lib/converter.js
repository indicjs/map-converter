import fs from 'fs';

export function getJSONMap (inmap) {
  try {
    var data = fs.readFileSync(inmap, {encoding: 'utf-8'});
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log("No such file: " + inmap);
    } else {
      throw err;
    }
  }
  return transformToMap(data);
}

function transformToMap(text) {
  let JSONMap = {};
  let lines = text.split('\n');
  for (let line of lines) {
    line = line.trim();
    if (line.startsWith("#")) {
      continue;
    } else if (line == "") {
      continue;
    } else if (line.includes("=")) {
      let equation = line.split("=");
      JSONMap[equation[0]] = equation[1];
    }
  }
  return JSONMap;
}

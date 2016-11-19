import fs from 'fs';

export function getJSONMap (inmap) {
  if (inmap === undefined || inmap === "") {
    throw "Filename not given to load JSON from"
  }
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
  let JSONMap = {"map":{}};
  let lines = text.split('\n');
  for (let line of lines) {
    line = line.trim();
    if (line.startsWith("#")) {
      continue;
    } else if (line == "") {
      continue;
    } else if (line.includes("=")) {
      let equation = line.split("=");
      let lhs = equation[0].trim();
      let rhs = equation[1].trim();
      JSONMap["map"][lhs] = rhs;
    }
  }
  return JSONMap;
}

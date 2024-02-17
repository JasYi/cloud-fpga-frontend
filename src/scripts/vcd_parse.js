export default function VCDParse(text) {
  // console.log(text);
  let keys = Object.create(null);
  let timescale = "";
  const sections = text.split("$end");
  const valChanges = Object.create(null);

  for (let elem in sections) {
    sections[elem] = sections[elem].trim();
    // console.log(sections[elem]);
    // grabbing timescale
    if (sections[elem].includes("$timescale")) {
      timescale = sections[elem].substring(12, sections[elem].length);
      // console.log("timescale: " + timescale);
    }
    // grabbing the wire names and symbols
    else if (sections[elem].includes("$var")) {
      const subElems = sections[elem].split(" ");
      let symbol = subElems[3];
      let wireName = subElems[4];
      keys[symbol] = wireName;
      // console.log("symbol: " + symbol + ", wireName: " + wireName);
    }
    // getting the values
    else if (sections[elem][0] == "#") {
      let subElems = sections[elem].split(/[ \n]/);
      let currTime = "";
      let startFlag = false;
      // console.log("sub elements: " + subElems);
      for (let i in subElems) {
        subElems[i] = subElems[i].trim();
        // console.log(subElems[i]);
        let validNums = "1234567890z";
        // if it is a timestamp
        if (subElems[i][0] == "#") {
          currTime = subElems[i].substring(1, subElems[i].length);
          // whether you're running the startup (adding the code + the values) or not
          if (currTime == "0") {
            startFlag = true;
          } else {
            startFlag = false;
          }
          // console.log("time: " + currTime);
        }
        // if it is a value
        else if (validNums.includes(subElems[i][0])) {
          // if in startup/setup stage
          let value = subElems[i].substring(0, subElems[i].length - 1);
          if (value == "z") value = -1;
          let code = subElems[i][subElems[i].length - 1];
          // console.log("value: " + value + ", code: " + code);
          if (startFlag) {
            valChanges[code] = [[value, currTime]];
          } else {
            valChanges[code].push([value, currTime]);
          }
        }
        // console.log(valChanges);
      }
    }
  }

  const temp = sections[sections.length - 1].split(/[ \n]/);
  const endTime = temp[temp.length - 1].trim().substring(1);
  // console.log("endtime: " + endTime);

  // console.log(endTime);

  // sending back the dict with the changes, the end time, and timescale
  return [valChanges, endTime, timescale, keys];
}

export default function VCDParse(text) {
  console.log(text);
  let keys = Object.create(null);
  let timescale = "";
  const sections = text.split("$end");
  let dumpFlag = false;
  const valMatrix = [];

  for (let elem in sections) {
    sections[elem] = sections[elem].trim();
    console.log(sections[elem]);
    // into the dump section
    if (dumpFlag) {
      const subElems = sections[elem].split(" ");
    }
    // grabbing timescale
    else if (sections[elem].includes("$timescale")) {
      timescale = sections[elem].substring(11, sections[elem].length - 1);
      console.log("timescale: " + timescale);
    }
    // grabbing the wire names and symbols
    else if (sections[elem].includes("$var")) {
      const subElems = sections[elem].split(" ");
      let symbol = subElems[3];
      let wireName = subElems[4];
      keys[symbol] = wireName;
      console.log("symbol: " + symbol + ", wireName: " + wireName);
    }
    // setting the flag
    else if (sections[elem].includes("$dumpvars")) {
      dumpFlag = true;
      console.log("dump flag");
    }
  }
}

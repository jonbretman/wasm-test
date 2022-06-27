// Go's wasm_exec.js seems to need crypto to be global...
globalThis.crypto = require("crypto").webcrypto;

require("../go/wasm_exec.js");
const fs = require("fs");

const wasmBuffer = fs.readFileSync("./go/main.wasm");

const go = new globalThis.Go();

WebAssembly.instantiate(wasmBuffer, go.importObject).then((wasmModule) => {
  go.run(wasmModule.instance);

  const add = globalThis.add;
  console.log(add(3, 5));
});

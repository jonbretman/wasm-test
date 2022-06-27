import "../go/wasm_exec.js";

const wasmCode = await Deno.readFile("./go/main.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);

const go = new (globalThis as any).Go();

const wasmInstance = new WebAssembly.Instance(wasmModule, go.importObject);

go.run(wasmInstance);

const add = (globalThis as any).add as (x: number, y: number) => number;

console.log(add(5, 3));

.PHONY: compile deno node

compile:
	cp $$(go env GOROOT)/misc/wasm/wasm_exec.js go/wasm_exec.js
	GOOS=js GOARCH=wasm go build -o ./go/main.wasm ./go/main.go

deno:
	deno run --allow-read deno/main.ts

node:
	node node/index.js
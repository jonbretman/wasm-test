package main

import (
	"fmt"
	"syscall/js"
)

func init() {
	// we have to declare our functions in an init func otherwise they aren't
	// available in JS land at the call time.
	js.Global().Set("add", js.FuncOf(add))
}

func main() {
	fmt.Println("loading")
	wait()
}

func wait() {
	done := make(chan bool)
	<-done
}

func add(this js.Value, args []js.Value) interface{} {
	return js.ValueOf(args[0].Int() + args[1].Int())
}

class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
}

describe("My stack", () => {
  // it/test individual tests
  it("is created empty", () => {
    //since we are creating a new Stack we must create a stack class as seen above on line 1
    const stack = new Stack();

    //since we are expecting stack.top to equal -1 we must assign
    // the value to the stack class as seen on line 3
    expect(stack.top).toBe(-1);
    //
    expect(stack.items).toEqual({});
  });

  it.todo("can push to the top");

  it.todo("can pop off");
});

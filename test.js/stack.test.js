class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
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
    //toBe cannont be used in this case because it checks for referencial equality between two objects
    // in this case both objects are empty but they are still two different objects
    // to address this we use the toEqual method instead
    expect(stack.items).toEqual({});
  });

  it("can push to the top", () => {
    const stack = new Stack();
    // push is not considered a function so we have to create it in our stack class
    stack.push("Colin");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("Colin");
  });

  it.todo("can pop off");
});

const scriptMethod = new Function(
  "a",
  "{ /*comment*/ a = a + `jost`; console.log(`this`, this); }"
);

class Person {
  name = "kick";
  address = "here";
}

const person = new Person();
console.log("person", person);

//Bind it to a "this" object
const func = scriptMethod.bind(person);
func("ik");

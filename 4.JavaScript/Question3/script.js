function greet(name) {
	console.log(`Hello, ${name}`);
}

greet("Alice (funtional declaration)");

const greet1= function(name) {
	console.log(`Hello, ${name}`);
};

greet1("Bob (funtional expression)");

const greet3= (name) => {
	console.log(`Hello, ${name}`);
};

greet3("Charlie(arrow function)");

const greet4 = new Function("name", "console.log(`Hello, ${name}`);");

greet4("Dave(functional Constructor)");

(function(name) {
	console.log(`Hello, ${name}`);
})("Eve(IIFE)");

function* helloGenerator() {
	yield "Hello,";
	yield " World(Generator function)";
}

const generator = helloGenerator();

console.log(generator.next().value + generator.next().value);

function createGreeting(name) {
	return function() {
	  console.log(`Hey, ${name}`);
	};
}

const greetFrank = createGreeting("Frank(Returned Function)");

greetFrank();

const person = {
	name: "Grace",
	sayHello: function() {
	  console.log(`Hello, ${this.name}(object method)`);
	}
};

person.sayHello();

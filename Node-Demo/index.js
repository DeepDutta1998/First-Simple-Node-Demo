class person {
    constructor(name, age) {
        this.studentName = name;
        this.studentAge = age;
        // console.log("This is constructor");
    }

    hello() {
        console.log(
            `Student name is ${this.studentName} and student age is ${this.studentAge}`
        );
    }
}

module.exports = new person("Deep", 100);
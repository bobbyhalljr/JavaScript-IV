// Base class
class Person {
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }

    speak(name, location){
        return `My name is ${this.name}, I am from ${this.location}.`;
    }
};

// Instructor class
class Instructor extends Person {
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }

    demo(subject){
        return `Today we learned about ${subject}`;
    };

    testResults(student, subject){
        return `${student} receives a perfect score on ${subject}`;
    }

    grade(student){
        return Student.grade = `${student} gets a ${Math.floor(Math.random() * 101) + 1} on today's test`;
    }
};

// Student class
class Student extends Person {
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = [];
    }

    listsSubject(){
        return `My favorite subjects are ${this.favSubjects}`;
    }

    PRAssingment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun the sprint challenge on ${subject}`;
    }
};

//Project manager class
class projectManager extends Instructor {
    constructor(pm){
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }

    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, stand up time!`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
};

// Instructor Objects

// Bill object
const Bill = new Instructor({
    name: 'Bill',
    age: 23,
    location: 'Navada',
    favLanguage: 'JavaScript',
    specialty: 'Front-End',
    catchPhrase: 'Hot in Here!'
});


// Mary object
const Mary = new Instructor({
    name: 'mary',
    age: 34,
    location: 'New York',
    favLanguage: 'Go Lang',
    specialty: 'Back-End',
    catchPhrase: 'Watchu talkin bout willis?'
});

// Jack object
const Jack = new Instructor({
    name: 'Jack',
    age: 27,
    location: 'San Diego',
    favLanguage: 'Python',
    catchPhrase: 'The dingo ate your baby!'
});

// Students

// Jill object
const Jill = new Student({
    name: 'Jill',
    age: 19,
    location: 'Baltimore',
    previousBackground: 'Baker',
    className: 'web22',
    favSubjects: ['HTML', 'CSS', 'UX Design']
});

// Frank object
const Frank = new Student({
    name: 'Frank',
    age: 60,
    location: 'Florida',
    previousBackground: 'Professional skateborder',
    className: 'Web17',
    favSubjects: ['JavaScript', 'Web API']
});

// Austin object
const Austin = new Student({
    name: 'Austin',
    age: 25,
    location: 'Vermont',
    previousBackground: 'Horseback rider',
    className: 'DS12',
    favSubjects: ['Data science', 'Data structures']
});

// Project Managers

// Titan object
const Titan = new projectManager({
    name: 'Titan',
    age: 40,
    location: 'Seattle',
    gradClassName: 'CS101',
    favInstructor: 'Jack'
});

// Bob object
const Bob = new projectManager({
    name: 'Bob',
    age: 35,
    location: 'Goergia',
    gradClassName: 'WEB01',
    favInstructor: 'Mary'
});

// Kerry object
const Kerry = new projectManager({
    name: 'Kerry',
    age: 33,
    location: 'Canada',
    gradClassName: 'IOS15',
    favInstructor: 'Bill'
});


// Outputs

// Instructors
console.log(Bill.demo('Constructor functions'));
console.log(Mary.testResults(Austin.name, 'HTML and CSS test'));
console.log(Jack.speak());
console.log(Bill.grade(Austin.name));
console.log(Bill.grade(Jill.name));

// Students
console.log(JSON.stringify(Frank.listsSubject()));
console.log(Jill.PRAssingment('JavaScript-II'));
console.log(Austin.sprintChallenge('Applied JavaScript-II'));

// Project Managers
console.log(Bob.standUp('bob@slack'));
console.log(Titan.debugsCode(Jill.name, 'Node.js'));
console.log(Kerry.standUp('kerry@slack'));


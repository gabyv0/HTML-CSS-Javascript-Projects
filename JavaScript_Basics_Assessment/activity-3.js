const studentNames = ['John', 'Jane', 'Sam'];
let counter = 0;

while (counter <= 2) {
    let name = prompt('Please enter a name: ');
    studentNames.push(name);
    counter++;
}

for(i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}
var employees = {
    engineers: {
        0: {
            id: 1,
            name: "ravi chauhan",
            occupation: "Back-end Engineer"
        },
        1: {
            id: 2,
            name: "mrigank",
            occupation: "teacher"
        },
    }
};
var {
    engineers: {
        1: {
            id,
            name,
            occupation,
        },
    },
} = employees;

console.log(id);
console.log(name); 
console.log(occupation)




let wizards = [{
	name: 'kelvin',
	color: 'brown'}]

let wizardsCopy1 = Array.from(wizards);
console.log(wizardsCopy1)









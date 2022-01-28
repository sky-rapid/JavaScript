let users = [
    {"id": 5544,"name": "Stefania","age":20 },

    {"id": 3428,"name": "Dina","age":67},

    {"id": 9856,"name": "Theo","age":32},

    {"id": 9755,"name": "Elmo","age":45},

    {"id": 3799,"name": "Gary","age":63},

    {"id": 5905,"name": "harry","age":19},

    {"id": 8007,"name": "Cortney","age":34},

    {"id": 8573,"name": "Rosanne","age":25},

    {"id": 9065,"name": "Norris","age":50},

    {"id": 1998,"name": "Titus","age":37},]

   console.log(users.sort((a, b) => { return a.age - b.age;}));

   let sortedUserName = users.sort((a, b) => {
       
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return 1;
    }
    if (fa > fb) {
        return -1;
    }
    return 0;
});
console.log(sortedUserName);
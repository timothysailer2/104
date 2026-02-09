let names = ["tim","serge","cass","dave"];
//access value
// array square bracket position
names [2];
console.log(names[3]);

//modify array value
names[0] = "test"
console.log(names);

//add to array(push)

//call array, push, update value
names.push("dret");
console.log(names);
//to add to beginning of array use unshift
names.unshift('yup');
console.log (names);
//remove last item
names.pop();
console.log(names);
//remove first item use shift
names.shift();
console.log(names);
//remove specific position
names.splice(0,1);//position in array, how many to remove
console.log(names);

//assigment
let movies = ["superbad","the hangover", "inception", "the matrix", "roadhouse"]
console.log(movies);
console.log(`${movies[0]},${movies[4]}`);
movies[2]='slingblade';
movies.unshift("harry potter");
movies.push("harry potter2");
movies.pop()
console.log(movies);
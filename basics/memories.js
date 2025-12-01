// here is two types of memories in js 
// stack(Primitive used stack memory ) and heap (non-Primitive use heap)


let myYoutubename = "Muhammad younas";

let anotherName = myYoutubename 
anotherName  ="younas"
console.log(anotherName);
console.log(myYoutubename);

let userOne ={
    email : "myounas8776@gmail.com",
    Easypaisa : "Muhammad Younis"

}

let UserTwo = userOne;
UserTwo.email = "myounas2021@gmail.com"

console.log(userOne.email);
console.log(UserTwo.email);


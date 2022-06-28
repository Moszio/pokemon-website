const Admin = {
 login: () => {
 return `An admin has logged in`
 }
}

const yourHouse = {
 mom: `Tina`,
 dad: `Timothy`
}


const userA = {
 email: `dsdfsd@gmail.com`,
 password: `123456`,
 activate: () => {
  return `Activating Account` + this.email //arrow functions dont use "this." this. will not be affected
 }
}

const userB = {
 email: `sjd@gmail.com`,
 password: `23243245`,
 activate: function() {
  return `Activate Account for ` + this.email //this. can be used in function (old)
 }
}

console.log(userA.activate())
console.log(userB.activate())  


const functionA = () => {
 console.log(`something`)
}

const functionB = (f) => {
 f()
}



const functionC = (f1,f2) => {
 f1(f2)
}
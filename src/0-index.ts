let Name = "Harry"
Name = "Potter"
console.log(Name)

// functions in typescript
function add(a: number, b: number): number{
    return( a + b)
}

console.log(add(2, 10))
console.log(add(add(2,3),4))

//Collections(objects, arrays, tuples)
//objects
let person: {
    name: string
    email: string
    phone: number
}

function printCar(car:{
    make: string
    model: string
    year: number
    //optional property
    chargeVoltage?: number
}){
    let str = `${car.make} ${car.model} (${car.year})`
    car.chargeVoltage

    //type guard
    if (typeof car.chargeVoltage !== "undefined"){
        str += `// ${car.chargeVoltage}v`
    }

    console.log(str)
}

const car1 = {
    make : "Toyata",
    model: "corolla",
    year: 2019,
    chargeVoltage: 270
}

const car2 = {
    make: "Nissan",
    model: "GTR",
    year: 2022,
    //optional property
    color: "RED"
}

printCar(car1)
printCar(car2)


//index signatures -> dictionaries

const phones: {
    [k: string]: {
        country: string
        area: string
        number: string
    } | undefined
} = {} 

// ARRAYS AND TUPLES
// arrays
const fileExtensions: string[] = ["js", "ts"]


//tuples
let student: [number, string, string] = [
    9889,
    "james",
    "Karanja",
]

//destructuring a tupple
const [adm, fname, lname] = student

console.log(lname)


//structural vs nominal types 
//structural - printcar can work with either as long as it has the properties

class Car {
    make: string
    model: string
    year: number
    isElectric: boolean
}

class Truck {
    make: string
    model: string
    year: number
    towingCapacity: number
}

const Vehicle = {
    make: "Honda",
    model: "Accord",
    year: 2027,
}

printCar(Vehicle)
printCar(new Car)
printCar(new Truck)


//union types |
function flipCoin(): "heads" | "tails"{
    if (Math.random() > 0.5) return "heads"
    return "tails"
}

console.log(flipCoin())

function maybeGetUserInfo(): ["error", Error] | ["success", {name: string; email: string}]{
    if (flipCoin() === "heads") {
        return[
            "success",
            {name: "John Doe", email: "john@mail.com"},
        ]
    } else {
        return [
            "error",
            new Error("The coin landed on Tails :("),
        ]
    }
}

const outcome = maybeGetUserInfo()

if (outcome[0] === "success") {
    const userInfo = outcome[1];
    console.log("User info retrieved successfully:");
    console.log("Name:", userInfo.name);
    console.log("Email:", userInfo.email);
} else {
    const error = outcome[1];
    console.error("Error occurred:", error.message);
}

//intersection types &

const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

function makeWeek(): Date & {end: Date}{
    const start = new Date()
    const end = new Date(start.valueOf() + ONE_WEEK)

    return {...start, end}
}

const thisWeek = makeWeek()
//thisWeek.toISOString()
console.log(thisWeek.end.toISOString())



//interfaces and type aliases
//type alias
type UserContactInfo = {
    name: string
    email: string
}

function printContactInfo(info: UserContactInfo){
    console.log(info)
    console.log(info.email)
}

const person1 = {
    "name": "Mike",
    "email": "Mike@local.com"
}

printContactInfo(person1)

//using type alias to clean the flipgetuser function

type UserInfoOutcomeError = ["error", Error];
type UserInfoOutcomeSuccess = ["success", { name: string; email: string }];
type UserInfoOutcome = UserInfoOutcomeError | UserInfoOutcomeSuccess;

function CleanedMaybeGetUserInfo(): UserInfoOutcome {
    if (flipCoin() === "heads") {
        return [
            "success",
            { name: "james", email: "smith@example.com" }
        ];
    } else {
        return [
            "error",
            new Error("The coin landed on fail")
        ];
    }
}
const result = CleanedMaybeGetUserInfo();
if (result[0] === "success") {
    const userInfo = result[1];
    console.log("User info retrieved successfully:");
    console.log("Name:", userInfo.name);
    console.log("Email:", userInfo.email);
} else {
    const error = result[1];
    console.error("Error occurred while retrieving user info:", error.message);
}


// interfaces - Defines objects type
// json types exercise
type primitive = number | string | boolean | null

type JSONObject = {[k: string]: JSONValue}
type JSONArray = primitive[]
type JSONValue = primitive | JSONArray | JSONObject
 
function isJSON(arg: JSONValue) {}
 
isJSON("hello")
isJSON([4, 8, 15, 16, 23, 42])
isJSON({ greeting: "hello" })
isJSON(false)
isJSON(true)
isJSON(null)
isJSON({ a: { b: [2, 3, "foo"] } })

/*
 * functions
 */
//callable types
interface TwoNumberCalculation {
    (x: number, y: number): number
}

type calcTwoNumbers = (x:number, y:number) => number

let a: number = 4
let b: number = 2

const adddition: TwoNumberCalculation = (a, b) => a + b

const minus: calcTwoNumbers = (a, b) => a-b

//classes && Access modifiers keyword
class MyCar{
    make: string
    model: string
    year: number

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let sedan = new MyCar("mercedes", "s550", 2018)

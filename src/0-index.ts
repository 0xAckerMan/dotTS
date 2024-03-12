let Name = "Kores"
Name = "Joel"
console.log(Name)

// functions in typescript
function add(a: number, b: number): number{
    return( a + b)
}

console.log(add(2, 10))
console.log(add(add(2,3),4))

//Collections(objects, arrays, tuples)
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


console.log("Testinggg")


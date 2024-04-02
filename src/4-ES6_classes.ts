// 0. You used to attend a place like this at some point

class ClassRoom {
    maxStudentSize: number
    
    constructor(_maxStudentSize: number){
        this.maxStudentSize = _maxStudentSize
    }
}

const room = new ClassRoom(10)
console.log(room.maxStudentSize)

console.log("Max student size in class\n\n")

//1. Let's make some classrooms
function initializeRooms(): ClassRoom[]{
    const rooms = [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34),
    ]
    return rooms 
}

console.log(initializeRooms())
console.log("New instance of classroom\n\n")

// 2. A Course, Getters, and Setters
class HoberltonCourse {
    constructor(
        private _name: string,
        private _length: number,
        private _students: string[],
    ){}

    get name(): string{
        return this._name
    }

    set name(value: string){
        if (typeof value === "string"){
            this._name = value
        } else {
            throw new Error("Name must be a string")
        }
    }

    get length(): number{
        return this._length
    }

    set length(value: number){
        if(typeof value === "number" && value > 0){
            this._length = value
        } else {
            throw new Error("Length must be a number")
        }
    }

    get students(): string[]{
        return this._students
    }

    set students(value: string[]){
        if(Array.isArray(value)){
            this._students = value
        } else {
            throw new Error("Students must be an array of strings")
        }
    }
}

const c1 = new HoberltonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

// try {
//     c1.name = 12;
// } 
// catch(err) {
//     console.log(err);
// }
//
// try {
//     const c2 = new HoberltonCourse("ES6", "1", ["Bob", "Jane"]);
// }
// catch(err) {
//     console.log(err);
// }
console.log("Getters and setters\n\n")

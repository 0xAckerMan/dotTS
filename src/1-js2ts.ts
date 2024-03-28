/* Task one */ 
let Myvar = "Typescript is amazing"
console.log(Myvar)


/* Task two */ 
let MyArr: string[] = ["Typescript is amazing", "Python is cool", "c is fun"]
MyArr.map((value)=>{
    console.log(value)
})

for (let i=0; i<MyArr.length; i++){
    console.log(MyArr[i])
}

console.log("Entering some more loops\n\n")

function CisFun(num :number){
    for (let i=0; i<num; i++){
        console.log("C is fun")
    }
}

CisFun(10)

console.log("Finishing loop\n\n")

function Square(size :number){
    for (let i=0; i<size; i++){
        let line = ""
        for (let j=0; j<size; j++){
            line += "X"
        }
        console.log(line)
    }
}

Square(5)
console.log("Exiting the square\n\n")

function LargestNum(nums :number[]){
    nums.sort((a :number, b: number)=> b-a)
    console.log(nums[0])
}
const largeNum :number[] = [1,-3,94,7]
LargestNum(largeNum)

console.log("Largest number printed\n\n")

function ExecFunc(x: number, func: ()=>void){
    for (let i=0; i< x;i++){
        func()
    }
}

function moby(){
    console.log("Func called in arg")
}

ExecFunc(5, moby)

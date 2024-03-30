console.log("print list of numbers arr")

function print_list_integers(list: number[]){
    for(const num of list){
        console.log(num)
    }
}

let list: number[] = [1,2,3,4,5]

print_list_integers(list)

console.log("End of list iter in arr\n\n")

function element_at(array: number[], idx: number): void{
    console.log(array[idx])
}

element_at(list,1)
console.log("Accessing elemet by index\n\n")


function replace_in_list(list: number[], idx: number, value: number): void{
    list[idx]=value
    console.log(list)
}

replace_in_list(list,1,9)
console.log("Replace value in array END\n\n")

function print_list_in_reverse(list: number[]){
    let newlist = list.reverse()
    console.log(newlist)
}

print_list_in_reverse(list)

console.log("End of reversed array list\n\n")

function new_in_list(list: number[], idx: number, value: number): void{
    let newList = [... list]
    newList[idx] = value
    console.log("new list",newList)
    console.log("original list", list)
}

new_in_list(list,0,11)
console.log("end of replace in copy arr\n\n")

function no_c(stringg: string): void{
    let my_string: string = "";
    for (let i: number = 0; i < stringg.length; i++){
        if(stringg[i] != "c" && stringg[i] != "C") {
            my_string += stringg[i]
        }
    }
    console.log(my_string)
}

no_c("College is a cool school")
console.log("End of c era\n\n")

function print_matrix_integer(matrix: number[][]):void {
    for (const row of matrix){
        let row_str = ""
        for (const num of row){
            row_str += num
        }
        console.log(row_str)
    }
}

const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
print_matrix_integer(matrix);

console.log("End of matrix looping\n\n")


function add_tuple(arg1: [number, number], arg2: [number, number]): void {
    let result: [number, number] = [arg1[0] + arg2[0], arg1[1] + arg2[1]];
    console.log(result);
}

let tuple_a :[number, number] = [1,89]
let tuple_b :[number, number] = [88,11]
add_tuple(tuple_a,tuple_b)
console.log("Tuple addition gone brrrr\n\n")

function multiple_return(sentence: string): [number, string]{
    return [sentence.length, sentence[0]]
}

let sentence :string = "At school, I learnt C"
let [leng, first] = multiple_return(sentence)
console.log(`Length: ${leng} - First character ${first}`)
console.log("Multiple returns??\n\n")

function max_integer(my_list: number[]): void{
    let sorted: number[] = my_list.sort((a: number, b: number)=>b-a)
    console.log(sorted[0])
}

let my_list: number[] = [1, 90, 2, 13, 34, 5, -13, 3]
max_integer(my_list)
console.log("Finding max val in arr")

function divisible_by_2(list: number[]): void{
    console.log(list.map((val) => val % 2 === 0))
}

let my_listt = [0, 1, 2, 3, 4, 5, 6]
divisible_by_2(my_listt)

function delete_at(my_list: number[], idx: number): void{
    if (idx < 0 || idx > my_list.length){
        console.log(my_list)
    }

    let new_list: number[] = []
    for (let i: number = 0; i <  my_list.length; i++){
        if (i != idx){
            new_list.push(my_list[i])
        }
    }
    console.log(new_list)
}

let listt = [0, 1, 2, 3, 4, 5, 6]
delete_at(listt,1)

console.log("Delete element at idx\n\n")


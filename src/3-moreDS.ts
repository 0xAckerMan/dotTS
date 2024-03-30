/*
 * Welcome to the realms of 2024-03-30T07:51:32
 */

function square_matrix_simple(matrix: number[][]): void{
    let result_matrix :number[][]=[]
    for (const row of matrix){
        let row_string : number[] = [] 
        for (const value of row){
            let squared: number = value ** 2
            row_string.push(squared)
        }
        result_matrix.push(row_string)
    }
    console.log(result_matrix)
}

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

square_matrix_simple(matrix)

console.log("Squaring element of 2x2 matrix\n\n")

function search_replace(my_list: number[], search: number, replace: number): void{
    let new_list: number[] = []
    for (let i: number = 0; i < my_list.length; i++){
        if (my_list[i] == search){
            my_list[i] = replace
        }
        new_list.push(my_list[i])
    }
    console.log(new_list)
}

let my_list: number[] = [1, 2, 3, 4, 5, 4, 2, 1, 1, 4, 89]
search_replace(my_list,2,89)
console.log("Search and replace in array\n\n")

function unique_add(my_list: number[]): void{
    const unique_values = my_list.filter((value,idx,self) => {
        return self.indexOf(value)===idx
    })

    let sum = unique_values.reduce((accumulator, value)=>{
        return accumulator + value
    },0)
    console.log(sum)
}

my_list = [1, 2, 3, 1, 4, 2, 5]
unique_add(my_list)
console.log("Used reduce to add all elements of an array\n\n")

function common_elements<T>(set1: Set<T>, set2: Set<T>): void{
    let common : Set<T> = new Set()

    for (const num of set1){
        if(set2.has(num)){
            common.add(num)
        }
    }

    console.log(common)
}

let set_1 = new Set( ["Python", "C", "Javascript"] )
let set_2 = new Set( ["Bash", "C", "Ruby", "Perl"] )
common_elements(set_1, set_2)

console.log("Gets all common values sets\n\n")


function only_different_elements<T>(set1: Set<T>, set2: Set<T>): Set<T>{
    const diff_elem: Set<T> = new Set()

    for(const elem of set1){
        if(!set2.has(elem)){
            diff_elem.add(elem)
        }
    }

    for (const elem of set2){
        if(!set1.has(elem)){
            diff_elem.add(elem)
        }
    }
    return diff_elem
}

let unique = only_different_elements(set_1, set_2)
console.log(Array.from(unique))
console.log("This are the unique elements\n\n")

function mumber_keys<T>(a_dictionary: {[key: string]: T}): number{
    return 0
}

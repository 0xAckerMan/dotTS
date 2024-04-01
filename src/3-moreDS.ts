/*
 * Welcome to the realms of More data structures
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

function number_keys<T>(a_dictionary: {[key: string]: T}): number{
    return Object.keys(a_dictionary).length
}

let a_dictionary = { 'language': "C", 'number': 13, 'track': "Low level" }
let nb_keys = number_keys(a_dictionary)
console.log(`The number of keys is: ${nb_keys}`)
console.log("Getting the number of keys in a dict\n\n")

function print_sorted_dictionary<T>(a_dictionary: {[key: string]: T}): void{
    let Sorted_dict = Object.keys(a_dictionary).sort()

    for(let key of Sorted_dict){
        console.log(`${key}: ${a_dictionary[key]}`)
    }
}

let b_dictionary = { 'language': "C", 'Number': 89, 'track': "Low level", 'ids': [1, 2, 3] }
print_sorted_dictionary(b_dictionary)
console.log("Sorting a dict with keys\n\n")

function update_dictionary<T>(a_dictionary: {[key: string]: T}, key: string, value: T){
    if (key in a_dictionary){
        a_dictionary[key] = value
    } else {

    }
    for (const elem in a_dictionary){
        console.log(`${elem}: ${a_dictionary[elem]}`)
    }
}

update_dictionary(b_dictionary, 'language', 'Typescript')
console.log("Updating a dict with key\n\n")

function simple_delete<T>(a_dictionary: {[key: string]: T}, key: string): void{
    if (key in a_dictionary){
        delete a_dictionary[key]
    }
}

simple_delete(b_dictionary, "Number")
console.log(b_dictionary)
console.log("Using the delete keyword to delete k,v in dict\n\n")

function multiply_by_2(a_dictionary: {[key: string]: number}): void{
    let multiplied: {[k: string]: number} = {}
    for (const idx in a_dictionary){
        multiplied[idx] = a_dictionary[idx]*2
    }
    console.log(a_dictionary)
    console.log(multiplied)
}

let c_dictionary = {'John': 12, 'Alex': 8, 'Bob': 14, 'Mike': 14, 'Molly': 16}
multiply_by_2(c_dictionary)
console.log("Multiplying the values of a dict\n\n")

function best_score(a_dictionary: {[key: string]: number}): void{
    let bestKey: string | null = null
    let bestValue: number = Number.MIN_SAFE_INTEGER
    for (const key in a_dictionary){
        if(a_dictionary[key] > bestValue){
            bestValue = a_dictionary[key]
            bestKey= key
        }
    }
    console.log(bestKey)
}

best_score(c_dictionary)
console.log("Getting the key with high score\n\n")

function multiply_list_map(my_list: number[], num: number) :void{
    let multiplied = my_list.map((value)=> value*num)
    console.log(multiplied)
}

my_list = [1, 2, 3, 4, 6]
multiply_list_map(my_list, 4)
console.log("multiply arr by number\n\n")

function roman_to_int(roman_string: string): number{
    if(typeof roman_string !== "string" || !roman_string){
        return 0
    }

    let roman_values: {[key: string]: number} = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result: number = 0

    for (let i = 0; i < roman_string.length; i++){
        let current_value: number = roman_values[roman_string[i]]
        let next_value: number = roman_values[roman_string[i+1]]

        if (next_value && current_value < next_value){
            result += next_value - current_value
            i++
        } else{
            result += current_value
        }
    }

    console.log(`The int of ${roman_string} is ${result}`)
    return result
}

console.log(roman_to_int("III")); // Output: 3
console.log(roman_to_int("IV")); // Output: 4
console.log(roman_to_int("IX")); // Output: 9
console.log(roman_to_int("LVIII")); // Output: 58
console.log(roman_to_int("MCMXCIV")); // Output: 1994
console.log(roman_to_int("")); // Output: 0

console.log("Converting roman values to integers\n\n")



// non-primitive
// array & object || function

// array => [] -> indexing -> 0 to n-1 (n = number of elements)
// object => {} -> keys: value

// let arr = [1,2,3,4,5,6, true, "hriday", 12.3] // 1d
// let arr2D = [
//     [1, 2, 3],
//     [4, [5],
//         [6, [0]]
//     ]
// ]
// console.log(arr2D[1][2][1][0])


// obj:
// let obj = {
//     "fname":"Hriday",
//     "lname":"Goswami",
//     "Age":400,
//     "array": [1,2,3,4,5]
// }
// let fname = "fname"
// console.log(obj['fname'], obj.fname) 
// console.log(obj.array[1])

// let arrObj = [
//     {
//         "fname":"Hriday"
//     },
//     {
//         "fname":"Manav"
//     },
//     {
//         "fname":"Rohit"
//     }
// ]

// console.log(arrObj[0].fname)
// arrObj.map((ao)=>{
//     console.log("fname -> ", ao.fname)
// })


// let a = 10
// let b = 20
// // let sum = 0
// // sum = a+b
// console.log(a+b)

// a = 30
// b = 40
// // let sum = 0
// // sum = a+b
// console.log(a + b)


// function

// static function
// function add() {
//     let a = 10
//     let b = 20
//     console.log(a+b)
// }

// add()

// function add(a, b) {
//     console.log(a+b)
// }

// add(2,3)
// add(10, 20)
// add(30, 40, 50)
// add(b=10, a=10)

// json -> javascript object notation

// let objFunc = {
//     "a":10,
//     "b":20,
//     "fname":"Hriday",
//     "myFunc":function () {
//         // console.log(a+b)
//         return this.a+this.b+this.fname
//         // console.log(objFunc.a+objFunc.b)
//     },
//     "arrowFunc":()=>{
//         return objFunc.a+objFunc.b
//         // console.log(a+b)
//     }
// }

// console.log(objFunc.arrowFunc())
// console.log(objFunc.myFunc())


// if...else

/* Syntax for if...else:
    if(condition) {
        code
    } else {
        code
    }
*/

// let fname = "Hriday"

// if(fname == "Hriday") {
//     console.log("Valid")
// } else {
//     console.log("Invalid")
// }

// let isEven = 11

// if(isEven%2 == 0) {
//     console.log("Even")
// } else {
//     console.log("Odd")
// }


let a = 60
let b = 70
let c = 80
let d = 90
let e = 100

if(a>b) {
    // nested if
    if(a>c) {
        if(a>d) {
            if(a>e) {
                console.log("A")
            } else {
                console.log("E")
            }
        } else if(d>e) {
            console.log("D")
        } else {
            console.log("E")
        }
    } else if(c>d) {
        console.log("C")
    } else if(d>e){
        console.log("D")
    } else {
        console.log("E")
    }
}
else if(b>a) {
    if(b>c) {
        if(b>d) {
            if(b>e) {
                console.log("B")
            } else {
                console.log("E")
            }
        } else if(d>e) {
            console.log("D")
        } else {
            console.log("E")
        }
    } else if(c>d) {
        console.log("C")
    } else if(d>e){
        console.log("D")
    } else {
        console.log("E")
    }
}
else if(c>d){
    if(c>e) {
        console.log("C")
    } else {
        console.log("E")
    }
} else if(d>e){
    console.log("D")
} else {
    console.log("E")
}
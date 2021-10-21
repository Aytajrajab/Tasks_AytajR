//a
let arr = [1,2,15,4,5,6,7,8,9,10,50];
console.log(arr)

//b
let max = arr[0];
for (let i = 1; i < arr.length; ++i) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max)

//c
arr.push(20)
console.log(arr)

//d
arr.shift()
console.log(arr)

//e
let last=arr[arr.length-1];
console.log(last)

//f
let index = 3;
arr.splice(index,0,43)
console.log(arr)

//h
arr.forEach(element => console.log(element));

//i
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>40) {
        console.log(arr[i])
    }
    
}






const names = ['usama', 'salim', 'Alisha', 'Bilal', 'Nouman', 'Huzaifa', 'Owes'];
names.sort();
console.log(names);

const numbers = [7, 6, 5, 9, 0, 4, 3, 2, 1];
numbers.sort();
console.log(numbers);
// ------------------------------------------------------------

let newFruits = [];

const fruit = document.querySelectorAll('.fruit');
fruit.forEach((item, idx) => {
    if (idx != 0) {
        console.log(item.value);
        newFruits.push(item.value)
    }
})
// console.log(fruit[1]);

newFruits.sort().forEach((item, idx) => {
    fruit[idx + 1].value = item;
    fruit[idx + 1].innerText = item;

    console.log('sitem:', item);
})
console.log(newFruits);













// let newfruits = [];
// const fruits = document.querySelectorAll('.fruit');
// // debugger
// fruits.forEach((item,idx)=>{
//     if(idx != 0){
//         console.log(item.value);
//         newfruits.push(item.value)
//     }
// })

// newfruits.sort().forEach((item,idx)=>{
//     fruits[idx+1].value = item
//     fruits[idx+1].innerHTML = item
// })
// console.log(newfruits);







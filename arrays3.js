1 // Write a function that accepts an array of strings and console.logs each element using a for loop.
let arr= (["Emma","teach","compassion","love you"]);
// function strings(arr){
for(let i=0;i<arr.length;i++)

    // console.log(i);
    console.log(arr[i]);
// }




2 // Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let num = [1,2,3,4,5,6,7,8,9];
num.forEach(function(num){
console.log(num*2)
});


3 // Write a function that takes in an array of numbers and consoles the first 
//four items multiplied by 8 and the last two added by 5. Console the array with the new values
let numbers=[2,18,6,21,42,3,12,18]
let k =0;
function arrayOfNumbers(numbers){
    for(let x=0;x<numbers.length;x++)
    if(k<4){
        k.push(numbers[x]*8)
    }
    else{
        k.push(numbers[x]+5)
    }
    console.log(k)
    }

    






4 // Write a function that takes in the following array and use a while loop to iterate and 
//break when the item is equal to the fourth index
let arrGiven = [1,2,3,4,5,6,7,8,9];
// arrUnique(arrGiven);
function arrUnique(arrGiven){
    let i=0;
    while(i<arrGiven.length){
        console.log(arrGiven[i]);
        if(arrGiven===4){
            break
        }
       i++
}

}

 




5 // Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi'];
for(let i= 0;i<fruits.length; i++){
    if(i===2){
        continue;
    }
    console.log({"continue":fruits[i]});
}

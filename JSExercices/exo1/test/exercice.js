console.log('Hello World!');

const addNumbers = (num1, num2) => {
    return num1 + num2;
}
console.log(addNumbers(1, 2));

const addNumber = (numbers) =>{
    let som = 0;
    for (let i = 0; i < numbers.length; i++) {
        som += numbers[i];
    }
    return som;
}
console.log(addNumber([1, 5, 6, 4]));

//elements en ordre croissant
const sortNumber = (arr) => {
    //let newArr = arr.slice(); 
    let newArr = [...arr];
    let temp;
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[i] < newArr[j]) {
                temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    console.log(newArr);
}

// Exemple d'utilisation :
sortNumber([2, 6, 8, 4]);

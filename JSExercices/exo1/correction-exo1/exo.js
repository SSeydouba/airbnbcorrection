// Ecrivez une fonction qui prend en parametre 2 nombres et qui retourne la somme
const addNums = (a,b) =>{ // pareil que function addnum(a,b)
    return (a+b)
}
// test de la fonction addNums :
console.log(addNums(2,3)) 

// Ecrivez une fonction qui prend en parametre un tableau de nombres et qui retourne la somme du tableau (sans utiliser reduce)
const addArray = (myArray)=> {
    let accumlator = 0
    for (let i=0;i<myArray.length;i++){
        accumlator = accumlator + myArray[i]
    }
    return accumlator
}

// test de la fonction addArray :
const exampleArray = [2,4,6,2]
console.log(addArray(exampleArray))


// Ecrivez une fonction qui prend en parametre un tableau de nombres le tableau trié par ordre croissant
const sortMe = (arr)=>{
    for(let i=0;i<arr.length;i++){
        // chercher le plus grand
        let biggerIndex = i 
        for(j=i;j<arr.length;j++){
            if(arr[j]>arr[biggerIndex]){
                biggerIndex=j
            }
        }
        // maintenant biggerIndex est l'index le plus grand
        // on va l'intervertir avec la position i
        const save = arr[i]
        arr[i]=arr[biggerIndex]
        arr[biggerIndex]=save
    }
    return(arr)
}

console.log(sortMe([2,7,1,20,3]))
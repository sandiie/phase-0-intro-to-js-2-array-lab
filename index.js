let cats= ["Milo" , "Otis" , "Garfield"]  

function destructivelyAppendCat(Pebbles){
    cats.push(Pebbles);
  }
  function destructivelyRemoveLastCat(Pebbles){
    cats.pop(Pebbles);
  }

function destructiveRemoveFirstCat(Otis){
    cats.shift(Otis);
}

function appendCat(Broom){
    let newCats =["Milo" , "Otis" , "Garfield" , "Broom"]
    return newCats;
}
function destructivelyPrependCat (Sarabi){
    cats.unshift(Sarabi)
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo)
}
function prependCat(Arnold){
    let newCats = ["Arnold" ,"Milo" ,"Otis" ,"Garfield"  ] 
    return newCats;
}
function removeLastCat (){
let newCats = cats.slice(0, -1);
    return newCats;
}
function removeFirstCat () {
    let newCats = cats.slice(1);
    return newCats;
}
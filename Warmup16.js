// - create a data model to represent your classmates
// - think of different attributes of your classmates? what do all of them have ?
// - create a factory function.
// - create an array to hold the classmates that you created.
// - write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// - write a function called addFriend that takes a mate as an argument and add it to you classMates array.
// - calculate the number of male friends that your class have by writing a function called nbOfMale.
// - Write a function searchMates that, given a query and an array of Mates,

var student1 = {
	firstName : 'x',
    lastName : 'x',
    age : 26,
    sex :'male'
}
var student2 = {
	firstName:'z',
	lastName : 'z',
	age : 31,
	sex : 'male'
}

var student3 ={
	firstName : 'y',
	lastName : 'y',
	age: 24,
	sex : 'female'
}

function makeClassMate(firstName,lastName,age,sex){
    return {
        firstName:firstName,
        lastName:lastName,
        age:age,
        sex:sex
    }
}


var classmates =[student1,student2,student3]

function displayFriend(student){
     return "the name of the student is"+" "+array.firstName+" "+" and he is "+" "+array.age+" "+"years old "
}

function addFriend (firstName,lastName,age,sex){
	var obj = {
	
		firstName: firstName,
		lastName : lastName,
		age : age,
		sex : sex
	}
	
	classmates.push(obj)
}

function nbOfMale(array){
	var count = 0
	for(var i = 0 ;i<array.length;i++){
		if(array[i].sex=== 'male') {
             count++ 
        }
		
	} 
	return count
}

function isMatch(query,mate){
    for (var key in mate){
     if (mate[key].includes(query)){
         return true
     }
        else {
     return false }
    }
 }
 
 function searchMates (query,mate){
   var arr=[]
     for (var i=0;i<mate.length;i++){
        if (isMatch(query,mate[i])){
            arr.push(mate[i] )
        }
    } return arr 
 }      
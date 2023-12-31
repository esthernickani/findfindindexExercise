/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];


function findUserByUsername(usersArray, username) {
   const index = usersArray.findIndex(obj => {
    return obj.username == username;
  })
  return usersArray[index];
}
  

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  const i = usersArray.findIndex(obj => {
    return obj.username == username;
  })

  console.log(i)

  const removed = usersArray[i];

  if (i !== -1) {
    usersArray.splice(i, 1)
  }
  return removed;
  
}


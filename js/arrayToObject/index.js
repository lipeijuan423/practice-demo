const arrayToObject = (arr, keyField) => arr
  .reduce((accumulator, currentValue) => {
    accumulator[currentValue[keyField]] = currentValue;
    return accumulator;
  }, {});

const users = [
  {
    id: 1246,
    name: "Rienz Ivan Otiong"
  },
  {
    id: 4392,
    name: "Olivia Green"
  },
  {
    id: 9321,
    name: "Larry West"
  }
]

const formattedUsers = arrayToObject(users, 'id');

// So rather than using 'users.find( item => item.id === 1246 )'
// you can simply call 'formattedUsers[1246]' to get the specific user

console.log(formattedUsers[1246]);  // { id: 1246, name: 'Rienz Ivan Otiong' }

// 直接筛选
const users = [
  {
    id: 1246,
    name: "Rienz Ivan Otiong"
  },
  {
    id: 4392,
    name: "Olivia Green"
  },
  {
    id: 9321,
    name: "Larry West"
  }
]

const findMe = users.find(item => item.id === 1246);

console.log(findMe); // { id: 1246, name: 'Rienz Ivan Otiong' }
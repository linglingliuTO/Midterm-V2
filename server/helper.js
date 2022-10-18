

//Function TO convert Object into Array

 const getArray = (data, keyID) => {
  let array= []
  for (item of data) {
   array.push(item[keyID])
  }
  return array
 }




module.exports = {getArray};

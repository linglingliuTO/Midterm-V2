

//Function TO convert Object into Array

 const getArray = (data, keyID) => {
  let array= []
  for (item of data) {
   array.push(item[keyID])
  }
  return array
 }

 const generateRandomString = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  while (result.length < 6) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};




module.exports = {getArray, generateRandomString};

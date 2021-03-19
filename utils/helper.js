import {Alert} from 'react-native';
import fs from 'react-native-fs';

const path = '/Users/suren/Desktop/Hotel/Hotel/DATA/Users.json';
let object = require(path);

export const login = async (email, password) => {
  let data = [];
  let obj;
  await fs
    .readFile(path, 'utf8')
    .then((r) => {
      data = JSON.parse(r);
      obj = data.find(
        (item) => item.email === email && item.password === password,
      );
    })
    .catch((err) => {
      console.log('error - ', err);
    });
  return obj;
};

export const register = ({newUser}) => {
  object.push(newUser);
  fs.writeFile(path, JSON.stringify(object), (err) => {
    if (err) {
      console.log('err - ', err);
    }
    console.log('new object - ', object);
  });
};

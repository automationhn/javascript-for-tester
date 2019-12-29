/* eslint-disable no-console */
var request = require('request');

const getAsync = function(url) {
  console.log(url);
  return new Promise(
    (resolve, reject) => {
      request.get(url, function(error, data){
        if (error) {
          reject(error);
        }
        resolve(data && data.body && JSON.parse(data.body));
      })
   }
 );
};


const postAsync = function(url, postData) {
  return new Promise(
    (resolve, reject) => {
      request.post({
        url,
        form: postData,
        headers: {'content-type' : 'application/x-www-form-urlencoded'}
      }, function(error, data){
        if (error) {
          reject(error);
        }
        resolve(JSON.parse(data.body));
      })
   }
 );
};

const patchAsync = function(url, postData) {
  return new Promise(
    (resolve, reject) => {
      request.patch({
        url,
        form: postData,
        headers: {'content-type' : 'application/x-www-form-urlencoded'}
      }, function(error, data){
        if (error) {
          reject(error);
        }
        resolve(data && data.body && JSON.parse(data.body));
      })
   }
 );
};

export { 
  getAsync,
  postAsync,
  patchAsync
};

/* eslint-disable no-console */
var request = require('request');

const getAsync = function(url) {
  return new Promise(
    (resolve, reject) => {
      request.get(url, function(error, data){
        if (error) {
          reject(error);
        }
        resolve(JSON.parse(data.body));
      })
   }
 );
};

export default getAsync;

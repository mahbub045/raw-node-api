//dependencies
const fs = require('fs');
const path = require('path');

//module scaffolding
const lib = {};

//base directory of the data folder
lib.baseDir = path.join(__dirname, '/../.data/');

//write data to a file
lib.create = (dir, file, data, callback) => {
  //open the file for writing
  fs.open(
    lib.baseDir + dir + '/' + file + '.json',
    'wx',
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        //convert data to string
        const stringData = JSON.stringify(data);
        //write to file and close it
        fs.writeFile(fileDescriptor, stringData, (err2) => {
          if (!err2) {
            fs.close(fileDescriptor, (err3) => {
              if (!err3) {
                callback(false);
              } else {
                callback('Error closing new file');
              }
            });
          } else {
            callback('Error writing to file');
          }
        });
      } else {
        callback('Could not create new file, it may already exist');
      }
    },
  );
};
//read data from a file
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.baseDir + dir}/${file}.json`, 'utf8', (err, data) => {
    callback(err, data);
  });
};

//update data inside a file
lib.update = (dir, file, data, callback) => {
}

module.exports = lib;

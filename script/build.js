const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const filepath = path.join(__dirname, '..', 'packages');
console.log('__dirname', __dirname, filepath);
/**
 * 对 packages 内部的包进行构建
 */
const doBuild = async () => {
  let command = '';
  fs.readdirSync(filepath).forEach((fileName) => {
    command += `cd ${filepath}/${fileName}; yarn run father build;`;
  });
  console.log('command', command);
  await exec(command, (error, stdout) => {
    if (error) {
      console.error('Build Error -_-!');
      console.error(error);
      throw error;
    }

    console.log(stdout);
    console.log('Build Success! ^_^');
  });
};

doBuild();

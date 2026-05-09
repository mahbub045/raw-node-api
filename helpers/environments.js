//module scaffolding
const environments = {};

environments.staging = {
  port: 5050,
  envName: 'staging',
  secretKey: 'dfkdjfsecretadfasdfddfdff',
};

environments.production = {
  port: 6000,
  envName: 'production',
  secretKey: 'dfkdjfsecretadfasdfdfasdfdf',
};

// determine which environment was passed as a command-line argument
const currentEnvironment =
  typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
  typeof environments[currentEnvironment] === 'object'
    ? environments[currentEnvironment]
    : environments.staging;

module.exports = environmentToExport;

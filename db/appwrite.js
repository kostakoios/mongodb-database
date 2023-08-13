const sdk = require("node-appwrite");

const {
  BACKEND_URL,
  BACKEND_PROJECT_ID,
  BACKEND_API_KEY,
} = require("../env");

const DATABASE_NAME={
  API_KEYS: 'api-keys',
  STOCKS: 'stocks',
  ALERTS: 'alerts',
  ESSENTIALS: 'essentials',
  TEAMSSTOCKS: 'teams-stocks',
  CHANNELS: 'channels'
};

//Init
const client = new sdk.Client();
client
  .setEndpoint(`${BACKEND_URL}/v1`)
  .setProject(BACKEND_PROJECT_ID)
  .setKey(BACKEND_API_KEY);
  
const database = new sdk.Databases(client, "default");

module.exports={
  DATABASE_NAME,
    sdk,
    database
};
'use strict';
const structjsnon = require('./structjson');
const dialogflow = require('dialogflow');
const config = require('../config/keys');

const projectID = config.googleProjectID;

console.log("projectID:");console.log(projectID);

const credentials = {
 client_email: config.googleClientEmail,
 private_key:  config.googlePrivateKey
};

const sessionClient = new dialogflow.SessionsClient({projectID, credentials});
console.log("config:=>");console.log(config);
console.log("sessionClient:=========>");console.log(sessionClient);

const sessionPath   = sessionClient.sessionPath(projectID, config.dialogflowSessionID);

//dialogFlowSessionID
console.log("sessionPath:=========>");
console.log(sessionPath);

module.exports={
textQuery: async function(text, parameters= {}) {
    let self = module.exports;
    const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text: text,
            languageCode: config.dialogflowSessionLanguajeCode,
          },
        },
        queryParams: {
        payload: {
        data: parameters
              }
        }


    };
    let responses = await sessionClient.detectIntent(request);
      responses = await self.handleAction(responses);
      return responses;
   },

eventQuery: async function(event, parameters= {}) {
    let self = module.exports;
    const request = {
      session: sessionPath,
      queryInput: {
          event: {
          name: event,
          languageCode: config.dialogflowSessionLanguajeCode,
        },
  
        },
        queryParams: {
        payload: {
        data: parameters
              }
        }
    };
    let responses = await sessionClient.detectIntent(request);
      responses = await self.handleAction(responses);
      return responses;
   },
   handleAction: function (responses)
   {
     return responses;
   }

}
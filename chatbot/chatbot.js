'use strict';

const dialogFlow = require('dialogFlow');
const structjson = require('./structjson.js')
const config = require('../config/keys');

const projectID= config.googleProjectID;

//const sessionId = config.dialogFlowSessionID;
//const languageCode = config.dialogFlowSessionLanguageCode;

const credentials = {
   client_email: config.googleClientEmail,
   private_key: config.googlePrivateKey,

};

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});
const sessionPath = sessionClient.sessionPath(projectId, config.dialogFlowSessionID);

module.exports={
 textQuery: async function(text, parameters= {}) {
    let self = module.exports;
    const request = {
        session: sessionPath,
        queryInput: {
          text: {
            // The query to send to the dialogflow agent
            text: text,
            // The language used by the client (en-US)
            languageCode: config.dialogFlowSessionLanguajeCode
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
   ///////

   eventQuery: async function(event, parameters= {}) {
    let self = module.exports;
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
            name: event,
            parameters: structjson.jsonToStructProto(parameters),
            languageCode: config.dialogFlowSessionLanguajeCode
          },
        }
 };
    let responses = await sessionClient.detectIntent(request);
      responses = await self.handleAction(responses);
      return responses;
   },

   handleAction: function (responses){
     return responses;
   },
}
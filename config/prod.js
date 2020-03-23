module.exports ={
    googleProjectID:     process.env.GOOGLE_PROJECT_ID,
    dialogFlowSessionID: process.env.DIALOGFLOW_SESSION_ID,
    dialogFlowSessionLanguajeCode: process.env.DIALOGFLOW_LANGUGAGE_CODE,

    googleClientEmail:   process.env.GOOGLE_CLIENT_EMAIL,
    google_Private_Key:    JSON.parse(process.env.GOOGLE_PRIVATE_KEY),

    //googlePrivateKey: JSON.parse (process.env.GOOGLE_PRIVATE_KEY),

    //googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')

    }
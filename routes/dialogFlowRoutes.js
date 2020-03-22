'use strict';
const chatbot = require ('../chatbot/chatbot');

module.exports = app =>{
    app.get('/',(req, res)=>{
        res.send({'hello':'Marco query y event..sessionClient ..Path/Detected intent- credential/async/await/post  2333'})
     });
    
     app.post('/api/df_text_query', async(req, res)=>{
     let responses= await chatbot.textQuery(req.body.text, req.body.parameters);
     res.send(responses[0].queryResult);
     console.log(req.body);
      });      
      
      app.post('/api/df_event_query', async(req, res)=>{
        let responses= await chatbot.eventQuery(req.body.event, req.body.parameters);
        res.send(responses[0].queryResult);
        console.log(req.body);
         }); 

    // app.post('/api/df_event_query',(req, res)=>{
    //    res.send({'do':'event query'})
     //});
}
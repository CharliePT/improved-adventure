//describes a middleware that logs any attempt to talk to the API
//req -> [logger (console.log key details)] -> [cors] -> [auth] -> [app] -> response

function logger(req, res, next) {
    //req - the clients request
    //res - the response that will be sent to the client
    //next - the step down the API
    

    //log key details
    console.log(req.method, req.originalUrl);
    
    //pass to the next layer
    next();//res isn't used here but it is used in the app.js which it is passed to via next
}

module.exports = logger;
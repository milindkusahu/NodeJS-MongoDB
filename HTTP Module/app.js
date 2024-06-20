const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Homepage');
    }
    else if(req.url === '/profile') {
        res.end('Profile Page')    
    }
    else {
        res.end('Page Not Found')
    }
})

server.listen(3000);

/* HTTP Request Method
-----------------------------------------
    GET - To Fetch Data from other Server
    POST - Creation
    PATCH - Update Particular Data
    PUT - Update All Data
    DELETE - Delete

    HTTP Status Codes
-----------------------------------------
    1XX
        100 -> The server has received the request.
        101 -> The requester has asked the server to switch protocols and the server has agreed to do so.

    2XX
        200 -> Ok status (All Good)
        201 -> Created Status (Anything is Created)
        202 -> Request Accepted and Currently Processing
        203 -> Your request is forwarded to another Server (Used in Distributed Systems)
        204 -> Request was Successful but server not Responding

    3XX
        301 -> Moved Permanently
        307 -> Temproary Redirect
        308 -> Permanently Redirected
    
    4XX
        400 -> Bad Request
        401 -> Unauthorized
        403 -> Forbidden
        404 -> Not Found
    
    5xx
        500 -> Internal Server Error
        502 -> Bad Gateway (Server fail)
        503 -> Service Unavailable (Too much load on server)
*/


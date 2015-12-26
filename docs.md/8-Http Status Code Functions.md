#List of HTTP status codes

Exemple with filters: 

```js

auth : function(req,res, next){
		if($Auth.guest){
			if($Request.ajax()){
				hs401('Authentication is required for this action');
			}else{
				res.redirect('/login');
			}
		}
		next();
	}

```
## hs100(msg)
if the msg is defined, msg equal to  Continue.

This means that the server has received the request headers, and that the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). If the request body is large, sending it to a server when a request has already been rejected based upon inappropriate headers is inefficient. To have a server check if the request could be accepted based on the request's headers alone, a client must send Expect: 100-continue as a header in its initial request and check if a 100 Continue status code is received in response before continuing (or receive 417 Expectation Failed and not continue).[6]

## hs101(msg)
if the msg is defined, msg equal to  Switching Protocols.

This means the requester has asked the server to switch protocols and the server is acknowledging that it will do so.[7]

## hs102(msg)
if the msg is defined, msg equal to  Processing .

As a WebDAV request may contain many sub-requests involving file operations, it may take a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[8] This prevents the client from timing out and assuming the request was lost.

## hs200(msg)
if the msg is defined, msg equal to  OK.

Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.[10]

## hs201(msg)
if the msg is defined, msg equal to  Created.

The request has been fulfilled and resulted in a new resource being created.[11]

## hs202(msg)
if the msg is defined, msg equal to  Accepted.

The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.[12]

## hs203(msg)
if the msg is defined, msg equal to  Non-Authoritative Information .

The server successfully processed the request, but is returning information that may be from another source.[13]

## hs204(msg)
if the msg is defined, msg equal to  No Content.

The server successfully processed the request, but is not returning any content.[14]

## hs205(msg)
if the msg is defined, msg equal to  Reset Content.

The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.[15]

## hs206(msg)
if the msg is defined, msg equal to  Partial Content .

The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams.[16]

## hs207(msg)
if the msg is defined, msg equal to  Multi-Status .

The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.[17]

## hs208(msg)
if the msg is defined, msg equal to  Already Reported .

The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.[18]

## hs226(msg)
if the msg is defined, msg equal to  IM Used .

The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.[19]

## hs300(msg)
if the msg is defined, msg equal to  Multiple Choices.

Indicates multiple options for the resource that the client may follow. It, for instance, could be used to present different format options for video, list files with different extensions, or word sense disambiguation.[22]

## hs301(msg)
if the msg is defined, msg equal to  Moved Permanently.

This and all future requests should be directed to the given URI.[23]

## hs302(msg)
if the msg is defined, msg equal to  Found.

This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"),[24] but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.[25] However, some Web applications and frameworks use the 302 status code as if it were the 303.[26]

## hs303(msg)
if the msg is defined, msg equal to  See Other .

The response to the request can be found under another URI using a GET method. When received in response to a POST (or PUT/DELETE), it should be assumed that the server has received the data and the redirect should be issued with a separate GET message.[27]

## hs304(msg)
if the msg is defined, msg equal to  Not Modified .

Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. This means that there is no need to retransmit the resource, since the client still has a previously-downloaded copy.[28]

## hs305(msg)
if the msg is defined, msg equal to  Use Proxy .

The requested resource is only available through a proxy, whose address is provided in the response. Many HTTP clients (such as Mozilla[29] and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.[30]

## hs306(msg)
if the msg is defined, msg equal to  Switch Proxy.

No longer used. Originally meant "Subsequent requests should use the specified proxy."[31]

## hs307(msg)
if the msg is defined, msg equal to  Temporary Redirect .

In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For instance, a POST request should be repeated using another POST request.[32]

## hs308(msg)
if the msg is defined, msg equal to  Permanent Redirect .

The request, and all future requests should be repeated using another URI. 307 and 308 (as proposed) parallel the behaviours of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.[33]

## hs308-Google(msg)
if the msg is defined, msg equal to 308 Resume Incomplete .

This code is used in the Resumable HTTP Requests Proposal to resume aborted PUT or POST requests.[34]

## hs400(msg)
if the msg is defined, msg equal to  Bad Request.

"The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."[36]

## hs401(msg)
if the msg is defined, msg equal to  Unauthorized .

Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication.[37] 401 semantically means "unauthenticated", i.e. "you don't have necessary credentials".

## hs402(msg)
if the msg is defined, msg equal to  Payment Required.

Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used. Google Developers API uses this status if a particular developer has exceeded the daily limit on requests.[38]

## hs403(msg)
if the msg is defined, msg equal to  Forbidden.

The request was a valid request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference.[39] 403 error semantically means "unauthorized", i.e. "you don't have necessary permissions for the resource".

## hs404(msg)
if the msg is defined, msg equal to  Not Found.

The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.[40]

## hs405(msg)
if the msg is defined, msg equal to  Method Not Allowed.

A request was made of a resource using a request method not supported by that resource; for example, using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource.

## hs406(msg)
if the msg is defined, msg equal to  Not Acceptable.

The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.[41]

## hs407(msg)
if the msg is defined, msg equal to  Proxy Authentication Required .

The client must first authenticate itself with the proxy.[42]

## hs408(msg)
if the msg is defined, msg equal to  Request Timeout.

The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."[43]

## hs409(msg)
if the msg is defined, msg equal to  Conflict.

Indicates that the request could not be processed because of conflict in the request, such as an edit conflict in the case of multiple updates.[44]

## hs410(msg)
if the msg is defined, msg equal to  Gone.

Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource again in the future. Clients such as search engines should remove the resource from their indices.[45] Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.

## hs411(msg)
if the msg is defined, msg equal to  Length Required.

The request did not specify the length of its content, which is required by the requested resource.[46]

## hs412(msg)
if the msg is defined, msg equal to  Precondition Failed .

The server does not meet one of the preconditions that the requester put on the request.[47]

## hs413(msg)
if the msg is defined, msg equal to  Payload Too Large .

The request is larger than the server is willing or able to process. Called "Request Entity Too Large" previously.[48]

## hs414(msg)
if the msg is defined, msg equal to  URI Too Long .

The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request.[49] Called "Request-URI Too Long" previously.[50]

## hs415(msg)
if the msg is defined, msg equal to  Unsupported Media Type.

The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.

## hs416(msg)
if the msg is defined, msg equal to  Range Not Satisfiable .

The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file.[51] Called "Requested Range Not Satisfiable" previously.[52]

## hs417(msg)
if the msg is defined, msg equal to  Expectation Failed.

The server cannot meet the requirements of the Expect request-header field.[53]

## hs418(msg)
if the msg is defined, msg equal to  I'm a teapot .

This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by tea pots requested to brew coffee.[54] This HTTP status is used as an easter egg in some websites, including Google.com.[55]

## hs419(msg)
if the msg is defined, msg equal to  Authentication Timeout .

Not a part of the HTTP standard, 419 Authentication Timeout denotes that previously valid authentication has expired. It is used as an alternative to 401 Unauthorized in order to differentiate from otherwise authenticated clients being denied access to specific server resources.[citation needed][56]

## hs420(msg)
if the msg is defined, msg equal to  Method Failure .

Not part of the HTTP standard, but defined by Spring in the HttpStatus class to be used when a method failed. This status code is deprecated by Spring.[57]

## hsundefined(msg)
if the msg is defined, msg equal to 420 Enhance Your Calm .

Not part of the HTTP standard, but returned by version 1 of the Twitter Search and Trends API when the client is being rate limited.[58] Other services may wish to implement the 429 Too Many Requests response code instead.

## hs421(msg)
if the msg is defined, msg equal to  Misdirected Request .

The request was directed at a server that is not able to produce a response (for example because a connection reuse).[59]

## hs422(msg)
if the msg is defined, msg equal to  Unprocessable Entity .

The request was well-formed but was unable to be followed due to semantic errors.[17]

## hs423(msg)
if the msg is defined, msg equal to  Locked .

The resource that is being accessed is locked.[17]

## hs424(msg)
if the msg is defined, msg equal to  Failed Dependency .

The request failed due to failure of a previous request (e.g., a PROPPATCH).[17]

## hs426(msg)
if the msg is defined, msg equal to  Upgrade Required.

The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.[60]

## hs428(msg)
if the msg is defined, msg equal to  Precondition Required .

The origin server requires the request to be conditional. Intended to prevent "the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."[61]

## hs429(msg)
if the msg is defined, msg equal to  Too Many Requests .

The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes.[61]

## hs431(msg)
if the msg is defined, msg equal to  Request Header Fields Too Large .

The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.[61]

## hs440(msg)
if the msg is defined, msg equal to  Login Timeout .

A Microsoft extension. Indicates that your session has expired.[62]

## hs444(msg)
if the msg is defined, msg equal to  No Response .

Used in Nginx logs to indicate that the server has returned no information to the client and closed the connection (useful as a deterrent for malware).[63]

## hs449(msg)
if the msg is defined, msg equal to  Retry With .

A Microsoft extension. The request should be retried after performing the appropriate action.[64]

## hs450(msg)
if the msg is defined, msg equal to  Blocked by Windows Parental Controls .

A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access to the given webpage.[65]

## hs451(msg)
if the msg is defined, msg equal to  Unavailable For Legal Reasons .

Defined in the internet draft "A New HTTP Status Code for Legally-restricted Resources".[66] Intended to be used when resource access is denied for legal reasons, e.g. censorship or government-mandated blocked access. A reference to the 1953 dystopian novel Fahrenheit 451, where books are outlawed.[67] and the autoignition temperature of paper (burning books).

## hs451-MS(msg)
if the msg is defined, msg equal to 451 Redirect .

Used in Exchange ActiveSync if there either is a more efficient server to use or the server cannot access the users' mailbox.[68]

## hs494(msg)
if the msg is defined, msg equal to  Request Header Too Large .

Nginx internal code similar to 431 but it was introduced earlier in version 0.9.4 (on January 21, 2011).[70][original research?]

## hs495(msg)
if the msg is defined, msg equal to  Cert Error .

Nginx internal code used when SSL client certificate error occurred to distinguish it from 4XX in a log and an error page redirection.[71]

## hs496(msg)
if the msg is defined, msg equal to  No Cert .

Nginx internal code used when client didn't provide certificate to distinguish it from 4XX in a log and an error page redirection.[72]

## hs497(msg)
if the msg is defined, msg equal to  HTTP to HTTPS .

Nginx internal code used for the plain HTTP requests that are sent to HTTPS port to distinguish it from 4XX in a log and an error page redirection.[citation needed]

## hs498(msg)
if the msg is defined, msg equal to  Token expired/invalid .

Returned by ArcGIS for Server. A code of 498 indicates an expired or otherwise invalid token.[73]

## hs499(msg)
if the msg is defined, msg equal to  Client Closed Request .

Used in Nginx logs to indicate when the connection has been closed by client while the server is still processing its request, making server unable to send a status code back.[74]

## hsundefined(msg)
if the msg is defined, msg equal to 499 Token required .

Returned by ArcGIS for Server. A code of 499 indicates that a token is required (if no token was submitted).[73]

## hs500(msg)
if the msg is defined, msg equal to  Internal Server Error.

A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.[77]

## hs501(msg)
if the msg is defined, msg equal to  Not Implemented.

The server either does not recognize the request method, or it lacks the ability to fulfill the request. Usually this implies future availability (e.g., a new feature of a web-service API).[78]

## hs502(msg)
if the msg is defined, msg equal to  Bad Gateway.

The server was acting as a gateway or proxy and received an invalid response from the upstream server.[79]

## hs503(msg)
if the msg is defined, msg equal to  Service Unavailable.

The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.[80]

## hs504(msg)
if the msg is defined, msg equal to  Gateway Timeout.

The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.[81]

## hs505(msg)
if the msg is defined, msg equal to  HTTP Version Not Supported.

The server does not support the HTTP protocol version used in the request.[82]

## hs506(msg)
if the msg is defined, msg equal to  Variant Also Negotiates .

Transparent content negotiation for the request results in a circular reference.[83]

## hs507(msg)
if the msg is defined, msg equal to  Insufficient Storage .

The server is unable to store the representation needed to complete the request.[17]

## hs508(msg)
if the msg is defined, msg equal to  Loop Detected .

The server detected an infinite loop while processing the request (sent in lieu of 208 Already Reported).

## hs509(msg)
if the msg is defined, msg equal to  Bandwidth Limit Exceeded [84].

This status code is not specified in any RFCs. Its use is unknown.

## hs510(msg)
if the msg is defined, msg equal to  Not Extended .

Further extensions to the request are required for the server to fulfil it.[85]

## hs511(msg)
if the msg is defined, msg equal to  Network Authentication Required .

The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).[61]

## hs520(msg)
if the msg is defined, msg equal to  Unknown Error.

This status code is not specified in any RFC and is returned by certain services, for instance Microsoft Azure and CloudFlare servers: "The 520 error is essentially a "catch-all" response for when the origin server returns something unexpected or something that is not tolerated/interpreted (protocol violation or empty response)."[86]

## hs522(msg)
if the msg is defined, msg equal to  Origin Connection Time-out.

This status code is not specified in any RFCs, but is used by CloudFlare's reverse proxies to signal that a server connection timed out.

## hs598(msg)
if the msg is defined, msg equal to  Network read timeout error .

This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.[citation needed][87]

## hs599(msg)
if the msg is defined, msg equal to  Network connect timeout error .

This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.[citation needed][88]
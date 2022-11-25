This is a reproduction of Tauri's handling of cookies in iframes to external sites. It works on Windows but not on MacOS.

## Instructions

1. Start the node server with `cd server && node server.js`. This hosts a very simple web server
2. To demonstrate expeced behavior, open `ui/index.html` in Chrome. You'll see an iframe, and after two seconds, you'll see `myCoolCookie=foo` in it
3. To demonstrate the same behavior in Tauri, use `yarn tauri dev`. On MacOS see the same iframe, but this time it will say "No cookies found". On Windows, you'll see the same thing as in the browser.


# What's happening?

The way this works is that the Node server is setting a cookie and then redirecting to another url. The handler for that URL simply reads the cookie and puts it onto the response. So what we're seeing is that the cookies aren't working when the iframe is hosted in Tauri.

In the network tab of the debugger, you can't see any sign of the cookies in either requests or responses.

Edit: this appears to be https://github.com/tauri-apps/wry/issues/444

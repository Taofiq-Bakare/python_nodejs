# How to use NodeJs to call Python APIs

This is a simple implementation of how to use NodeJs 
app to call Python API.
The API is implemented with FastApi--but the same can be achieved with any Python webserver/framework(Django,Flask e.t.c).
In this example, the NodeJs makes a *get* request to the localhost and gets a json payload as a response.

## Installing

Kindly install the Python requirements from the requiremnts.txt.

Also, install *axios* which is listed as a depency under the package.json for the NodeJs.

## Getting it to work

Run the main.py python script with 

``` uvicorn main:app --reload ```

And the nodejs with 

``` node/node_app/index.js ```

You should recieve the response:

``` {message: 'Hello World'} ```
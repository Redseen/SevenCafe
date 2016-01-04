#!/usr/bin/pythonCGI

import RPi.GPIO as GPIO
from flup.server.fcgi import WSGIServer
import sys, urlparse
 
GPIO.setmode(GPIO.BOARD)
GPIO.setup(15, GPIO.OUT)
GPIO.setup(11, GPIO.OUT)
 
def app(environ, start_response):
	start_response("200 OK", [("Content-Type", "text/plain"), ("Access-Control-Allow-Origin", "*")])
	v11 = GPIO.input(11)
	v15 = GPIO.input(15)

	ret = "0"
	if str(v11) == "1":
		ret = "1"
	elif str(v15) == "1":
		ret = "2"
	return [ret]

#	i = urlparse.parse_qs(environ["QUERY_STRING"])
#	yield (' ') # flup expects a string to be returned from this function
#	if "q" in i:
#		if i["q"][0] == "w":
#			GPIO.output(11, True) # Turn it on
#		elif i["q"][0] == "s":
#			GPIO.output(11, False) # Turn it off
 
WSGIServer(app).run()

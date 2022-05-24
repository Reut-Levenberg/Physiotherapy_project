import { useSelector, useDispatch } from 'react-redux';
import {changeDataRight, changeDataLeft, changeLabel} from '../actions/index'
import { useInterval } from 'usehooks-ts'
import React, { useState, useEffect } from 'react';
//import * as Paho from 'react-paho-mqtt';
import Paho from 'paho-mqtt';

const ReceivingDataA = () =>  {

    const dispatch = useDispatch();


    var hostname = "localhost";
var port = 9001;
var clientId = "WebSocket";
clientId += new Date().getUTCMilliseconds();;
var topic = "esp32_hx711";

var mqttClient = new Paho.Client(hostname, port, clientId);
mqttClient.onMessageArrived = MessageArrived;
mqttClient.onConnectionLost = ConnectionLost;
Connect();

/*Initiates a connection to the MQTT broker*/
function Connect(){
	mqttClient.connect({
	onSuccess: Connected,
	onFailure: ConnectionFailed,
	keepAliveInterval: 10,
});
}

/*Callback for successful MQTT connection */
function Connected() {
	//console.log("Connected to broker");
	mqttClient.subscribe(topic);
}

/*Callback for failed connection*/
function ConnectionFailed(res) {
	console.log("Connect failed:" + res.errorMessage);
}

/*Callback for lost connection*/
function ConnectionLost(res) {
	if (res.errorCode !== 0) {
		//console.log("Connection lost:" + res.errorMessage);
		Connect();
	}
}

/*Callback for incoming message processing */
function MessageArrived(message) {
	//console.log(message.destinationName +" : " + message.payloadString);
	//console.log(message.payloadString);
    var data = parseFloat(message.payloadString);
    // data = payload.toString();
    console.log(data);
    dispatch(changeDataLeft(data));
    dispatch(changeLabel());

	/*var a=parseInt(message.payloadString);
	switch(message.payloadString){
		case "ON":
			displayClass = "on";
			break;
		case "OFF":
			displayClass = "off";
			break;
		default:
			displayClass = "unknown";
	}
	var topic = message.destinationName.split("/");
	if (topic.length == 3){
		var ioname = topic[1];
		UpdateElement(ioname, displayClass);*/
    }

    /*
    const dispatch = useDispatch();
    var data = 0;
    const mqtt = require('mqtt/dist/mqtt');
    // alert("hey");
    const host = 'broker.emqx.io'
    //const host = '127.0.0.1'
    const port = '8083';
    //const port = '8080';
    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
    
    const connectUrl = `ws://${host}:${port}/mqtt`;
    const client = mqtt.connect(connectUrl, {
        clientId,
        clean: true,
        connectTimeout: 4000,
        username: 'emqx',
        password: 'public',
        // protocol: MQTTv311,
        // clean_session: true, 
        // userdata: null,
        // transport: "websockets",
        // clientId: 'web-client',
        // connectTimeout: 5000,
        // listener: 8080,
        // // hostname: '127.0.0.1',
        // protocol: "wss",
        // port: 9001,
        // path: '/mqtt',
        reconnectPeriod: 1000,});
        
        const topic = 'esp32_hx711';
        client.on('connect', () => {
            console.log('Connected')
            client.subscribe([topic], () => {
                console.log(`Subscribe to topic '${topic}'`)
            });
            // client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
            //     if (error) {
            //         console.error(error)
            //     }
            // });
        });
        
        client.on('message', (topic, payload) =>
        { console.log('Received Message:', topic, payload.toString());
        data = parseFloat(payload.toString());
        // data = payload.toString();
        console.log(data);
        dispatch(changeDataLeft(data));
        dispatch(changeLabel());

    });
    
    var interval = setInterval(function(){
    });

    //     useEffect(() => {
        
//   });



//   const [count, setCount] = useState(0);

//   useInterval(() => {
    //       setCount(count + 1)
    //     },1000)
    
    //     return(
        //         timeout()
        //     );
        
    }
    
    
    
    // const getRandomInt = (max) => {
    //     return Math.floor(Math.random() * max);
    // };
    
    // const Timeout = (num) => {
    //     const dispatch = useDispatch();
    //     const state = useSelector((state) => state.sideBar);
    //     if (num){
    //         console.log('timeout --->');
    //         setTimeout( () => {
    //             // let data = 80;
    //             let data = getRandomInt(80);
    //             console.log('data --->',data);
    //             dispatch(changeDataLeft(data));
    //             console.log(state);
    //             // Timeout();
    //         }, 10000);
    //         // Timeout(num--);
    //     }
    //     else
    //         return;
        
    // };*/
}
export default ReceivingDataA;
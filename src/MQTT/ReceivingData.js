import { useSelector, useDispatch } from 'react-redux';
import {changeDataRight, changeDataLeft} from '../actions/index'
import { useInterval } from 'usehooks-ts'
import React, { useState, useEffect } from 'react';

const ReceivingData = () =>  {
    
    const dispatch = useDispatch();
    var data = 0;
    const mqtt = require('mqtt/dist/mqtt');
    // alert("hey");
    const host = 'broker.emqx.io';
    const port = '1883';
    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
    
    const connectUrl = `mqtt://${host}:${port}`;
    const client = mqtt.connect(connectUrl, {
        clientId,
        clean: true,
        connectTimeout: 4000,
        username: 'emqx',
        password: 'public',
        reconnectPeriod: 1000,});
        
        const topic = 'esp32_hx711';
        client.on('connect', () => {
            console.log('Connected')
            client.subscribe([topic], () => {
                console.log(`Subscribe to topic '${topic}'`)
            });
            client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
                if (error) {
                    console.error(error)
                }
            });
        });
        
        client.on('message', (topic, payload) =>
        { console.log('Received Message:', topic, payload.toString());
        data = parseFloat(payload.toString());
        dispatch(changeDataLeft(data));
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
        
    // };
export default ReceivingData;
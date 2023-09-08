import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;

  onModuleInit() {
    this.registerConsumerEvents();
  }

  constructor() {
    this.socketClient = io('http://localhost:3001');
  }

  private registerConsumerEvents() {
    // this.socketClient.emit('newMessage', { msg: 'Hey, there!' });

    this.socketClient.on('connect', () => {
      console.log(':::::::::::::: CONNECTED TO GATEWAY :::::::::::::: ');
    });

    this.socketClient.on('onMessage', (payload: any) => {
      console.log('PAYLOAD :::::::::::::: ', payload);
    });
  }
}

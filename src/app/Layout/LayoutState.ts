import * as io from "socket.io-client";

export interface LayoutState {
    socket: SocketIOClient.Socket;
    position: string;
}

export const initialState: LayoutState = {
    socket: io.Socket,
    position: ""
}
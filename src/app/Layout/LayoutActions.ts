export enum LayoutActionTypes {
    SetSocket = "SET_SOCKET",
    SetPosition = "SET_POSITION"
}

export interface SetSocketAction {
    type: LayoutActionTypes.SetSocket;
    socket: SocketIOClient.Socket;
}

export interface SetPositionAction {
    type: LayoutActionTypes.SetPosition;
    position: string;
}
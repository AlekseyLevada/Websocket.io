import SocketIO from "socket.io-client";

const socket = SocketIO.connect('http://localhost:5000')

export const App = () => {
  return (
    <div className="App">
        <h1>
            Websocket
        </h1>
    </div>
  )
}


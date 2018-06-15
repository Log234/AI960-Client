import * as io from "socket.io-client";
import { RootState } from "app/reducers";
import { Layout } from "app/Layout/Layout";
import { connect } from "react-redux";

function mapStateToProps(state: RootState) {
    return {};
}

const mapDispatchToProps = (dispatch: any) =>
    ({
        initialize(): void {
            console.log(`Connecting...`);
            const socket = io.connect("http://localhost:8000");
            console.log(`Connected!`);

            socket.on('sendPosition', (data: string) => {
                console.log(`Position received: ${data}`);

            })
        }
    });

const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)((Layout) as any);

export default LayoutContainer;
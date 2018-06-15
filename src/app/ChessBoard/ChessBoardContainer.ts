import { RootState } from "app/reducers";
import { connect } from "react-redux";
import { ChessBoardProps, ChessBoard } from "app/ChessBoard/ChessBoard";

function mapStateToProps(state: RootState) {
    return {
        position: state.layout.position
    } as ChessBoardProps;
}


export default connect(mapStateToProps)((ChessBoard) as any);
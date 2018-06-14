import * as React from 'react';
// @ts-ignore
import Chess from 'react-chess';
import * as style from "./ChessBoard.css";

export class ChessBoard extends React.Component<{}, {}> {
  render() {
    return (
      <div className={style.chessboard}>
        <Chess allowMoves={false} pieces={['R@c8']} />
      </div>
    );
  }
}

import * as React from 'react';
// @ts-ignore
import Chess from 'react-chess';
import * as style from './ChessBoard.css';

export interface ChessBoardProps {
  position: string;
}

export class ChessBoard extends React.Component<ChessBoardProps, {}> {
  columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  convertPosition(): string[] {
    if (this.props.position === "") {
      return [];
    }

    let newPos = this.props.position.slice(0, this.props.position.indexOf(' '));
    let rows = newPos.split('/');

    const positions: string[] = [];
    for (let row = 0; row < 8; row++) {
      const curRow = rows[row];

      let column = 0;
      for (const piece of curRow) {
        const parsed = parseInt(piece);
        if (isNaN(parsed)) {
          const convertedPosition = `${piece}@${this.columns[column++]}${8 - row}`;
          positions.push(convertedPosition);
        } else {
          column += parsed;
        }
      }
    }

    return positions;
  }

  render() {
    return (
      <div className={style.chessboard}>
        <Chess allowMoves={false} pieces={this.convertPosition()} />
      </div>
    );
  }
}

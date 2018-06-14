import * as React from 'react';
import { Header } from 'app/Header';
import { ChessBoard } from 'app/ChessBoard';
import { Info } from 'app/Info';

export class Layout extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header />
        <span className="d-inline">
          <ChessBoard />
          <Info />
        </span>
      </div>
    );
  }
}
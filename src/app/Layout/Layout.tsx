import * as React from 'react';
import { Header } from 'app/Header';
import { Info } from 'app/Info';
import { Graph } from 'app/Graph/Graph';
import ChessBoardContainer from 'app/ChessBoard/ChessBoardContainer';

export interface LayoutProps {
  initialize: () => void
}

export class Layout extends React.Component<LayoutProps, {}> {
  constructor(props: LayoutProps) {
    super(props);
    props.initialize();
  }

  render() {
    return (
      <div className="bg-dark" style={{minHeight: "100%", width: "100%", position: "absolute"}}>
        <Header />
        <span className="d-inline">
          <ChessBoardContainer />
          <Info />
        </span>
        <Graph />
      </div>
    );
  }
}
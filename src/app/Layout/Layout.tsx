import * as React from 'react';
import { Header } from 'app/Header';
import { ChessBoard } from 'app/ChessBoard';
import { Info } from 'app/Info';
import { Graph } from 'app/Graph/Graph';

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
          <ChessBoard />
          <Info />
        </span>
        <Graph />
      </div>
    );
  }
}
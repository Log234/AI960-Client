import * as React from 'react';
import "spectre.css";

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div className="bg-dark">
        <h1 className="d-inline text-light">AI960</h1>
        <p className="d-inline text-light">v0.0.1</p>
      </div>
    );
  }
}

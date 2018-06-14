import * as React from 'react';
import "spectre.css";

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1 className="d-inline text-light pl-2">AI960</h1>
        <p className="d-inline text-light pl-1">v0.0.1</p>
      </div>
    );
  }
}

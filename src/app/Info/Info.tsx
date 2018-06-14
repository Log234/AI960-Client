import * as React from 'react';
import * as style from "./Info.css";

export class Info extends React.Component<{}, {}> {
  render() {
    return (
      <span className={style.info}>
        <p>Test</p>
        <label>Test2</label>
      </span>
    );
  }
}

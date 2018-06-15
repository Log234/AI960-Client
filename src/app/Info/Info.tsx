import * as React from 'react';
import * as style from "./Info.css";
import { DataLabel } from 'app/Info/DataLabel/DataLabel';

export class Info extends React.Component<{}, {}> {
  render() {
    return (
      <span className={style.info}>
        <DataLabel title="Games played" data={4} />
      </span>
    );
  }
}

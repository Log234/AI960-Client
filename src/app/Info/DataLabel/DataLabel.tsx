import * as React from 'react';
import * as styles from './DataLabel.css';

export interface DataLabelProps {
  title: string;
  data: number;
}

export class DataLabel extends React.Component<DataLabelProps, {}> {
  render() {
    return <label className={styles.datalabel}>{this.props.title + ': ' + this.props.data}</label>;
  }
}

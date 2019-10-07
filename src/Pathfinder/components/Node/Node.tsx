import React from 'react';
import './Node.styles.css';

type Props = {
  column: number;
  row: number;
};

const Node = (props: Props) => {
  return <div className="node"></div>;
};

export default Node;

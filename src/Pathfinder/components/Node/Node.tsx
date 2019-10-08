import React from 'react';
import './Node.styles.css';

export enum NodeType {
  START = 'start',
  END = 'end',
  DEFAULT = 'default',
}

type Props = {
  column: number;
  distance: number;
  id: string;
  isWall: boolean;
  row: number;
  type: NodeType;
};

const Node = (props: Props) => {
  return <div className={`node node--${props.type}`} title={props.id}></div>;
};

export default Node;

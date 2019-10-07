import React from 'react';
import Node from './components/Node';
import './Pathfinder.styles.css';

const GRID_WIDTH = 60;
const GRID_HEIGHT = 30;

const Pathfinder = () => {
  return (
    <div className="grid">
      {[...Array(GRID_HEIGHT)].map((_, i) => (
        <div className="row">
          {[...Array(GRID_WIDTH)].map((_, j) => {
            return <Node column={j} row={i} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Pathfinder;

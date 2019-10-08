import React, { useState } from 'react';
import Node from './components/Node';
import './Pathfinder.styles.css';
import { NodeType } from './components/Node/Node';
import djikstra from './lib/finders/dijkstra';

const GRID_HEIGHT = 30;
const GRID_WIDTH = 60;
const START_NODE_POSITION = [15, 15];
const END_NODE_POSITION = [15, 45];

const getNodeType = ({ row, col }: { row: number; col: number }) => {
  let type = NodeType.DEFAULT;

  if (row === START_NODE_POSITION[0] && col === START_NODE_POSITION[1]) {
    type = NodeType.START;
  }

  if (row === END_NODE_POSITION[0] && col === END_NODE_POSITION[1]) {
    type = NodeType.END;
  }

  return type;
};

type NodeState = {
  col: number;
  row: number;
  type: NodeType;
  id: string;
  distance: number;
  isWall: boolean;
};

const initialGridState: { [id: string]: NodeState } = {};

const getNodeId = ({ row, col }: { row: number; col: number }) => {
  return `c${col}:r${row}`;
};

const getInitialGrid = () => {
  return [...Array(GRID_HEIGHT)].map((_, row) => {
    return [...Array(GRID_WIDTH)].map((_, col) => {
      const id = getNodeId({ row, col });
      initialGridState[id] = {
        col,
        row,
        id,
        distance: Infinity,
        isWall: false,
        type: getNodeType({ row, col }),
      };

      return id;
    });
  });
};

const initialGrid = getInitialGrid();

const Pathfinder = () => {
  const [grid, setGrid] = useState(initialGridState);

  const runPathFinder = () => {
    // djikstra();
  };

  return (
    <div>
      <button onClick={runPathFinder}>Run!</button>
      <div className="grid">
        {initialGrid.map(row => {
          return (
            <div className="row">
              {row.map(id => {
                const node = grid[id];

                return (
                  <Node
                    column={node.col}
                    row={node.row}
                    type={node.type}
                    id={node.id}
                    distance={node.distance}
                    isWall={node.isWall}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pathfinder;

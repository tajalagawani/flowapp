// Canvas.tsx
import React from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import { Tooltip, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import CanvasToolBar from './navigation-header-with-search/App';
interface CanvasProps {
  showNodeList: () => void;
}

const Canvas: React.FC<CanvasProps> = ({ showNodeList }) => {
  return (
    <div className="flex h-full w-full relative">
      <ReactFlow elements={[]} style={{ width: '100%', height: '100%' }}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      <div className="absolute top-4 left-4">
        <Tooltip content="Add Node" placement="right">
     
          <Button auto flat onPress={showNodeList}>
            <Icon icon="carbon:add" width={24} height={24} />
          </Button>
          
        </Tooltip>
        < CanvasToolBar>
        </CanvasToolBar>
      </div>
    </div>
  );
};

export default Canvas;

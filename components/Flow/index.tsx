// components/Flow/index.tsx
import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
} from 'reactflow';
import { nodes as initialNodes, edges as initialEdges } from './initial-elements';
import AnnotationNode from './AnnotationNode';
import ToolbarNode from './ToolbarNode';
import ResizerNode from './ResizerNode';
import CircleNode from './CircleNode';
import TextNode from './TextNode';
import StartNode from './StartNode';
import WebhookNode from './WebhookNode';
import SimulateNode from './SimulateNode';
import ButtonEdge from './ButtonEdge';
import 'reactflow/dist/style.css';
import './overview.css';
import { Button, Tooltip } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import './CustomNodes.css';

const nodeTypes = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextNode,
  start: StartNode,
  webhook: WebhookNode,
  simulate: SimulateNode,
};

const edgeTypes = {
  button: ButtonEdge,
  Cercle: CircleNode,
};

const nodeClassName = (node) => node.type;

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const NodeList = () => {
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      className="overview"
    >
      <MiniMap zoomable pannable nodeClassName={nodeClassName} />
      <div className="absolute top-4 left-0">
      {/* <Tooltip content="Add Node" placement="right">
          <Button auto flat onPress={NodeList}>
            <Icon icon="carbon:add" width={24} height={24} />
          </Button>
        </Tooltip> */}
      </div>
      
      <Controls />
      <Background
        id="2"
        gap={10}
        color="#C9C9C9"
        variant={BackgroundVariant.Dots}
      />    </ReactFlow>
      
  );
};

export default Flow;

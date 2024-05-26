// initial-elements.ts

import { MarkerType } from 'reactflow';

export const nodes = [
  {
    id: 'annotation-1',
    type: 'annotation',
    draggable: true,
    selectable: true,
    data: {
      level: 1,
      label: 'Built-in node and edge types. Draggable, deletable and connectable!',
      arrowStyle: {
        right: 0,
        bottom: 0,
        transform: 'translate(-30px,10px) rotate(-80deg)',
      },
    },
    position: { x: -80, y: -30 },
  },
  // {
  //   id: '1-1',
  //   type: 'input',
  //   data: {
  //     label: 'Input Node',
  //   },
  //   position: { x: 150, y: 0 },
  // },
  // {
  //   id: '1-2',
  //   type: 'default',
  //   data: {
  //     label: 'Default Node',
  //   },
  //   position: { x: 0, y: 100 },
  // },
  // {
  //   id: '1-3',
  //   type: 'output',
  //   data: {
  //     label: 'Output Node',
  //   },
  //   position: { x: 300, y: 100 },
  // },
  // {
  //   id: 'annotation-2',
  //   type: 'annotation',
  //   draggable: false,
  //   selectable: false,
  //   data: {
  //     level: 2,
  //     label: 'Sub flows, toolbars and resizable nodes!',
  //     arrowStyle: {
  //       left: 0,
  //       bottom: 0,
  //       transform: 'translate(5px, 25px) scale(1, -1) rotate(100deg)',
  //     },
  //   },
  //   position: { x: 220, y: 200 },
  // },
  // {
  //   id: '2-1',
  //   type: 'group',
  //   position: {
  //     x: -170,
  //     y: 250,
  //   },
  //   style: {
  //     width: 380,
  //     height: 180,
  //     backgroundColor: 'rgba(208, 192, 247, 0.2)',
  //   },
  // },
  // {
  //   id: '2-2',
  //   data: {
  //     label: 'Node with Toolbar',
  //   },
  //   type: 'tools',
  //   position: { x: 50, y: 50 },
  //   style: {
  //     width: 80,
  //     height: 80,
  //     background: 'rgb(208, 192, 247)',
  //   },
  //   parentId: '2-1',
  //   extent: 'parent',
  // },
  // {
  //   id: '2-3',
  //   type: 'resizer',
  //   data: {
  //     label: 'resizable node',
  //   },
  //   position: { x: 250, y: 50 },
  //   style: {
  //     width: 80,
  //     height: 80,
  //     background: 'rgb(208, 192, 247)',
  //     color: 'white',
  //   },
  //   parentId: '2-1',
  //   extent: 'parent',
  // },
  // {
  //   id: 'annotation-3',
  //   type: 'annotation',
  //   draggable: false,
  //   selectable: false,
  //   data: {
  //     level: 3,
  //     label: <>Nodes and edges can be anything and are fully customizable!</>,
  //     arrowStyle: {
  //       right: 0,
  //       bottom: 0,
  //       transform: 'translate(-35px, 20px) rotate(-80deg)',
  //     },
  //   },
  //   position: { x: -40, y: 570 },
  // },
  // {
  //   id: '3-2',
  //   type: 'textinput',
  //   position: { x: 150, y: 650 },
  //   data: {},
  // },
  // {
  //   id: '3-1',
  //   type: 'circle',
  //   position: { x: 350, y: 500 },
  //   data: {},
  // },
  // // New custom nodes
  {
    id: 'start-1',
    type: 'start',
    position: { x: 100, y: 50 },
    data: { label: 'Start' },
  },
  {
    id: 'webhook-1',
    type: 'webhook',
    position: { x: 300, y: 50 },
    data: { label: 'Webhook' },
  },
  {
    id: 'simulate-1',
    type: 'simulate',
    position: { x: 500, y: 50 },
    data: { label: 'Simulate' },
  },
];

export const edges = [
  {
    id: 'e1-2',
    source: '1-1',
    target: '1-2',
    label: 'edge',
    type: 'smoothstep',
  },
  {
    id: 'e1-3',
    source: '1-1',
    target: '1-3',
    animated: true,
    label: 'animated edge',
  },
  {
    id: 'e2-2',
    source: '1-2',
    target: '2-2',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e2-3',
    source: '2-2',
    target: '2-3',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e3-3',
    source: '2-3',
    sourceHandle: 'right',
    target: '3-2',
    type: 'button',
    animated: true,
    style: { stroke: 'rgb(158, 118, 255)', strokeWidth: 2 },
  },
  {
    id: 'e3-4',
    source: '2-3',
    sourceHandle: 'left',
    target: '3-1',
    type: 'button',
    style: { strokeWidth: 2 },
  },
  // New edges connecting new nodes
  {
    id: 'e-start-webhook',
    source: 'start-1',
    sourceHandle: 'right',
    target: 'webhook-1',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'trigger',
  },
  {
    id: 'e-webhook-simulate',
    source: 'webhook-1',
    selectable: true,

    sourceHandle: 'right',
    target: 'simulate-1',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'process',
  },
];

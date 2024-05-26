// components/Flow/StartNode.tsx
import React from 'react';
import BaseNode from './BaseNode';
import { Icon } from '@iconify/react';

const StartNode = (props) => (
  <BaseNode {...props} icon={<Icon icon="mdi:cursor-default-click" />} nodeType="start-node" />
);

export default StartNode;

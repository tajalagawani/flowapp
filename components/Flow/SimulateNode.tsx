import React from 'react';
import BaseNode from './BaseNode';
import { Icon } from '@iconify/react';

const SimulateNode = (props) => (
  <BaseNode {...props} icon={<Icon icon="mdi:code-braces" />} nodeType="simulate-node" />
);

export default SimulateNode;

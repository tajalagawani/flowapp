// components/Flow/WebhookNode.tsx
import React from 'react';
import BaseNode from './BaseNode';
import { Icon } from '@iconify/react';

const WebhookNode = (props) => (
  <BaseNode {...props} icon={<Icon icon="mdi:webhook" />} nodeType="webhook-node" />
);

export default WebhookNode;

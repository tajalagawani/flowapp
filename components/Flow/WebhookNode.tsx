// components/Flow/WebhookNode.tsx
"use client";

import React from 'react';
import BaseNode from './BaseNode';
import { Icon } from '@iconify/react';
import { Card, CardBody, Avatar, Button, Badge, Input, Spacer, Textarea, Tabs, Tab } from "@nextui-org/react";

const WebhookNodeSettings = () => (
  <div className="p-8">
    <div className="flex items-center justify-between">
      <p className="text-2xl font-medium text-default-700 pb-4">Webhook</p> {/* Increased font size */}
 
    </div>
    <p className="text-sm text-default-500 pb-4">This node is used to handle webhook events and trigger workflows based on those events.</p>
  
    <div className="my-2 p-0">
      <Tabs aria-label="Webhook URLs">
        <Tab key="test-url" title="TEST URL">
          <div className="pb-0">
            <p className="text-sm text-default-400 break-all">
              http://localhost:5678/webhook-test/78a793b0-e4da-4271-84a5-18af69c63c10
            </p>
          </div>
        </Tab>
        <Tab key="production-url" title="PRODUCTION URL">
          <div className="pt-1">
            <p className="text-sm text-default-400 break-all">
              http://localhost:5678/webhook-prod/78a793b0-e4da-4271-84a5-18af69c63c10
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>

    <Input fullWidth label="Authentication" defaultValue="Basic Auth" className="mb-4 pt-10" />
    <Input fullWidth label="Credential for Basic Auth" defaultValue="Unnamed credential" className="mb-4 p-1" />
    <Input fullWidth label="HTTP Method" defaultValue="GET" className="mb-4 p-1" />
    <Input fullWidth label="Path" defaultValue="78a793b0-e4da-4271-84a5-18af69c63c10" className="mb-4 p-1" />
    <Input fullWidth label="Respond" defaultValue="Immediately" className="mb-4 p-1" />
    <Input fullWidth label="Response Code" defaultValue="200" className="mb-4 p-1" />
    <p className="text-base font-medium text-default-700">Options</p>
    <p className="text-sm text-default-400 mb-4">No properties</p>
    <Button variant="outlined" fullWidth>
      Add Option
    </Button>
  </div>
);

const WebhookNode = (props) => (
  <BaseNode
    {...props}
    icon={<Icon icon="mdi:webhook" />}
    nodeType="webhook-node"
    customSettings={<WebhookNodeSettings />}
  />
);

export default WebhookNode;

// SidebarCompact.tsx
"use client";

import React, { useState, useCallback } from "react";
import { Avatar, Button, ScrollShadow, Spacer, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "usehooks-ts";
import ReactFlowPro from "../workflow-builder-pro-example/src/App"
import { AcmeLogo } from "./acme";
import { sectionItemsWithTeams } from "./sidebar-items";
import { cn } from "./cn";

import Sidebar from "./sidebar";
import NodeList from '../NodeList';
import Flow from '../Flow/index';

const categories = [
  {
    key: 'trigger',
    title: 'Trigger',
    nodes: [
      { key: 'node1', title: 'HTTP Request', icon: 'carbon:request-quote', description: 'Trigger via HTTP request' },
      { key: 'node2', title: 'Webhook', icon: 'carbon:webhook', description: 'Trigger via Webhook' }
    ]
  },
  {
    key: 'actions',
    title: 'Actions',
    nodes: [
      { key: 'node3', title: 'Send Email', icon: 'carbon:email', description: 'Send an email' },
      { key: 'node4', title: 'Create Record', icon: 'carbon:document', description: 'Create a new record' }
    ]
  },
  {
    key: 'services',
    title: 'Services',
    nodes: [
      { key: 'node5', title: 'Slack', icon: 'carbon:logo-slack', description: 'Integrate with Slack' },
      { key: 'node6', title: 'Google Sheets', icon: 'carbon:logo-google', description: 'Integrate with Google Sheets' }
    ]
  },
  {
    key: 'transform',
    title: 'Transform',
    nodes: [
      { key: 'node7', title: 'Format Data', icon: 'carbon:data', description: 'Format data' },
      { key: 'node8', title: 'Parse JSON', icon: 'carbon:code', description: 'Parse JSON data' }
    ]
  },
  {
    key: 'other',
    title: 'Other',
    nodes: [
      { key: 'node9', title: 'Delay', icon: 'carbon:time', description: 'Introduce a delay' },
      { key: 'node10', title: 'Condition', icon: 'carbon:flow', description: 'Conditionally execute' }
    ]
  }
];

export default function SidebarCompact() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isNodeListVisible, setIsNodeListVisible] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isCompact = isCollapsed || isMobile;

  const onToggle = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);

  const showNodeList = useCallback(() => {
    setIsNodeListVisible(true);
  }, []);

  const resetSidebar = useCallback(() => {
    setIsNodeListVisible(false);
  }, []);

  const handleNodeSelect = useCallback((key: string) => {
    console.log(`Node selected: ${key}`);
    resetSidebar();
  }, [resetSidebar]);

  return (
    <div className="flex h-dvh w-full">
      <div
        className={cn(
          "relative flex h-full w-72 flex-col !border-r-small border-divider p-4 transition-width",
          {
            "w-16 items-center px-2 py-4": isCompact,
          }
        )}
      >
        <div
          className={cn(
            "flex items-center gap-0 px-0",
            {
              "justify-center gap-0": isCompact,
            }
          )}
        >
 
        </div>
       
        <Spacer y={2} />
        <div className="flex items-center gap-3 px-3">
          <Avatar
            isBordered
            className="flex-none"
            size="sm"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
          <div className={cn("flex max-w-full flex-col", { hidden: isCompact })}>
            <p className="truncate text-small font-medium text-default-600">John Doe</p>
            <p className="truncate text-tiny text-default-400">Product Designer</p>
          </div>
        </div>
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          {isNodeListVisible ? (
            <NodeList categories={categories} onSelect={handleNodeSelect} />
          ) : (
            <Sidebar 
              defaultSelectedKey="home" 
              isCompact={isCompact} 
              items={sectionItemsWithTeams} 
              onSelect={() => resetSidebar()}
            />
          )}
        </ScrollShadow>
        <Spacer y={2} />
        <div
          className={cn("mt-auto flex flex-col", {
            "items-center": isCompact,
          })}
        >
          <Tooltip content="Help & Feedback" isDisabled={!isCompact} placement="right">
            <Button
              fullWidth
              className={cn(
                "justify-start truncate text-default-500 data-[hover=true]:text-foreground",
                {
                  "justify-center": isCompact,
                }
              )}
              isIconOnly={isCompact}
              startContent={
                isCompact ? null : (
                  <Icon
                    className="flex-none text-default-500"
                    icon="solar:info-circle-line-duotone"
                    width={24}
                  />
                )
              }
              variant="light"
            >
              {isCompact ? (
                <Icon
                  className="text-default-500"
                  icon="solar:info-circle-line-duotone"
                  width={24}
                />
              ) : (
                "Help & Information"
              )}
            </Button>
            
          </Tooltip>
          <Tooltip content="Log Out" isDisabled={!isCompact} placement="right">
            
            <Button
              className={cn("justify-start text-default-500 data-[hover=true]:text-foreground", {
                "justify-center": isCompact,
              })}
              isIconOnly={isCompact}
              startContent={
                isCompact ? null : (
                  <Icon
                    className="flex-none rotate-180 text-default-500"
                    icon="solar:minus-circle-line-duotone"
                    width={24}
                  />
                )
              }
              variant="light"
            >
              {isCompact ? (
                <Icon
                  className="rotate-180 text-default-500"
                  icon="solar:minus-circle-line-duotone"
                  width={24}
                />
              ) : (
                "Log Out"
              )}
            </Button>
            
            
       
          </Tooltip>
      
        </div>
      </div>
      
      <div className="w-full flex-1 flex-col p-2">
      <Button onPress={onToggle}>
            <Icon
              className="text-default-20 p-10px"
              height={24}
              
              icon="solar:sidebar-minimalistic-outline"
              width={24}
            />
          </Button>
      <Flow  />
      
      </div>
    </div>
  );
}

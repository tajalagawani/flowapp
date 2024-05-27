"use client";
import React, { memo, FC, CSSProperties, useState } from 'react';
import { Handle, Position, NodeProps, NodeToolbar } from 'reactflow';
import { Icon } from '@iconify/react';
import { Button, Tooltip } from '@nextui-org/react';
import DraggablePanels from './panelsModal'; // Adjust the import path as needed
import NodeSettings from '../settings-layout/NodeSettings'; // Adjust the import path as needed

const handleStyle: CSSProperties = {
  width: 10,
  height: 10,
  borderRadius: '50%',
  background: '#555',
};

const nodeStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  padding: '10px',
  width: '110px',
  height: '110px',
  textAlign: 'center',
  position: 'relative',
};

const selectedNodeStyle: CSSProperties = {
  border: '2px solid #ff5722',
};

const headerStyle: CSSProperties = {
  fontSize: '12px',
  color: '#4d4d4d',
  marginTop: '5px',
};

const labelStyle: CSSProperties = {
  position: 'absolute',
  color: '#555',
  bottom: -15,
  fontSize: 8,
};

const toolbarStyle: CSSProperties = {
  display: 'flex',
  gap: '5px',
  padding: '5px',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  marginTop: '5px',
};

const buttonStyle: CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  overflow: 'hidden',
};

const logBarStyle: CSSProperties = {
  width: 'calc(100% - 10px)',
  backgroundColor: 'black',
  color: 'white',
  padding: '2px 5px',
  borderRadius: '10px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '5px',
  left: '5px',
};

const marqueeContainerStyle: CSSProperties = {
  display: 'flex',
  overflow: 'hidden',
  flex: 1,
};

const marqueeStyle: CSSProperties = {
  display: 'inline-block',
  whiteSpace: 'nowrap',
  animation: 'marquee 7s linear infinite',
  fontSize: '8px',
};

const greenDotStyle: CSSProperties = {
  display: 'inline-block',
  width: '6px',
  height: '6px',
  backgroundColor: 'green',
  borderRadius: '50%',
  marginRight: '5px',
  flexShrink: 0,
};

const actionButtonStyle: CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0 5px',
  fontSize: '10px',
  color: 'gray',
};

interface BaseNodeProps extends NodeProps {
  icon: JSX.Element;
  nodeType: string;
  customSettings?: JSX.Element; // Add customSettings prop
}

const BaseNode: FC<BaseNodeProps> = ({ data, icon, nodeType, selected, customSettings }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDoubleClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className={`custom-node ${nodeType}`}
        style={{ ...nodeStyle, ...(selected ? selectedNodeStyle : { border: '2px solid #4d4d4d' }) }}
        onDoubleClick={handleDoubleClick}
      >
        {selected && (
          <>
            <NodeToolbar isVisible={selected} style={toolbarStyle}>
              <Tooltip content="Stop" placement="top">
                <button style={buttonStyle}>
                  <Icon icon="mdi:stop" />
                </button>
              </Tooltip>
              <Tooltip content="Pause" placement="top">
                <button style={buttonStyle}>
                  <Icon icon="mdi:pause" />
                </button>
              </Tooltip>
              <Tooltip content="Refresh" placement="top">
                <button style={buttonStyle}>
                  <Icon icon="mdi:refresh" />
                </button>
              </Tooltip>
            </NodeToolbar>
            <div style={logBarStyle}>
              <span style={greenDotStyle}></span>
              <div style={marqueeContainerStyle}>
                <div style={marqueeStyle}>
                  Here the log of the node is displayed in a scrolling manner
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'absolute', bottom: '5px', padding: '0 10px' }}>
              <Tooltip content="Edit" placement="top">
                <button style={actionButtonStyle}>
                  <Icon icon="mdi:pencil" />
                </button>
              </Tooltip>
              <Tooltip content="Delete" placement="top">
                <button style={actionButtonStyle}>
                  <Icon icon="mdi:delete" />
                </button>
              </Tooltip>
              <Tooltip content="Duplicate" placement="top">
                <button style={actionButtonStyle}>
                  <Icon icon="mdi:content-copy" />
                </button>
              </Tooltip>
            </div>
          </>
        )}
        <Handle type="target" position={Position.Left} id="left" style={handleStyle} />
        <div style={{ fontSize: '24px' }}>{icon}</div>
        <div style={headerStyle}>
          <strong>{data.label}</strong>
        </div>
        <Handle type="source" position={Position.Right} id="right" style={handleStyle} />
        <div style={labelStyle}>{data.label}</div>
      </div>
      {isModalOpen && (
        <DraggablePanels
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          nodeDescription={data.description || "Node Description"}
          customSettings={
            customSettings ? (
              customSettings
            ) : (
              <NodeSettings
                nodeName={data.label}
                nodeDescription={data.description || "Node Description"}
              />
            )
          }
        />
      )}
    </>
  );
};

export default memo(BaseNode);

// components/Flow/BaseNode.tsx
import React, { memo, FC, CSSProperties, useState } from 'react';
import { Handle, Position, NodeProps, NodeToolbar } from 'reactflow';
import { Tooltip, Input } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import DraggablePanels from './panelsModal'; // Adjust the import path as needed

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
  borderRadius: '5px',
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
  animation: 'marquee 3s linear infinite',
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
  fontSize: '14px',
};

interface BaseNodeProps extends NodeProps {
  icon: JSX.Element;
  nodeType: string;
  children?: React.ReactNode;
}

const BaseNode: FC<BaseNodeProps> = ({ data, icon, nodeType, selected, children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [label, setLabel] = useState(data.label);
  const [textColor, setTextColor] = useState('#000');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(label);
    alert('Label copied to clipboard!');
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <>
      <div
        className={`custom-node ${nodeType}`}
        style={{
          ...nodeStyle,
          ...(selected ? selectedNodeStyle : { border: '2px solid #4d4d4d' }),
        }}
        onDoubleClick={openSettings}
      >
        {selected && (
          <NodeToolbar isVisible={selected} style={toolbarStyle}>
            <Tooltip content="Edit Text" placement="top">
              <button style={buttonStyle} onClick={toggleEditing}>
                <Icon icon="mdi:pencil" />
              </button>
            </Tooltip>
            <Tooltip content="Copy Text" placement="top">
              <button style={buttonStyle} onClick={handleCopy}>
                <Icon icon="mdi:content-copy" />
              </button>
            </Tooltip>
            <Tooltip content="Change Text Color" placement="top">
              <input
                type="color"
                value={textColor}
                onChange={handleTextColorChange}
                aria-label="Change text color"
              />
            </Tooltip>
          </NodeToolbar>
        )}
        <Handle type="target" position={Position.Left} id="left" style={handleStyle} />
        <div style={{ fontSize: '24px' }}>{icon}</div>
        <div style={{ color: textColor }}>
          {isEditing ? (
            <Input
              fullWidth
              value={label}
              onChange={handleLabelChange}
              onBlur={toggleEditing}
              aria-label="Edit text"
              autoFocus
            />
          ) : (
            <div onDoubleClick={toggleEditing}>{label}</div>
          )}
        </div>
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
        <Handle type="source" position={Position.Right} id="right" style={handleStyle} />
      </div>
      {isSettingsOpen && (
        <DraggablePanels
          isOpen={isSettingsOpen}
          onClose={closeSettings}
          nodeName={label}
          nodeDescription={data.description || "Node Description"}
        >
          {children}
        </DraggablePanels>
      )}
    </>
  );
};

export default memo(BaseNode);

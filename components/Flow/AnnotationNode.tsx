// components/Flow/AnnotationNode.tsx
import React, { memo, useState, CSSProperties } from 'react';
import { NodeToolbar } from 'reactflow';
import { Tooltip, Textarea } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const nodeStyle: CSSProperties = {
//   padding: 10,
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: '#fff',
//   borderRadius: '12px',
//   boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
//   position: 'relative',
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

function AnnotationNode({ data, selected }) {
  const [label, setLabel] = useState(data.label);
  const [textColor, setTextColor] = useState('#000');
  const [isEditing, setIsEditing] = useState(false);

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

  return (
    <div style={{ ...nodeStyle }}>
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
      <div style={{ padding: 10, display: 'flex', color: textColor, width: '100%' }}>
        <div style={{ marginRight: 4 }}>{data.level}.</div>
        {isEditing ? (
          <Textarea
            fullWidth
            value={label}
            onChange={handleLabelChange}
            onBlur={toggleEditing}
            aria-label="Edit text"
            autoFocus
            rows={3}
          />
        ) : (
          <div onDoubleClick={toggleEditing} style={{ whiteSpace: 'pre-wrap' }}>
            {label}
          </div>
        )}
      </div>
      {data.arrowStyle && (
        <div className="arrow" style={data.arrowStyle}>
          ⤹
        </div>
      )}
    </div>
  );
}

export default memo(AnnotationNode);

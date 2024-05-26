import React, { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

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
  border: '2px solid #4d4d4d',
  borderRadius: '4px',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  padding: '20px',
  width: '150px',
  height: '50px',
  textAlign: 'center',
};

const headerStyle: CSSProperties = {
  fontSize: '14px',
  color: '#4d4d4d',
};

const CustomNode: FC<NodeProps> = ({ data }) => {
  return (
    <div style={nodeStyle}>
      <Handle type="target" position={Position.Top} style={handleStyle} />
      <div style={headerStyle}>
        <strong>{data.label || 'Start'}</strong>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{ ...handleStyle, left: '50%', transform: 'translateX(-50%)' }}
      />
    </div>
  );
};

export default memo(CustomNode);

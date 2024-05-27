// components/DraggablePanels.tsx
import React, { useState } from 'react';
import { Modal, Box, Paper } from '@mui/material';
import OutputPane from './OutputPane';
import InputPane from './InputPane';
import NodeSettings from '../settings-layout/NodeSettings'; // Ensure this is the correct import path

function DraggablePanels({ isOpen, onClose, nodeName, nodeDescription, customSettings }) {
  const transitionStyle = {
    transition: 'width 0s ease',
  };
  const containerWidth = 1460;
  const minimumBoxWidth = 290;
  const minimumMiddleBoxWidth = 440;
  const [expanded, setExpanded] = useState(null);

  const expandBox = (box) => {
    setExpanded(expanded === box ? null : box);
  };

  const [sizes, setSizes] = useState({
    leftWidth: 560,
    rightWidth: 560,
  });

  const handleMouseDown = (event) => {
    const startX = event.clientX;
    const startLeftWidth = sizes.leftWidth;
    document.body.style.userSelect = 'none';

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      let newLeftWidth = Math.max(startLeftWidth + deltaX, minimumBoxWidth);
      let newRightWidth = containerWidth - newLeftWidth - minimumMiddleBoxWidth;

      if (newRightWidth < minimumBoxWidth) {
        newRightWidth = minimumBoxWidth;
        newLeftWidth = containerWidth - minimumMiddleBoxWidth - newRightWidth;
      }

      setSizes({
        leftWidth: newLeftWidth,
        rightWidth: newRightWidth,
      });
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Paper
        sx={{
          width: '100%',
          maxWidth: containerWidth,
          height: '95%',
          padding: '4px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderRadius: '12px',
          overflow: 'hidden',
          '&:focus': {
            outline: 'none',
          },
          '&:focus-visible': {
            boxShadow: '1px 0 20px -20px rgba(0,0,0,0.6), -8px 0 15px -10px rgba(0,0,0,0.6)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderRadius: '12px',
            borderTopLeftRadius: '15px',
            marginTop: 1,
            '&:focus-visible': {
              boxShadow: '1px 0 20px -20px rgba(0,0,0,0.6), -8px 0 15px -10px rgba(0,0,0,0.6)',
            },
          }}
        >
          <Paper
            sx={{
              width: sizes.leftWidth,
              height: '90%',
              overflow: 'auto',
              backgroundColor: '#f1f3f8',
              marginTop: 5,
              ...transitionStyle,
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
              borderRadius: '12px',
              zIndex: 0,
              boxShadow: '1px 0 20px -20px rgba(0,0,0,0.1), -8px 0 15px -10px rgba(0,0,0,0.6)',
            }}
          >
            <InputPane />
          </Paper>
          <Paper
            sx={{
              width: minimumMiddleBoxWidth,
              height: '100%',
              paddingTop: '19px',
              overflow: 'auto',
              boxShadow: '1px 0 20px -20px rgba(0,0,0,0.6), -8px 0 15px -10px rgba(0,0,0,0.6)',
              margin: -1,
              ...transitionStyle,
              borderRadius: '12px',
              position: 'relative',
              zIndex: 2,
            }}
            onMouseDown={handleMouseDown}
          >
            {customSettings ? customSettings : <NodeSettings nodeName={nodeName} nodeDescription={nodeDescription} />}
          </Paper>
          <Paper
            sx={{
              width: sizes.rightWidth,
              height: '90%',
              marginTop: 5,
              ...transitionStyle,
              backgroundColor: '#f1f3f8',
              overflow: 'auto',
              borderTopRightRadius: '15px',
              borderBottomRightRadius: '15px',
              zIndex: 1,
              boxShadow: '1px 0 20px -20px rgba(0,0,0,0.6), -8px 0 15px -10px rgba(0,0,0,0.6)',
            }}
          >
            <OutputPane />
          </Paper>
        </Box>
      </Paper>
    </Modal>
  );
}

export default DraggablePanels;

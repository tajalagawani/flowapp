// components/NodeSettingsModal.tsx
import React from 'react';
import { Modal, Paper } from '@mui/material';
import ProfileSetting from './settings-layout/profile-setting'; // Adjust the import path as needed

interface NodeSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const NodeSettingsModal: React.FC<NodeSettingsModalProps> = ({ isOpen, onClose, data }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Paper
        sx={{
          width: '400px',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '12px',
        }}
      >
        <ProfileSetting />
      </Paper>
    </Modal>
  );
};

export default NodeSettingsModal;

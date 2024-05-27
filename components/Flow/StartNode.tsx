// components/Flow/StartNode.tsx
import React from 'react';
import BaseNode from './BaseNode';
import { Icon } from '@iconify/react';
import { Box, Typography, TextField, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';

const StartNodeSettings = () => (
  <Box sx={{ p: 4 }}> {/* Increased padding */}
    <Typography variant="h6" gutterBottom>Schedule Trigger</Typography>
    <Button variant="contained" color="secondary" sx={{ mb: 2 }}>Execute node</Button>
    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
      This workflow will run on the schedule you define here once you activate it.
      For testing, you can also trigger it manually by going back to the canvas and clicking 'execute workflow'.
    </Typography>
    <Typography variant="subtitle1" gutterBottom>Trigger Rules</Typography>
    <FormControl fullWidth margin="normal">
      <InputLabel>Trigger Interval</InputLabel>
      <Select defaultValue="Days">
        <MenuItem value="Days">Days</MenuItem>
      </Select>
    </FormControl>
    <TextField fullWidth label="Days Between Triggers" defaultValue="1" variant="outlined" margin="normal" />
    <FormControl fullWidth margin="normal">
      <InputLabel>Trigger at Hour</InputLabel>
      <Select defaultValue="Midnight">
        <MenuItem value="Midnight">Midnight</MenuItem>
      </Select>
    </FormControl>
    <TextField fullWidth label="Trigger at Minute" defaultValue="0" variant="outlined" margin="normal" />
    <Button variant="outlined" fullWidth sx={{ mt: 2 }}>Add Rule</Button>
  </Box>
);

const StartNode = (props) => (
  <BaseNode
    {...props}
    icon={<Icon icon="mdi:cursor-default-click" />}
    nodeType="start-node"
    customSettings={<StartNodeSettings />}
  />
);

export default StartNode;

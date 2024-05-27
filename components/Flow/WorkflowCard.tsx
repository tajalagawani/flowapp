import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, Button } from '@mui/material';

interface WorkflowCardProps {
  id: string;
  title: string;
  description: string;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
}

const WorkflowCard: React.FC<WorkflowCardProps> = ({ id, title, description, onDelete, onView }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onView(id)}>
          View
        </Button>
        <Button size="small" color="error" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default WorkflowCard;

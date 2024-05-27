"use client";

import React, { useEffect, useState } from 'react';
import { listWorkflows, deleteWorkflow } from '../../components/Flow/workflowService';
import WorkflowCard from '../../components/Flow/WorkflowCard';
import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

interface Workflow {
  workflow_id: string;
  name: string;
  description: string;
}

const DocsPage: React.FC = () => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const router = useRouter();

  const fetchWorkflows = async () => {
    try {
      const data = await listWorkflows();
      console.log('Fetched workflows:', data);
      setWorkflows(data);
    } catch (error) {
      console.error('Error fetching workflows:', error);
    }
  };

  const handleDelete = async (workflow_id: string) => {
    console.log('Deleting workflow with ID:', workflow_id);
    try {
      await deleteWorkflow(workflow_id);
      fetchWorkflows(); // Refresh the workflow list
    } catch (error) {
      console.error('Error deleting workflow:', error);
    }
  };

  const handleView = (workflow_id: string) => {
    console.log('Navigating to /flow/', workflow_id);
    router.push(`/flow/${workflow_id}`); // Use router to navigate
  };

  useEffect(() => {
    fetchWorkflows();
  }, []);

  return (
    <div>
      <Typography variant="h4" component="h1">Agents</Typography>
      <Grid container spacing={2}>
        {workflows.map((workflow) => (
          <Grid item xs={12} sm={6} md={4} key={workflow.workflow_id}>
            <WorkflowCard 
              id={workflow.workflow_id} 
              title={workflow.name} 
              description={workflow.description} 
              onDelete={handleDelete}
              onView={handleView}  // Pass the handleView function
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DocsPage;

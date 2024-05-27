"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Flow from '../../components/Flow';

const FlowPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [workflowData, setWorkflowData] = useState(null);

  useEffect(() => {
    if (id) {
      const loadWorkflow = async () => {
        try {
          console.log(`Fetching workflow data for id: ${id}`);
          const response = await axios.get(`http://localhost:5009/api/workflows/${id}`);
          console.log('Workflow data:', response.data);
          setWorkflowData(response.data);
        } catch (error) {
          console.error('Error fetching workflow', error);
        }
      };
      loadWorkflow();
    }
  }, [id]);

  if (!workflowData) {
    return <div>Loading...</div>;
  }

  return <Flow initialData={workflowData} />;
};

export default FlowPage;

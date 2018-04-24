import React from 'react';
import WorkOrder from './WorkOrder';
import { data } from '../seed';

const WorkOrders = () => {
  return (
    <div className="flex-container">
      {data.map(wo => (
        <WorkOrder
          subject={wo.subject}
          submitter={wo.submitter}
          status={wo.status}
          details={wo.details}
        />
      ))}
    </div>
  );
};

export default WorkOrders;

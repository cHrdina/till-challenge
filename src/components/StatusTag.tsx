import React from 'react';

type Props = {
  active: boolean;
  text: string | null | undefined;
};

const StatusTag: React.FC<Props> = ({ active, text }) => {
  return (
    <div className={`status-tag ${active ? 'status-green' : 'status-red'}`}>
      {text}
    </div>
  );
};

export default StatusTag;

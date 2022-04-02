import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import NuCamp from './NuCamp';
import OpenUni from './OpenUni';

export default function BasicTimeline() {
  return (
    <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
          <NuCamp />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><OpenUni /></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <NuCamp />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><OpenUni /></TimelineContent>
        </TimelineItem>

    </Timeline>
  );
}
import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function ProfileImage() {
  return (
    <Avatar
        alt="Davey Mason Developer"
        src="https://daveymason.com/assets/img/DaveyMasonCasual.jpg"
        sx={{ width: 245, height: 245, m: 5 }}
      />
  );
}
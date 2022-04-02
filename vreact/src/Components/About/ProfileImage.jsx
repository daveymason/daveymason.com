import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function ProfileImage() {
  return (
    <Avatar
        alt="Davey Mason Developer"
        src="https://daveymason.com/assets/img/DaveyMasonCasual.jpg"
        sx={{ width: 190, height: 190, p:1, m:5 }}
        className="shadowed hvr-float-shadow"
      />
  );
}
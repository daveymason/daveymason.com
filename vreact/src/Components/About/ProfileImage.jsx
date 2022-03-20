import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function ProfileImage() {
  return (
    <Avatar
        alt="Davey Mason Developer"
        src="https://daveymason.com/assets/img/DaveyMasonCasual.jpg"
        sx={{ width: 190, height: 190, m: 3 }}
        className="shadowed hvr-float-shadow"
      />
  );
}
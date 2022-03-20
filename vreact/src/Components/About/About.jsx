import * as React from "react";

import Title from "./Title.jsx";
import ProfileImage from "./ProfileImage.jsx";
// import BasicTimeline from './BasicTimeline.jsx';

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import ParticlesBg from "particles-bg";


export default function About() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <ProfileImage />
      <Title />
      
      <ParticlesBg num={42} type="circle" bg={true} />

    </Grid>
  );
}

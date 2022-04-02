import * as React from "react";

import Title from "./Title.jsx";
import ProfileImage from "./ProfileImage.jsx";
// import BasicTimeline from './BasicTimeline.jsx';

import Grid from "@mui/material/Grid";

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
      <ParticlesBg color="white" num={42} type="cobweb" bg={true} />
    </Grid>
  );
}
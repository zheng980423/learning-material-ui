import React from 'react';
import Typography from '@material-ui/core/Typography';
export default function Create() {
  return (
    <div>
      {/* <Typography variant="h1" color="primary" align="center">
        Create page
      </Typography> */}
      {/* <Typography color="secondary" noWrap>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
        cupiditate non, vero sunt, adipisci dignissimos amet et animi quam
        pariatur distinctio, cum saepe sint sit.
      </Typography> */}
      {/* https://material-ui.com/zh/api/typography/ */}
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>
    </div>
  );
}

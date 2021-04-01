import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Create() {
  return (
    <Container>
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
      <Button
        onClick={() => {
          console.log('you cliked me');
        }}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
      {/* <Button type="submit" color="default">
        Submit
      </Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  );
}

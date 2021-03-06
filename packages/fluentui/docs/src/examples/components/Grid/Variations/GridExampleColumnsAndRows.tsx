import * as React from 'react';
import { Grid, Image } from '@fluentui/react-northstar';

const images = [
  <Image key="ade" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/ade.jpg" />,
  <Image key="chris" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/chris.jpg" />,
  <Image
    key="christian"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/christian.jpg"
  />,
  <Image
    key="daniel"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/daniel.jpg"
  />,
  <Image
    key="elliot"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/elliot.jpg"
  />,
  <Image key="elyse" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/elyse.png" />,
  <Image key="helen" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/helen.jpg" />,
  <Image key="jenny" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/jenny.jpg" />,
  <Image key="joe" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/joe.jpg" />,
  <Image
    key="justen"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/justen.jpg"
  />,
  <Image
    key="kristy"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/kristy.png"
  />,
  <Image key="laura" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/laura.jpg" />,
  <Image key="matt" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/matt.jpg" />,
  <Image
    key="matthew"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/matthew.png"
  />,
  <Image key="molly" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/molly.png" />,
  <Image key="nan" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/nan.jpg" />,
  <Image key="nom" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/nom.jpg" />,
  <Image
    key="patrick"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/patrick.png"
  />,
  <Image
    key="rachel"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/rachel.png"
  />,
  <Image key="steve" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/steve.jpg" />,
  <Image
    key="stevie"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/stevie.jpg"
  />,
  <Image key="tom" fluid src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/tom.jpg" />,
  <Image
    key="veronika"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/veronika.jpg"
  />,
];

const GridExample = () => (
  <div>
    Grid with specified number or rows and columns:
    <Grid rows="3" columns="8">
      {images}
    </Grid>
    <br />
    Grid with explicitly specified columns:
    <Grid rows="2fr repeat(2, 1fr)" columns="repeat(2, 2fr) 3fr 3fr 100px 14rem 50px 20%">
      {images}
    </Grid>
  </div>
);

export default GridExample;

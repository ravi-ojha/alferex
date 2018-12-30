import React from 'react';
import { Link, graphql } from 'gatsby';
import {
  Card, Grid, Segment, Image, Breadcrumb, Container, Header,
} from 'semantic-ui-react';


import SiteHeader from '../components/Header';
import Footer from '../components/Footer';
import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';

class AllProductsTemplate extends React.PureComponent {
  render() {
    console.log(this.props);
    const { pageContext } = this.props;
    const { previous, next } = pageContext;

    console.log(pageContext.allProducts);
    const productList = pageContext.allProducts.map((product) => {
      return (
        <Grid.Column key={product.node.slug}>
          <Link to={`${product.node.slug}`}>
            <Card>
              <Image alt={product.node.title} src={product.node.images[0]} />
              <Card.Content>
                <Card.Header>{product.node.title}</Card.Header>
                <Card.Description>{`Material: ${product.node.material}`}</Card.Description>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
      );
    });

    return (
      <div>
        <SiteHeader {...this.props} />
        <Segment basic style={{ background: '#ffffff' }}>
          <Container>
            <Segment basic style={{ marginBottom: '0' }}>
              <Breadcrumb size="large">
                <Breadcrumb.Section link><Link to="/">Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider icon="right chevron" />
                <Breadcrumb.Section active>Products</Breadcrumb.Section>
              </Breadcrumb>
            </Segment>
            <Segment basic>
              <Header as="h1" textAlign="center" className="about-header alferex-header">
                Product Range
              </Header>
              <Segment vertical style={{ padding: '5em 0' }}>
                <Container>
                  <Grid stackable columns={3}>
                    {productList}
                  </Grid>
                </Container>
              </Segment>
            </Segment>
          </Container>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default AllProductsTemplate;
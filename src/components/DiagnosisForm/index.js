import React, { Component } from 'react';
import styled from '@emotion/styled/macro';
import { Container, Row, Col } from 'react-bootstrap';
import CheckForm from '../CheckForm';

const Wrapper = styled.main({
  minHeight: '400px',
  margin: '50px 0',
  height: '100%',
})

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={9} sm={12}>
              <CheckForm/>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Main;
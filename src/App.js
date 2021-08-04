import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { GlobalStyles } from './GlobalStyles';
import Modal from './components/Modal';
import { Img } from './styled/styledPhotos';




const App = () => {

  let [images, setImages] = useState([]);
  useEffect(() => {
    fetch('https://boiling-refuge-66454.herokuapp.com/images')
        .then(value => value.json())
        .then(value => {
          setImages(value)
        })
  }, [])



    let [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev)
    }


  return (
    <>
        <Router>
            <Switch>
                <Route exact path={'/photo/:id'} render={() => <Modal showModal={showModal} setShowModal={setShowModal}/>}/>
            </Switch>

            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={9} className='center'>
                        {
                            images.map(value => <Link to={'/photo/' + value.id}><Img src={value.url} alt="some" key={value.id} onClick={openModal}/></Link>)
                        }
                    </Col>
                </Row>
            </Container>

            <GlobalStyles/>
        </Router>
    </>
  );
}

export default App;

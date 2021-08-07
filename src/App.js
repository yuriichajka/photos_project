import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalStyles } from './GlobalStyles';
import Modal from './components/Modal';
import Image from './components/Image';

import { getImages } from './redux/ducks/images';


const App = () => {

  const dispatch = useDispatch();

  let [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getImages())
  }, [dispatch])

    const images = useSelector((state) => state.images.images)

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
                            images.map(value =>
                                <Link to={'/photo/' + value.id}>
                                    <Image item={value.url} key={value.id} onClick={openModal}/>
                                </Link>)
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

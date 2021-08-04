import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GlobalStyles } from './GlobalStyles';
import Modal from './components/Modal';
import { Img } from './styled/styledPhotos';



function App() {

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
        <Modal showModal={showModal} setShowModal={setShowModal}/>

        <Container>
            <Row className="justify-content-md-center">
                <Col lg={9} className='center'>
                    {
                        images.map(value => <Img src={value.url} alt="some" key={value.id} onClick={openModal}/>)
                    }
                </Col>
            </Row>
        </Container>

        <GlobalStyles/>
    </>
  );
}

export default App;

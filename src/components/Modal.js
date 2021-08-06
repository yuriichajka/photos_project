import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

import { Background, ModalWrapper, CloseModalButton, ModalContainer, Comments, Comment, ModalImg } from '../styled/styledModal'

import { getPhoto } from '../services/api';


const Modal = ({ showModal, setShowModal }) => {

    const { id } = useParams();
    const location = useLocation();

    let [modalPhoto, setModalPhoto] = useState(false)
    useEffect(() => {
        getPhoto(id).then(value => setModalPhoto(value.data))
    }, [id])

    return (
        <>
            { showModal && (
                    <Background>
                        <ModalWrapper showModal={ showModal }>
                            <ModalContainer>
                               <Row>
                                   <Col>
                                       <ModalImg loading="lazy" src={ modalPhoto.url } width='400px' height='300px'/>
                                       <Form className="d-grid gap-2">
                                           <Form.Control placeholder="Name" />
                                           <Form.Control placeholder="Comment" />
                                           <Button size="lg" style={{marginBottom: '30px'}}>Post</Button>
                                       </Form>
                                   </Col>
                                   <Col>
                                       <Comments>
                                           <Comment>
                                               <p className="name">Johnny First</p>
                                               <p className="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, reprehenderit.</p>
                                           </Comment>
                                           <Comment>
                                               <p className="name">Johnny Second</p>
                                               <p className="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, eligendi.</p>
                                           </Comment>
                                       </Comments>
                                   </Col>
                               </Row>
                            </ModalContainer>
                            <CloseModalButton arial-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
                        </ModalWrapper>
                    </Background>
            )}
        </>
    )
}

export default Modal;
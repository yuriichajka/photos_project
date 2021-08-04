import React from 'react';
import { Background, ModalWrapper, CloseModalButton, ModalContainer, Comments, Comment, ModalImg } from '../styled/styledModal'
import { Col, Form, Row, Button } from "react-bootstrap";


export default function Modal({showModal, setShowModal}) {
    return (
        <>
            {showModal ? (
                    <Background>
                        <ModalWrapper showModal={showModal}>
                            <ModalContainer>
                               <Row>
                                   <Col>
                                       <ModalImg src='https://picsum.photos/id/240/300/200' width='400px'/>
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
                                               <p className="comment">cafafaasd</p>
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
            ) : null}
        </>
    )
}
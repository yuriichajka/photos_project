import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

import { getPhoto } from '../api';

import {
    Background, ModalWrapper,
    CloseModalButton, ModalContainer,
    Comments, Comment, ModalImg
} from '../styled/styledModal';
import { NAME_VAL, COMMENT_VAL } from '../validators';

const Modal = ({ showModal, setShowModal }) => {
    const validations = yup.object().shape({
        name: NAME_VAL,
        comment: COMMENT_VAL
    });

    const { id } = useParams();

    let [modalPhoto, setModalPhoto] = useState(false);
    useEffect(() => {
        getPhoto(id).then(value => setModalPhoto(value.data))
    }, [id]);

    return (
        <>
            { showModal && (
                    <Background>
                        <ModalWrapper showModal={ showModal }>
                            <ModalContainer>
                               <Row>
                                   <Col>
                                       <ModalImg loading="lazy" src={ modalPhoto.url } width='400px' height='300px'/>
                                       <Formik
                                           initialValues={{
                                                name: '',
                                                comment: ''
                                           }}
                                           validateOnBlur
                                           onSubmit={ (values) => {console.log(values) }}
                                           validationSchema={ validations }
                                       >
                                           {({ values,
                                                 errors,
                                                 touched,
                                                 handleChange,
                                                 handleBlur,
                                                 isValid,
                                                 handleSubmit,
                                                 dirty}) => (
                                               <Form className="d-grid gap-2">
                                                   <Form.Control
                                                       type={ `text` }
                                                       name={ `name` }
                                                       onChange={ handleChange }
                                                       onBlur={ handleBlur }
                                                       value={ values.name }
                                                       placeholder="Name"
                                                   />
                                                   { touched.name && errors.name && <p>{errors.name}</p> }
                                                   <Form.Control
                                                       placeholder="Comment"
                                                       type={ `comment` }
                                                       name={ `comment` }
                                                       onChange={ handleChange }
                                                       onBlur={ handleBlur }
                                                       value={ values.comment }
                                                   />
                                                   { touched.comment && errors.comment && <p>{ errors.comment }</p> }
                                                   <Button
                                                       size="lg"
                                                       style={{ marginBottom: '30px' }}
                                                       disabled={ !isValid && !dirty }
                                                       onClick={ handleSubmit }
                                                       type={ `submit` }
                                                   >Post</Button>
                                               </Form>
                                           )}
                                       </Formik>
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

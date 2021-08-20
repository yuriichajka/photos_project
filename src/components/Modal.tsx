import React, {useContext, useEffect, useState} from 'react';
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
import { IContext, ModalContext } from '../App';

export interface IImages {
    id?: number
    url?: string
}

const Modal: React.FC = () => {

    const modalContext = useContext<IContext>(ModalContext)

    const { showModal, toggleModal } = modalContext;

    const validations = yup.object().shape({
        name: NAME_VAL,
        comment: COMMENT_VAL
    });

    const { id } = useParams<any>();

    let [modalPhoto, setModalPhoto] = useState<IImages>({});
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
                                           onSubmit={ (values) => { console.log(values) }}
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
                                               <p className="comment">
                                                   Lorem ipsum dolor sit amet,
                                                   consectetur adipisicing elite.
                                                   Quisquam, reprehenderit.
                                               </p>
                                           </Comment>
                                           <Comment>
                                               <p className="name">Johnny First</p>
                                               <p className="comment">
                                                   Lorem ipsum dolor sit amet,
                                                   consectetur adipisicing elite.
                                                   Quisquam, reprehenderit.</p>
                                           </Comment>
                                       </Comments>
                                   </Col>
                               </Row>
                            </ModalContainer>
                            <CloseModalButton arial-label='Close modal' onClick={ toggleModal }/>
                        </ModalWrapper>
                    </Background>
            )}
        </>
    )
}

export default Modal;

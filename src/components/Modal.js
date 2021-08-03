import React from 'react';
import {Background, ModalWrapper, ModalContent, CloseModalButton} from '../styled/styledModal'





export default function Modal({showModal, setShowModal}) {
    return (
        <>
            {showModal ? (
                    <Background>
                        <ModalWrapper showModal={showModal}>
                            <ModalContent>
                                fsdgsd
                            </ModalContent>
                            <CloseModalButton arial-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
                        </ModalWrapper>
                    </Background>
            ) : null}
        </>
    )
}
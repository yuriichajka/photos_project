import React, {useState} from "react";
import styled from "styled-components";
import {MdClose} from 'react-icons/md'

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    color: #000;
    background: #fff;
    display: grid;
    grid-template-columns: 2fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
    line-height: 1.8;
    color: #141414;
  
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
    width: 75%;
    margin-top: 10px;
  }
  
  input {
    width: 75%;
    margin: 10px 0;
    padding: 5px;
  }
  
  img {
    margin-bottom: 20px;
  }
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

const Comments = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  
  p {
    text-align: left;
    margin-top: 10px;
  }
  
  div {
    text-align: left;
    color: darkgray;
  }
`


export default function Modal({showModal, setShowModal}) {

    let [name, setName] = useState('')
    let [comm, setComm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !comm) return

        console.log(name,comm);
    }

    return (
        <>
            {showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalContent>
                            <img src='https://picsum.photos/id/240/300/200' alt="pic" width='400px'/>
                            <form onSubmit={handleSubmit}>
                                <input type="text" value={name} onChange={({target: {value}}) => setName(value)} placeholder='Ваше имя'/>
                                <input type="text" value={comm} onChange={({target: {value}}) => setComm(value)} placeholder='Ваш комментарий'/>
                                <button disabled={!name || !comm}>Оставить отзыв</button>
                            </form>
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
                        <Comments>
                            <div>Lorem ipsum.</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, saepe.</p>
                            <br/>
                            <div>Lorem ipsum.</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, saepe.</p>
                        </Comments>
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
};
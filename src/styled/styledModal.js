import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`
export const ModalWrapper = styled.div`
    width: 800px;
    //height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    color: #000;
    background: #fff;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

export const ModalContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
`

export const Comments = styled.div`
    text-align: left;
    margin-top: 20px;
    p {
      margin: 0;
    }
    p.name {
      color: gainsboro;
    }
`

export const Comment = styled.div`
    margin-bottom: 20px;
`

export const ModalImg = styled.img`
    margin-bottom: 10px;
    border-radius: 10px;
`

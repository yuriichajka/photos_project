import styled from "styled-components";
import {MdClose} from "react-icons/md";

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
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    color: #000;
    background: #fff;
    display: grid;
    grid-template-columns: 2fr 2fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
    line-height: 1.8;
    color: #141414;
`
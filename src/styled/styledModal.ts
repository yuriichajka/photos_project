import { MdClose } from 'react-icons/md';

import { COLORS, SIZES } from '../globalVariables';

import styled from 'styled-components';

export const Background = styled.div`
    width: ${SIZES.width100per};
    height: ${SIZES.height100per};
    background: ${COLORS.dark};
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
    width: ${SIZES.width800px};
    box-shadow: ${COLORS.silverBox};
    color: ${COLORS.black};
    background: ${COLORS.white};
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

export const ModalContainer = styled.div`
    width: ${SIZES.width90per};
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
      color: ${COLORS.silver};
    }
`

export const Comment = styled.div`
    margin-bottom: 20px;
`

export const ModalImg = styled.img`
    margin-bottom: 10px;
    border-radius: 10px;
`;

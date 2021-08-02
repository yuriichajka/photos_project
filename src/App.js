import './App.css';
import {useEffect, useState} from "react";
import Modal from "./components/Modal";
import {GlobalStyles} from "./globalStyles";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  text-align: center;
`


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
    const openModal = (e) => {
        setShowModal(prev => !prev )
        console.log(e)
    }





  return (
    <>
        <Container>
      {
        images.map(value => <div>
          <img onClick={() => openModal(value.url)} src={value.url} alt='da'/>
        </div>)
      }

            <Modal showModal={showModal} setShowModal={setShowModal} />
            <GlobalStyles/>
        </Container>
    </>
  );
}

export default App;

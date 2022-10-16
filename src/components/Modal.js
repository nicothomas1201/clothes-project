import React from 'react'
import styled from 'styled-components'
import ReactDOM  from 'react-dom'
import Overlay from './Overlay'
import { useState } from 'react'
import ModalContentForm from './Modal-content-form'
import ModalContentBought from './Modal-content-bought'
import ModalContentMobile from './Modal-content-mobile'

const modalRoot = document.getElementById('portal')

class ModalPortal extends React.Component{
  constructor(props){
    super(props)
    this.el = document.createElement('div')
  }

  componentWillUnmount(){
    modalRoot.removeChild(this.el)
  }

  componentDidMount(){
    modalRoot.appendChild(this.el)
  }

  render(){
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}


const ModalContentStyled = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    max-inline-size: 29.1875rem;
    box-sizing: border-box;  
    inline-size: 100%;
    padding: 2.5rem;
    background-color: var(--white);
    overflow: auto  ;
    
    ${({bought}) => {
      if(bought){
        return {
          right: '50%',
          top: '50%',
          maxInlineSize: '20.5rem',
          transform: 'translate(50%, -50%)',
          blockSize: '29.4375rem',
          borderRadius: '.3rem',
          overflowX: 'hidden',
          /* margin: '1rem', */
          /* boxSizing: 'border-box', */
          /* display: 'inline-flex', */
        }
      }
    }}

    .modal-header{
      display: flex;
      justify-content: space-between;
      margin-block-end: 1.25rem;

      button{
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        align-self: flex-start;
      }
  
      .modal-titles {
        display: flex;
        color: var(--black);
        flex-direction: column;
        gap: .5rem;
        align-items: center;
  
        h2{
          font: var(--subtitle-22medium);
          color: var(--black);
          margin: 0;
        }
  
        span{
          font: var(--body-16regular);
          color: #333333;
        }
  
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media screen and (min-width: 878px){
      ${({bought}) => {
        if(bought){
          return {
            borderRadius: '.5rem',
            margin: 0,
            maxInlineSize: '39.4375rem',
            /* display: 'inline-flex', */
          }
        }
      }}
    }

`

function ModalContent({setModal, cuantity = 1, price = 175}) {
  let [ formValues, setFormValues ] = useState({
    name: '',
    lastname: '',
    adress: '',
    email: '',
    cardName: '',
  })
  let [bought, setBought] = useState(false)



  function handleSubmit(e){
    e.preventDefault()
    setBought(true)
    // setModal(false)
  }

  function handleClick(){
    setModal(false)
  }

  

  return (
    <Overlay>

      <ModalContentStyled bought={bought} >
        {
          !bought ? (
            <ModalContentForm 
              handleClick={handleClick}
              handleSubmit={handleSubmit}
              cuantity={cuantity}
              price={price}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          ) : <ModalContentBought handleClick={handleClick}/> 
        }
      </ModalContentStyled>
      
    </Overlay> 
  )
}


function Modal({ isActive, setModal }){
  if(isActive){
    if(isActive.mobile){
      return <ModalContentMobile setModal={setModal}/>
    }

    return (
      <ModalPortal>
        <ModalContent setModal={setModal} />
      </ModalPortal>
    )
  }
}

export default Modal

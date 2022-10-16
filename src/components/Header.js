import styled from 'styled-components'
import SearchInput from './Search-input'
import Icon from './icons'

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  padding-block-start: .5rem;
  padding-block-end: 1rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  
  
  img{
    vertical-align: middle;
    max-inline-size: 3rem;
    block-size: auto;
    aspect-ratio: 1/1;
  }

  .search-container{
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  button{
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }

  @media screen and (min-width: 878px){
    /* border: 1px solid red; */
    justify-content: space-between;
    padding: 1rem 2.5rem;
    margin-block-end: 2.5rem;
    flex-direction: row;
    /* padding: 0; */
  }
`

function Header({ setSearch, setModal }) {

  function handleClick(){
    setModal(true)
  }
    
  return (
    <HeaderStyled>
      <a href='/'>
        <img src='./images/logo.png' alt='' width="48" height="48"/>
      </a>
      <div className='search-container'>
        <SearchInput setSearch={setSearch} />
        <button onClick={handleClick}>
          <Icon
            name='shopping-cart'
            size='20'
          />
        </button>
      </div>
    </HeaderStyled>
    
  )
}

export default Header

import styled from 'styled-components'
import SectionProductDetails from './Section-product-details'
import { useState } from 'react'
import classNames from 'classnames'

const DetailsListStyled = styled.div`
  .titles-section{
    display: flex;
    justify-content: space-between;
  }

  .title{
    font: var(--caption-12regular);
    color: var(--grey-3);
    text-transform: uppercase;
    cursor: pointer;
  }

  .title.active{
    color: var(--black);
    text-decoration: underline;
  }

  .titles-section{
    margin-block-end: .5rem;
  }
`

function DetailsList(props) {
  let [ section, setSection ] = useState(props.description)
  let [ item, setItem ] = useState('description')

  function handleClick(e){
    let item = e.target.classList.item(1)
    setItem(item)
    setSection(props[item])
  }

  function renderTitle(classname, text){
    let isActive = false

    
    if(classname === item){
      isActive = true
    } 

    let classes = classNames({
      'title': true,
      [`${classname}`]: true,
      'active': isActive
    })
    
    return (
      <span className={classes}>
        {text}
      </span>
    )    
  }


  

  

  return (
    <DetailsListStyled >
      <div className='titles-section'>
        <span onClick={handleClick}>
          {renderTitle('description', 'descripción')}
        </span>
        <span onClick={handleClick}>
          {renderTitle('shipping', 'envios y entregas')}
        </span>
        <span onClick={handleClick}>
          {renderTitle('sizes', 'tallaje')}
        </span>
      </div>

      <SectionProductDetails text={section}/>
      
    </DetailsListStyled>
    
  )
}

export default DetailsList

import Icon from './icons'
import SectionFormInput from './Section-form-input'
import Button from './Button'
import ProductShoppingCart from './Product-shopping-cart'

function ModalContentForm({handleClick, handleSubmit, cuantity, price, formValues, setFormValues}) {
  return (
    <>
      <div className='modal-header'>
        <button onClick={handleClick}>
          <Icon 
            name='close'
            size='24'
            color='var(--black)'
          />
        </button>

        <div className='modal-titles'>
          <h2>Carrito</h2>
          <div>
            <span>{cuantity} artículo - {price} </span>
          </div>
        </div>

        <Icon 
          name='shopping-cart'
          size='24'
          color='var(--black)'
        />
      </div>

      <ProductShoppingCart />

      <form onSubmit={handleSubmit}>
        <SectionFormInput 
          label="Nombre"
          id="name"
          type="text"
          placeholder="Nicolas"
          state={formValues}
          value={formValues.name}
          setState={setFormValues}
        />

        <SectionFormInput 
          label="Apellido"
          id="lastname"
          type="text"
          placeholder="Quintero"
          state={formValues}
          value={formValues.lastname}
          setState={setFormValues}
        />

        <SectionFormInput 
          label="Dirección"
          id="adress"
          type="text"
          placeholder="av.lopez mateos #1796"
          state={formValues}
          value={formValues.adress}
          setState={setFormValues}
        />

        <SectionFormInput 
          label="Correo electronico"
          id="email"
          type="email"
          placeholder="cristopher@gmail.com"
          state={formValues}
          value={formValues.email}
          setState={setFormValues}
        />

        <SectionFormInput 
          label="Nombre de la tarjeta"
          id="cardName"
          type="text"
          placeholder="Nicolas Quintero"
          state={formValues}
          value={formValues.cardName}
          setState={setFormValues}
        />

        <Button
          states={formValues}
          text="Pagar ahora"/>
      </form>
    </>
    
  )
}

export default ModalContentForm

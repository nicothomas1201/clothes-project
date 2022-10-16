import Close from "./close"
import Down from "./down"
import Filter from "./filter"
import Plus from "./plus"
import Search from "./search"
import ShoppingCart from "./shopping-cart"
import Trash from "./trash"
import Up from "./up"
import Check from "./check"
import Minus from "./minus"

function Index({name, ...props}) {
  switch(name){
    case 'close': {
      return <Close {...props} />
    }
    case 'down': {
      return <Down {...props} />
    }
    case 'filter': {
      return <Filter {...props} />
    }
    case 'plus': {
      return <Plus {...props} />
    }
    case 'search':{
      return <Search {...props} />
    }
    case 'shopping-cart':{
      return <ShoppingCart {...props} />
    }
    case 'up':{
      return <Up {...props} />
    }
    case 'trash':{
      return <Trash {...props} />
    }
    case 'check': {
      return <Check {...props} />
    }
    case 'minus': {
      return <Minus {...props}/>
    }
    default: {
      return null
    }
  }
}

Index.defaultProps = {
  size: 16, 
  color: 'black'
}

export default Index

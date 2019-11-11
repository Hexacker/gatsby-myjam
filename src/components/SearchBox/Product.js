import React, { useState } from "react"
import { Item, PlusIcon, QuantityBoxMobile, CartIcon, QtyMinus, QtyPlus } from "./Components"

const Product = React.memo(({ item }) => {
  const [ quantity, setQuantity ] = useState(1)

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleQuantityIncrement = () => {
    const newQty = Number.parseInt(quantity) + 1
    setQuantity(newQty)
  }

  const handleQuantityDecrement = () => {
    const newQty = Number.parseInt(quantity) - 1
    if(newQty > 0) {
      setQuantity(newQty)
    }
  }

  const handleRestQty = () => {
    setTimeout(() => setQuantity(1), 500)
  }

  return (
    <Item
      data-id={item.recordId}
      data-sku={item.sku}
      data-price={item.price}
      data-name={item.name.split(' ').map( word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}
    >
      <img
        src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUDINARY_KEY}/image/upload/${process.env.GATSBY_CLOUDINARY_PATH}/my-jam/${item.sku}.jpg`}
        alt={item.name}
      />
      <h3 className="price">
        <span>&#163;{item.price}</span>
        <PlusIcon />
      </h3>
      <span className="name">{item.name.split(' ').map( word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}</span>
      <QuantityBoxMobile>
        <span>Quantity: (Kg)</span>
        <div>
          <input type="number" value={quantity} onChange={handleQuantityChange} />
          <QtyPlus onClick={handleQuantityIncrement} />
          <QtyMinus onClick={handleQuantityDecrement} />
        </div>
        <div>
          <button
            onClick={handleRestQty}
            className="snipcart-add-item"
            data-item-id={item.recordId}
            data-item-name={item.name}
            data-item-price={item.price}
            data-item-quantity={quantity}
            data-item-url={`url/products`}
          >
            <CartIcon/>
            <span>Add To Cart</span>
          </button>
        </div>
      </QuantityBoxMobile>
    </Item>
  )
})
export default Product
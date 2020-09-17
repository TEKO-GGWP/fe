import * as Types from '../actions/actionTypes'
const initialState = {
  addedProducts: [],
  sellPriceTotal: 0,
  supplierSaleTotal: 0
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_CART: {
      const addedProduct = action.product
      const newAddedProducts = state.addedProducts
      const index = state.addedProducts.findIndex(item => addedProduct.sku === item.sku)
      const existedProduct = newAddedProducts[index]
      if (existedProduct) {
        newAddedProducts[index].quantity++
        return {
          ...state,
          addedProducts: newAddedProducts,
          supplierSaleTotal: state.supplierSaleTotal + addedProduct.price.supplierSalePrice,
          sellPriceTotal: state.sellPriceTotal + addedProduct.price.sellPrice
        }
      } else {
        addedProduct.quantity = 1
        const newSupplierSaleTotal = state.supplierSaleTotal + addedProduct.price.supplierSalePrice
        const newSellPriceTotal = state.sellPriceTotal + addedProduct.price.sellPrice
        return {
          ...state,
          addedProducts: [...state.addedProducts, addedProduct],
          supplierSaleTotal: newSupplierSaleTotal,
          sellPriceTotal: newSellPriceTotal
        }
      }
    }
    case Types.REMOVE_FROM_CART: {
      const removedProduct = state.addedProducts.find(item => action.sku === item.sku)
      const newProducts = state.addedProducts.filter(item => removedProduct.sku !== item.sku)
      const newSupplierSaleTotal = state.supplierSaleTotal - (removedProduct.price.supplierSalePrice * removedProduct.quantity)
      const newSellPriceTotal = state.sellPriceTotal - (removedProduct.price.sellPrice * removedProduct.quantity)
      return {
        ...state,
        addedProducts: newProducts,
        supplierSaleTotal: newSupplierSaleTotal,
        sellPriceTotal: newSellPriceTotal
      }
    }
    case Types.ADD_QUANTITY: {
      const newAddedProducts = state.addedProducts
      const index = newAddedProducts.findIndex(item => action.sku === item.sku)
      const addedProduct = newAddedProducts[index]
      ++newAddedProducts[index].quantity
      const newSupplierSaleTotal = state.supplierSaleTotal + addedProduct.price.supplierSalePrice
      const newSellPriceTotal = state.sellPriceTotal + addedProduct.price.sellPrice
      return {
        ...state,
        addedProducts: newAddedProducts,
        supplierSaleTotal: newSupplierSaleTotal,
        sellPriceTotal: newSellPriceTotal
      }
    }
    case Types.SUB_QUANTITY: {
      const newAddedProducts = state.addedProducts
      const index = newAddedProducts.findIndex(item => action.sku === item.sku)
      const addedProduct = newAddedProducts[index]
      if (addedProduct.quantity === 1) {
        const newProducts = state.addedProducts.filter(item => addedProduct.sku !== item.sku)
        const newSupplierSaleTotal = state.supplierSaleTotal - addedProduct.price.supplierSalePrice
        const newSellPriceTotal = state.sellPriceTotal - addedProduct.price.sellPrice
        return {
          ...state,
          addedProducts: newProducts,
          supplierSaleTotal: newSupplierSaleTotal,
          sellPriceTotal: newSellPriceTotal
        }
      } else {
        --newAddedProducts[index].quantity
        const newSupplierSaleTotal = state.supplierSaleTotal - addedProduct.price.supplierSalePrice
        const newSellPriceTotal = state.sellPriceTotal - addedProduct.price.sellPrice
        return {
          ...state,
          addedProducts: newAddedProducts,
          supplierSaleTotal: newSupplierSaleTotal,
          sellPriceTotal: newSellPriceTotal
        }
      }
    }
    default:
      return state
  }
}

export default cart

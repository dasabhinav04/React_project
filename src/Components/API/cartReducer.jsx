const cartReducer = (state, action) =>{
    switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    case 'REMOVE_ITEM': {
      return state
        .map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
    }

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
}

export default cartReducer;
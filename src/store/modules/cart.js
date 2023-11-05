const state = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const mutations = {
  addToCart(state, product) {
    state.cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  removeFromCart(state, index) {
    state.cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
};

const actions = {
  addToCart({ commit, state }, product) {
    commit('addToCart', product);
  },
  removeFromCart({ commit, state }, index) {
    commit('removeFromCart', index);
  },
};

const getters = {
  cartTotal: (state) => {
    return state.cartItems.reduce((total, item) => total + item.price, 0);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

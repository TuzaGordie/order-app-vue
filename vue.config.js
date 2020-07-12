module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://simple-order-api.herokuapp.com/',
      },
    },
  },
};

module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://simple-order-api.herokuapp.com',
      },
    },
  },
};

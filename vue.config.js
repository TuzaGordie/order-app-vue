module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://simple-order-api.herokuapp.com',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};

module.exports = {
  devServer: {
    outputDir: 'dist',
    proxy: {
      '/api': {
        target: 'https://simple-order-api.herokuapp.com',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};

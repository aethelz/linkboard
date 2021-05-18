module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/first',
        permanent: true,
      },
    ]
  },
}

//* adding here environment variables for the example url of services API
export default () => ({
  baserUrl: 'http://localhost',
  servicesUrl: {
    servicesName: 'http://localhost/v1/api/services-name',
  },
  mongodbUrl: process.env.MONGODBURL,
});

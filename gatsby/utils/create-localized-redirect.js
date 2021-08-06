const path = require('path');

const createLocalizedRedirect = ({
  fromPath,
  toPath,
  locales,
  redirectInBrowser = false,
  isPermanent = true,
  createRedirect,
}) => {
  createRedirect({
    fromPath,
    toPath,
    isPermanent,
    redirectInBrowser,
    statusCode: 200,
  });

  locales.forEach((locale) => {
    createRedirect({
      fromPath: path.join(`/${locale}`, fromPath),
      toPath: path.join(`/${locale}`, toPath),
      isPermanent,
      redirectInBrowser,
      statusCode: 200,
    });
  });
};

module.exports = createLocalizedRedirect;

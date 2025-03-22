export const getSigningOptions = (encryption, route) => {
  let options = {};

  switch (encryption) {
    case "route":
      options.audience = route;
      break;

    default:
      break;
  }

  return options;
};

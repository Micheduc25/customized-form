export const getStageFromRouteName = (routeName, routesMap) => {
  const keys = Array.from(routesMap.keys());
  const values = Array.from(routesMap.values());

  const routeIndex = values.indexOf(routeName);

  if (routeIndex > -1) {
    return keys[routeIndex];
  }
};

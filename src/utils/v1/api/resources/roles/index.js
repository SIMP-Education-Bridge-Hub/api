export const roleResource = (r) => {
  return {
    id: r?.roleId,
    role: r.role,
  };
};

export const roleCollection = (resources) => {
  return (resources || []).map((r) => roleResource(r));
};

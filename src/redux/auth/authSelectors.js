// export const getIsAuthenticated = (state) => Boolean(state.auth.token);
export const getIsAuthenticated = (state) => state.auth.isAuthenticated;

export const getUserName = (state) => state.auth.user.name;

// const authSelectors = { getIsAuthenticated, getUserName };
// export default authSelectors;

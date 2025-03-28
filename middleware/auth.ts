export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token", {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    secure: true,
    sameSite: "strict",
  });

  if (!token.value) {
    const currentPath = to.fullPath;
    const separator = currentPath.includes("?") ? "&" : "?";
    console.log(`${currentPath}${separator}login=1`);
    return navigateTo(`${currentPath}${separator}login=1`);
  }
});

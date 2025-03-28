<template>
  <div
    class="flex items-center justify-center bg-app-background-500 shadow-[0px_-6px_80px_0px_rgba(0,0,0,0.15)] fixed bottom-0 left-0 z-20 w-full lg:hidden"
  >
    <ul class="app-container navigation-bar-wrapper">
      <NuxtLinkLocale
        v-for="item of navItems"
        :to="item.href"
        :key="item.id"
        class="navigation-bar-item"
      >
        <span></span>
        <UIcon :name="item.icon" class="text-app-subtitle-default w-6 h-6" />
        <small class="text-app-subtitle-default text-xs font-semibold">{{
          item.name
        }}</small>
      </NuxtLinkLocale>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ROUTES } from "~/constants/routes";
const { t, locale } = useI18n();

const router = useRouter();
const navItems = computed(() => {
  return [
    {
      id: generateId(),
      name: t("layouts.navigationBar.links.home"),
      href: ROUTES.HOME,
      icon: "solar:home-2-linear",
      isActive: isActiveRoute({
        href: ROUTES.HOME,
        routePath: router.currentRoute.value.path,
        locale: locale.value,
      }),
    },
    {
      id: generateId(),
      name: t("layouts.navigationBar.links.products"),
      href: ROUTES.PRODUCTS,
      icon: "tabler:category-2",
      isActive: isActiveRoute({
        href: ROUTES.PRODUCTS,
        routePath: router.currentRoute.value.path,
        locale: locale.value,
      }),
    },
    {
      id: generateId(),
      name: t("layouts.navigationBar.links.orders"),
      href: ROUTES.ORDERS,
      icon: "solar:cart-5-line-duotone",
      isActive: isActiveRoute({
        href: ROUTES.ORDERS,
        routePath: router.currentRoute.value.path,
        locale: locale.value,
      }),
    },
    {
      id: generateId(),
      name: t("layouts.navigationBar.links.profile"),
      href: ROUTES.PROFILE,
      icon: "solar:user-linear",
      isActive: isActiveRoute({
        href: ROUTES.PROFILE,
        routePath: router.currentRoute.value.path,
        locale: locale.value,
      }),
    },
  ];
});
</script>
<style scoped>
.navigation-bar-wrapper {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(v-bind(navItems.length), minmax(0, 1fr));
}

.navigation-bar-item {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding-block: 1rem;
  padding-inline: 0.75rem;
}
.navigation-bar-item :first-child {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 0.25rem;
  pointer-events: none;
  opacity: 0;
  transition: all 0.5s ease;
  transform: translateX(-2rem);
  border-radius: 0.375rem;
  background-color: var(--primary-color-500);
  width: 100%;
}

.router-link-active > *,
.router-link-exact-active > * {
  color: var(--primary-color-500);
}
.router-link-active > :first-child {
  transform: translateX(0);
  pointer-events: auto;
  opacity: 1;
}
</style>

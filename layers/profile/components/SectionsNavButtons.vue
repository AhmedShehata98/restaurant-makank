<template>
    <!-- navigate buttons -->
    <div class="hidden tablet:flex items-center justify-start gap-3 mt-10">
        <NuxtLinkLocale
            :to="{
                path: ROUTES.PROFILE__MY_ORDERS,
                query: {
                    ...$route.query,
                    [ROUTER_QUERIES.PROFILE_ORDERS]:
                        PROFILE_ORDER_SECTIONS.CURRENT,
                },
            }"
            class="px-4 py-1 border border-app-background-800 bg-app-background-600 rounded-lg opacity-55 cursor-pointer"
            :class="
                clsx({
                    'opacity-100': $route.path.endsWith(
                        ROUTES.PROFILE__MY_ORDERS,
                    ),
                })
            "
        >
            {{ t("pages.profile.actions.orders") }}
        </NuxtLinkLocale>
        <NuxtLinkLocale
            :to="{
                path: ROUTES.PROFILE__ADDRESS,
            }"
            class="px-4 py-1 border border-app-background-800 bg-app-background-600 rounded-lg opacity-55 cursor-pointer"
            :class="
                clsx({
                    'opacity-100': $route.path.endsWith(
                        ROUTES.PROFILE__ADDRESS,
                    ),
                })
            "
        >
            {{ t("pages.profile.actions.address") }}
        </NuxtLinkLocale>
    </div>
</template>
<script setup lang="ts">
import { ROUTES } from "@/constants/routes";
import clsx from "clsx";
import {
    PROFILE_ORDER_SECTIONS,
    ROUTER_QUERIES,
} from "~/layers/base-layer/constants/router-queries";
const { t } = useI18n();
</script>

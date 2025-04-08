<template>
    <section class="flex flex-col app-container min-h-screen">
        <span class="flex items-center justify-start w-full py-3">
            <button
                type="button"
                class="cursor-pointer"
                @click="$router.back()"
            >
                <UIcon name="mdi:chevron-right" size="24" />
            </button>
            <p class="mx-auto text-sm font-semibold pe-7">
                {{ $t("pages.profile.mobile.editName.title") }}
            </p>
        </span>
        <form
            action=""
            class="flex items-start justify-start gap-3.5 w-full my-24 flex-col"
        >
            <p class="text-sm font-semibold">
                {{ $t("pages.profile.mobile.editName.form.label") }}
            </p>
            <input
                type="text"
                v-model="name"
                :placeholder="$t('pages.profile.mobile.editName.form.label')"
                class="w-full px-3 py-2.5 rounded-xl border border-app-third-500 bg-app-background-500 placeholder:text-input-hint-default"
            />
            <button
                type="submit"
                class="bg-green-default btn text-white w-full mt-10 py-3"
            >
                {{ $t("pages.profile.mobile.editName.form.saveBtn") }}
            </button>
        </form>
    </section>
</template>
<script setup lang="ts">
const name = ref("");
</script>

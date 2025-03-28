<template>
  <div
    class="w-full h-full flex items-start z-30 justify-end fixed top-0 left-0 bg-app-background-500/65 max-sm:px-4 sm:pe-20 pt-20 md:pt-16"
  >
    <div
      ref="target"
      class="w-full h-[30rem] flex flex-col md:w-[40%] lg:w-[33%] xl:w-[30%] rounded-xl overflow-hidden"
      style="box-shadow: 0px 5px 25px 0px #00000029"
    >
      <span
        class="flex items-center justify-between bg-app-background-500 px-4 py-5"
      >
        <h4 class="text-2xl text-text-color-default font-medium">
          {{ t("layouts.header.notifications.title") }}
        </h4>
        <button
          type="button"
          class="text-app-primary-500 text-sm font-medium cursor-pointer"
        >
          {{ t("layouts.header.notifications.markRead") }}
        </button>
      </span>
      <ul
        class="w-full h-full max-h-full overflow-y-scroll bg-input-hint-default divide-y divide-app-background-800 scrollbar-thin scrollbar-track scrollbar-thumb"
      >
        <li
          v-for="item of notifications"
          :key="item.title"
          class="flex items-center justify-start gap-2 h-20 relative px-2"
        >
          <figure
            class="relative h-12 w-12 aspect-square p-2 bg-app-background-500 rounded-full flex justify-center items-center"
          >
            <span
              class="absolute -right-0 -top-0.5 size-3 shadow-md rounded-full bg-app-primary-500"
            />
            <img
              src="/public/images/logo.svg"
              alt="logo-light.svg"
              class="max-w-full"
            />
          </figure>
          <span class="flex-1 flex flex-col gap-1">
            <h4
              class="text-base font-medium text-text-color-default text-start"
            >
              {{ item.title }}
            </h4>
            <p
              class="text-xs font-medium leading-4.5 text-text-color-default/70 text-start max-h-[2rem] overflow-hidden"
            >
              {{ item.description }}
            </p>
          </span>
          <p
            class="self-start text-xs font-medium capitalize text-text-color-default/40 pt-3"
          >
            {{ item.time }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useTemplateRef } from "vue";

const target = useTemplateRef<HTMLElement>("target");

onClickOutside(target, (_event) => emits("close"));
const notifications = [
  {
    title: "New Task Assigned",
    description:
      "You have been assigned a new task: 'UI Enhancement for Dashboard.'",
    time: "10 minutes ago",
  },
  {
    title: "Project Deadline Reminder",
    description:
      "The deadline for 'Marketing Website Revamp' is approaching in 2 days.",
    time: "30 minutes ago",
  },
  {
    title: "System Update Completed",
    description: "The latest system update has been successfully installed.",
    time: "1 hour ago",
  },
  {
    title: "New Comment on Your Task",
    description: "John commented: 'Please check the latest UI feedback.'",
    time: "2 hours ago",
  },
  {
    title: "Meeting Scheduled",
    description: "A team meeting has been scheduled for tomorrow at 10:00 AM.",
    time: "3 hours ago",
  },
  {
    title: "File Upload Successful",
    description:
      "Your file 'design_mockups.zip' has been uploaded successfully.",
    time: "5 hours ago",
  },
  {
    title: "New Team Member Joined",
    description: "Alex has joined the 'Front-End Team.' Welcome aboard!",
    time: "7 hours ago",
  },
  {
    title: "Security Alert",
    description:
      "A login attempt was detected from a new device. Review your activity.",
    time: "12 hours ago",
  },
];
const { t } = useI18n();
const emits = defineEmits(["close"]);

const toggleScrollLock = (shouldLock: boolean) => {
  if (shouldLock) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${
      window.innerWidth - document.documentElement.clientWidth
    }px`;
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
};

onMounted(() => {
  toggleScrollLock(true);
});
onUnmounted(() => {
  toggleScrollLock(false);
});
</script>

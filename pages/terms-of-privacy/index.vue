<template>
    <section class="app-container flex flex-col">
        <CustomBreadcrumb :items="breadcrumb" is-last-link-active />
        <span class="flex items-center justify-start w-full py-3 mb-9">
            <button
                type="button"
                class="cursor-pointer"
                @click="$router.back()"
            >
                <UIcon name="mdi:chevron-right" size="24" />
            </button>
            <p class="mx-auto text-sm font-semibold pe-7">
                {{ t("pages.termsOfPrivacy.title") }}
            </p>
        </span>
        <h3 class="font-bold hidden md:inline-block text-[32px] mb-5 mt-10">
            {{ t("pages.termsOfPrivacy.title") }}
        </h3>
        <p class="font-semibold textxs md:text-xl">
            إننا ننشئ مجموعة من الخدمات من شأنها أن تساعد ملايين الأشخاص بصفة
            يومية على استكشاف العالم والتفاعل معه بطرق جديدة. وتشتمل خدماتنا
            على: برامج Google ومواقعها وأجهزتها، مثل "البحث" وYouTube وGoogle
            Home الأنظمة الأساسية مثل متصفّح Chrome ونظام تشغيل Android المنتجات
            المدمجة في التطبيقات والمواقع الإلكترونية التابعة لجهات خارجية، مثل
            الإعلانات والإحصاءات وخرائط Google المضمّنة يمكنك استخدام خدماتنا
            بطرق شتى لإدارة خصوصيتك. على سبيل المثال، يمكنك الاشتراك في حساب
            Google إذا أردت إنشاء محتوى وإدارته، مثل الرسائل الإلكترونية والصور،
            أو إذا أردت عرض مزيد من نتائج البحث ذات الصلة. يمكنك أيضًا استخدام
            الكثير من خدمات Google بدون تسجيل الدخول إلى حسابك أو بدون إنشاء
            حساب من الأساس، مثل البحث على Google أو مشاهدة فيديوهات YouTube. كما
            يمكنك اختيار تصفّح الويب بخصوصية تامة باستخدام متصفّح Chrome في "وضع
            التصفّح المتخفي"، ما يساعدك في إبقاء أنشطة التصفّح خاصة ومنع الآخرين
            الذين يستخدمون جهازك من الاطّلاع عليها. وبإمكانك، في مختلف خدماتنا،
            ضبط إعدادات الخصوصية للتحكم في المعلومات التي نجمعها وكيفية
            استخدامها. للمساعدة في شرح الأمور بأكبر قدر ممكن من الوضوح أضفنا
            الأمثلة والفيديوهات التوضيحية والتعريفات بخصوص المصطلحات الرئيسية.
            وإذا لديك أي أسئلة بشأن سياسة الخصوصية هذه، يمكنك الاتصال بنا.
        </p>
    </section>
</template>
<script setup lang="ts">
import { ROUTES } from "~/constants/routes";

const { t } = useI18n();
const breadcrumb = computed(() => [
    {
        label: t("layouts.header.nav.home"),
        to: ROUTES.HOME,
    },
    {
        label: t("layouts.header.nav.termsOfPrivacy"),
        to: ROUTES.PRIVAICY_CONDITIONS,
    },
]);
</script>

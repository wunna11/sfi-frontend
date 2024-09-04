<template>
  <div>
    <h1 class="text-2xl font-bold mb-4 text-primary">Frequently Asked Questions</h1>
    <hr class="w-full border-gray-800 mb-7" />
    <div v-for="(item, index) in faqItems" :key="index" class="mb-5">
      <div class="border border-gray-700 rounded-xl overflow-hidden shadow-md">
        <div
          @click="toggleAccordion(index)"
          class="cursor-pointer bg-white-150 p-4 flex justify-between items-center"
        >
          <span class="text-black-100">{{ item.question }}</span>
          <svg
            :class="{ 'transform rotate-180': activeIndex === index }"
            class="w-5 h-5 text-primary border-primary transition-transform duration-200"
            fill="fill"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <transition
          enter-active-class="transition-max-height ease-in-out duration-200"
          enter-from-class="max-h-0 overflow-hidden"
          enter-to-class="max-h-screen"
          leave-active-class="transition-max-height ease-in-out duration-200"
          leave-from-class="max-h-screen"
          leave-to-class="max-h-0 overflow-hidden"
        >
          <div v-show="activeIndex === index" class="bg-white p-4 text-black-100 leading-7">
            {{ item.answer }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface FAQItem {
  question: string
  answer: string
}

const activeIndex = ref<number | null>(null)

const faqItems: FAQItem[] = [
  {
    question: 'Q: အတန်းက ဘယ်အချိန်တွေဖွင့်တာလဲ။',
    answer: 'A: လစဉ်လတိုင်း Batch အသစ်ကိုဖွင့်လှစ်ပါတယ်။'
  },
  {
    question: 'Q: Student Card ရဖို့အတွက် ဘယ်လိုမျိုးလုပ်ရမလဲ။',
    answer:
      'A: SFIx Student Card ရရှိရန်အတွက် Menu အောက်မှာ Student ID ဆိုတာလေးရှိပါတယ်ခင်ဗျ။ ထို့နောက် Edit ကိုနှိပ်ပြီးတော့ လိုအပ်တဲ့အချက်အလက်များကိုဖြည့်စွက်ပြီး Digital Student Card ကို Generate လုပ်နိုင်ပါတယ်။'
  },
  {
    question: 'Q: သင်ခန်းစာတွေကို ဘယ်လိုမျိုးလေ့လာရမလဲ။',
    answer: 'A: sfix.strategyfirst.edu.mm ကို browser ထဲကနေဝင်ပြီးတော့ လေ့လာလို့ရပါတယ်။'
  },
  {
    question: 'Q: Video Can’t Play ဆိုပြီးပေါ်နေတာဘာလို့လဲ?',
    answer:
      'A: အင်တာနက်လိုင်းအခက်အခဲကြောင့် Video Can’t Play ဆိုပြီးတော့ပေါ်နိုင်ပါတယ်ခင်ဗျ။ VPN ခံပြီးတော့အသုံးပြုပါက ပိတ်ပြီးတော့ပြန်ကြည့်ပေးပါ။'
  },
  {
    question:
      'Q: ပထမဆုံး Chapter ၂ - ၃ခု ကြည့်ပြီးတဲ့အခါမှာ Video တွေမပွင့်လာဘူး၊ ဆက်ကြည့်လို့မရနေဘူးဆိုရင် ဘယ်လိုလုပ်ရမလဲ?',
    answer: 'A: Feedback Survey လေးကို ဖြေပေးပြီးရင် Video များထပ်မံပွင့်လာပါလိမ့်မယ်။'
  },
  {
    question: 'Q: Enter Strategy First ID/ Promo Code (Optional) ဆိုတဲ့နေရာမှာဘာထည့်ပေးရမလဲ။',
    answer:
      'A: Strategy First ဘက်မှ Student ID လေးရှိပါက ထည့်သွင်းပေးလို့ရပါတယ်။ မရှိပါက ( - ) ခံထားခဲ့နိုင်ပါတယ်။'
  },
  {
    question: 'Q: Sign up လုပ်တဲ့နေရာမှာ Password က ဘာထည့်ပေးရမှာလဲ?',
    answer:
      'A: Sign up လုပ်တဲ့အဆင့်ဖြစ်တာကြောင့်မို့လို့ Password ကို မိမိကြိုက်နှစ်သက်ရာ ထားရှိနိုင်ပါတယ်။'
  },
  {
    question: 'Q: တက်ချင်တဲ့အတန်းကို Add to cart လုပ်လို့မရဘဲ Pending ဆိုပြီးပေါ်နေလို့။',
    answer:
      'A: Check out လုပ်ထားပြီးသွားတဲ့အဆင့်ရောက်သွားတာမို့လို့ Pending ဆိုပြီးပေါ်နေတာပါဖြစ်ပါတယ်။ သင်တန်းကြေးပေးသွင်းဖို့ကျန်ပါက ငွေလွှဲ Screenshot နဲ့အတူ SFIx Page Messenger သို့ပေးပို့ထားပြီးတော့ ကျောင်းဘက်ကိုအကြောင်းကြားနိုင်ပါတယ်။'
  },
  {
    question: 'Q: သင်တန်းကြေးကို ဘယ်ငွေလွှဲဝန်ဆောင်မှု Application တွေကနေ သွင်းဆောင်နိုင်ပါသလဲ?',
    answer:
      'A: KBZ Pay, Wave Pay, AYA Bank, CB Bank, AGD Bank, Yoma Bank mobile banking များဖြင့် သင်တန်းကြေးကို သွင်းလို့ရပါတယ်။'
  },
  {
    question:
      'Q: Strategy First Diploma in Entrepreneurship and Management အပ်ရင် အခမဲ့တက်ရောက်ခွင့်ရတဲ့ အတန်းတွေကို ဘယ်လိုတက်ရမလဲ။',
    answer:
      'A: Strategy First Diploma in Entrepreneurship and Management အတန်းကိုအပ်နှံထားပြီးပါက SFIx Certificate in Soft Skills for Leaders, SFIx Certificate in YSX- Understanding Capital Market, SFIx Certificate in Business Essentials and Employability Skills အတန်း (၃) တန်းကို အခမဲ့အနေနဲ့ လေ့လာနိုင်ပါတယ်။ Check out လုပ်ထားပြီးတော့ကျောင်းဘက်ကို ဆက်သွယ်အကြောင်းကြားပေးပါ။'
  },
  {
    question: 'Q: Check out လုပ်ပြီးသွားပြီ Invoice ဆိုပြီးပေါ်နေတာဘာဆက်လုပ်ရမလဲ?',
    answer:
      'A: သင်တန်းကြေး မပေးသွင်းရသေးပါက ပေးသွင်းပြီးတော့ ငွေလွှဲ Screenshot နှင့် SFIx Account ဖွင့်ထားတဲ့ဖုန်းနံပါတ်ကို SFIx Page Messenger သို့ပို့ထားပြီးတော့ အကြောင်းကြားထားပေးရပါမယ်။'
  },
  {
    question:
      'Q: သက်တမ်းတိုးဖို့အတွက် ငွေလွှဲ Screenshot ကို တင်ထားပြီးသွားပြီး သင်ခန်းစာကိုဆက်ကြည့်လို့မရသေးလို့။',
    answer:
      'A: SFIx Page Messenger (သို့) ဖုန်းနံပါတ်- 09400088050~54 ကိုဆက်သွယ်အကြောင်းကြားနိုင်ပါတယ်။ ကျောင်းဘက်ကနေစစ်ဆေးပြီးတော့ သက်တမ်းလေးတိုးပေးပါမယ်။'
  },
  {
    question: 'Q: Diploma အတန်းအတွက် Business Plan တင်ချင်တာဘယ်လိုမျိုးလုပ်ရမလဲ?',
    answer:
      'A: သက်ဆိုင်ရာအတန်း Group (သို့) SFIx Page Messenger (သို့) Hotline phone- 09400088050~54 သို့ ဆက်သွယ်မေးမြန်းနိုင်ပါတယ်။ ကျောင်းဘက်ကနေပြီးတော့ Email လေးပြန်ပို့ပေးပါမယ်။'
  },
  {
    question: 'Q: အတန်းဝယ်ပြီးသွားရင် Lifetime ရတာလား?',
    answer:
      'A: အတန်းဝယ်ယူပြီးသွားပါက Certificate အတန်းဆိုရင် (၁) နှစ်၊ Diploma အတန်းဆိုလို့ရှိရင် (၂) နှစ် သက်တမ်းရှိပါတယ်။ သက်တမ်းကုန်ဆုံးသွားပါက သင်ခန်းစာ video များလည်းပိတ်သွားမှာပါဖြစ်ပါတယ်။ Certificate အတန်းဆိုလျှင် (၁၀,၀၀၀) ကျပ်နှင့် Diploma တန်းဆိုလျှင် (၃၀,၀၀၀) ကျပ်ပေးသွင်းကာ သက်တမ်းတစ်နှစ်တိုးနိုင်ပါတယ်။'
  }
  // Add more FAQ items as needed
]

function toggleAccordion(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

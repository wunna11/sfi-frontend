<template>
  <div>
    <h1 class="mb-6 text-xl font-semibold text-primary">Student Card</h1>

    <hr class="w-full mb-6 border-gray-800" />
    <div class="text-xs font-normal">
      <span class="text-red-50"> သတိပေးချက် </span>
      - ကျောင်းသားကတ်ကို Generateမလုပ်မီ မိမိ၏ ဓာတ်ပုံ၊ မှတ်ပုံတင် နံပါတ် နှင့်
      မွေးနေ့အချက်အလက်များကို မှန်ကန်မှု ရှိ၊မရှိ သေချာစွာ စစ်ဆေးပေးရန်လိုအပ်ပါသည်။
      <br />ကျောင်းသားကတ်ကို Generate လုပ်ပြီးပါက ကျောင်းသားကတ်ရှိ အချက်အလက်များကို ပြန်လည်
      ပြင်ဆင်ခွင့်ရှိမည်မဟုတ်ပါ။
      <br />
      <br />
      <br />
      အကယ်၍ ပြန်လည်ပြင်ဆင်ရန် လိုအပ် လာပါက SFUx Facebook Page သို့မဟုတ် ဖုန်းနံပါတ် 09400088054 သို့
      ဆက်သွယ်နိုင်ပါသည်။
    </div>

    <div class="flex items-center justify-center">
      <div
        class="w-[300px] h-[473px] border border-gray-150 rounded-[26px] flex flex-col items-center justify-center mt-6"
      >
        <p>lorem</p>
      </div>
    </div>

    <div class="flex items-center justify-center text-primary gap-[14px] text-sm font-medium">
      <div class="px-4 rounded-[5px] py-[14px] border border-primary flex gap-[10px]">
        &nbsp; &nbsp;
        <PhPencilSimpleLine :size="16" />
        Edit &nbsp; &nbsp; &nbsp;
      </div>

      <div class="px-4 rounded-[5px] py-[14px] border border-primary flex gap-[10px]">
        <PhDownloadSimple :size="16" />
        Download
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhDownloadSimple, PhPencilSimpleLine } from '@phosphor-icons/vue'
</script>

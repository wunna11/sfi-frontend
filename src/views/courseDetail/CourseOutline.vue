<template>
  <div class="flex flex-col space-y-12">
    <p class="text-black-100 text-base">
      Human Resources Management သင်တန်းတွင် ဝန်ထမ်းတွေရဲ့ ပြုမှုပုံတွေကို လေ့လာပြီး ဝန်ထမ်းတွေကို
      ဘယ်လို ဆွဲဆောင်မလဲ၊ ခန့်ထားမလဲ၊ ဘယ်လို ထိန်းထားမလဲ ဆိုတာတွေ၊ အဖွဲ့အစည်းရဲ့ မူဝါဒတွေ စည်းကမ်း
      တွေကို ဝန်ထမ်းတွေ လိုက်နာအောင်၊ ဝန်ထမ်းတွေရဲ့ ကိုယ်ရည် ကိုယ်သွေး တိုးတက်မှု ရှိအောင်
      သင်တန်းပေးခြင်း၊ အကဲဖြတ်ခြင်း၊လစာနှင့် ဆုလာဒ်များ ချီးမြှင့်ခြင်း၊ ပဋိပက္ခဖြေရှင်းခြင်းနှင့်
      အလုပ်သမား သမဂ္ဂဆိုင်ရာ ကိစ္စရပ်များ၊ အလုပ်သမား ဥပဒေဆိုင်ရာ သတ်မှတ်ချက်စတာတွေအပြင်
      လူ့စွမ်းအားအရင်းအမြစ်စီမံခန့်ခွဲ မှုနှင့်သက်ဆိုင်သည့် သီအိုရီများ၊ ကာလတို၊ ကာလရှည်
      စီမံကိန်းများကိုလည်း ချမှတ်ရေးဆွဲခြင်း နှင့်
      အခြေခံသဘောတရားများကိုပါသင်ယူလေ့လာနိုင်မည်ဖြစ်ပါသည်။
    </p>

    <div>
      <p class="text-black-100 text-xl font-bold">ဘယ်သူတွေတက်ရောက်သင့်လဲ</p>
      <ul class="list-inside list-disc text-primary text-base py-4">
        <li class="mb-2">
          <span class="text-black-100"
            >နိုင်ငံတစ်ဝှမ်းမှ လူ့စွမ်းအားအရင်းအမြစ်စီမံခန့်ခွဲမှုပညာရပ်လေ့လာလိုသူများ။</span
          >
        </li>
        <li class="mb-2">
          <span class="text-black-100"
            >လက်ရှိ Human Resource နယ်ပယ်တွင် လုပ်ကိုင်နေသော ဝန်ထမ်းများနှင့်
            ဝင်ရောက်လုပ်ကိုင်လိုသောလူငယ်များ။</span
          >
        </li>
        <li class="mb-2">
          <span class="text-black-100"
            >ကျောင်းပိတ်ချိန်တွင်လူ့စွမ်းအားအရင်းအမြစ်စီမံခန့်ခွဲမှုပညာရပ်လေ့လာလိုသော
            တက္ကသိုလ်ကျောင်းသား/သူများ။</span
          >
        </li>
        <li>
          <span class="text-black-100"
            >ကိုယ်ပိုင်လုပ်ငန်းလုပ်ကိုင်နေသော လုပ်ငန်းရှင်များနှင့် ကိုယ်ပိုင်လုပ်ငန်းလုပ်ကိုင်ရန်
            ရည်ရွယ်ထားသူများ။</span
          >
        </li>
      </ul>
    </div>

    <div>
      <p class="text-black-100 text-xl font-bold">သင်ကြားရမည့်ခေါင်းစဥ်များ</p>
      <p class="text-black-100 text-base mt-4">
        SFU Certificate in Human Resource Management - BUS103 တွင်အောက်ပါ
        သင်ခန်းစာများကိုသင်ကြားရမှာဖြစ်ပါတယ်။
      </p>

      <div v-for="n in 6" :key="n">
        <div class="bg-white-150 mt-5 p-4 rounded-lg">
          <p class="text-primary">Part-1 : Scope of HRM</p>

          <div class="flex flex-col space-y-4 mt-5">
            <p class="text-black-100 text-base">
              Unit(1) - Introduction to HRM (Nature and Purpose of HRM)
            </p>
            <p class="text-black-100 text-base">Unit(2) - HR strategy</p>
            <p class="text-black-100 text-base">Unit(3) - HR Policy</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <p class="text-black-100 text-xl font-bold">သင်ကြားမည့်ဆရာမ</p>

      <div class="bg-white-150 rounded-lg mt-5">
        <div class="flex space-x-12 p-8">
          <img src="../../assets/images/teacher/DAAW.png" alt="DAAW" />
          <div class="flex flex-col items-center justify-center space-y-2">
            <p class="text-primary font-bold">Dr. Daw Ohnmar Myint</p>
            <p class="text-black-100">Ph.D (HRM, Delhi), M. Com, B. Com (Hons,YIE)</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <p class="text-black-100 text-xl font-bold">သင်ကြားမယ့်ပုံစံ</p>
      <div class="flex flex-col space-y-8 mt-5">
        <p class="text-black-100 text-base">
          ကြိုတင်ရိုက်ကူးထားတဲ့ ဗီဒီယိုတွေကို SFUx Mobile App နှင့် SFUx Website မှတစ်ဆင့်လေ့လာ
          သင်ယူရမှာဖြစ်ပါတယ်။ Certificate တစ်တန်းကို သင်တန်းအပ်နှံပြီးပါက ၁ နှစ်အတွင်း Self-paced
          ကိုယ်ပိုင်မြန်နှုန်းဖြင့် လေ့လာနိုင်မည်ဖြစ်ပါသည်။ သင်ခန်းစာပြီးတိုင်းမှာ 'Unit End Test'
          ဖြေဆိုရမှာ ဖြစ်ပြီး Unit အားလုံးဖြေဆိုအောင်မြင်ပါက 'Course End Test'
          ထပ်မံဖြေဆိုအောင်မြင်ပြီး Certificate ရယူနိုင်မှာဖြစ်ပါတယ်။ ကျောင်းသား၊သူများ အချင်းချင်း
          သင်ခန်းစာ များ ဆွေးနွေးနိုင်စေရန်အတွက် Facebook Group and Messenger Group
          များလည်းစီစဉ်ပေးထားပါသည်။ ကျောင်းသား/သူများအနေဖြင့် သင်ခန်းစာအလိုက် မရှင်းလင်းသည်များ ကို
          မေးမြန်းဆွေးနွေးနိုင်မှာဖြစ်ပါတယ်။
        </p>

        <p class="text-black-100 text-base">
          သင်တန်းများအောင်မြင်စွာ ပြီးစီးတဲ့အခါ SFUx Certificate/ SFU Diploma Softcopy
          ရရှိမည်ဖြစ်ပြီး Hardcopy ထပ်မံထုတ်ယူလိုပါက ရန်ကုန်မြို့ရှိ Strategy First University
          ကျောင်းခွဲများတွင် ထုတ်ယူနိုင်မှာ ဖြစ်ပါတယ်။ (ကျောင်းမှာလာရောက်ထုတ်ယူမည်ဆိုပါက 09894991040
          ကို ၁ရက်ကြို ဖုန်းဆက်ထားပေးရပါမည်။) အိမ်အရောက် ပို့ဆောင်ပေးဖို့အတွက် ပို့ခပေးဆောင်ရမှာ
          ဖြစ်ပါတယ်။
        </p>
      </div>
    </div>

    <div>
      <p class="text-black-100 text-xl font-bold">သင်တန်းကာလ</p>

      <p class="text-black-100 text-base mt-5">
        သင်တန်းအပ်နှံပြီးပါက ၁ နှစ်အတွင်း Self-paced ကိုယ်ပိုင်မြန်နှုန်းဖြင့်
        လေ့လာနိုင်မည်ဖြစ်ပါသည်။
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<template>
  <div class="bg-gray-150 flex space-x-4 p-5 rounded-lg mb-8">
    <img src="../../assets/images/warning.png" alt="Warning" />
    <p class="text-sm">
      You need to login with your SFUx account to process the checkout. If you don't have an
      account, please register first.
    </p>
  </div>

  <div class="grid grid-cols-10 gap-8">
    <div class="col-span-7 space-y-8">
      <!------------------------- Orders -------------------------->
      <div class="bg-white-50 p-8 shadow-lg shadow-gray-900/20 rounded-lg">
        <p class="font-semibold">Orders</p>

        <div class="grid grid-cols-8 gap-4 my-8">
          <div class="col-span-1">
            <img src="../../assets/images/course.png" alt="course" />
          </div>

          <div class="col-span-4 flex items-center">
            <p class="font-medium">SFUx Certificate in Human Resource Management</p>
          </div>

          <div class="col-span-2 flex items-center justify-center">
            <p class="text-primary font-medium">85,000 MMK</p>
          </div>

          <div class="col-span-1 flex items-center justify-center">
            <PhMinusCircle :size="28" color="#de0909" weight="fill" />
          </div>
        </div>

        <div @click="onClick" class="cursor-pointer">
          <p class="text-primary">+ add more course</p>
        </div>
      </div>
      <!------------------------- Orders -------------------------->

      <!------------------------- Payment -------------------------->
      <div class="bg-white-50 p-8 shadow-lg shadow-gray-900/20 rounded-lg">
        <p class="font-semibold">Payment Methods</p>

        <div class="flex space-x-4">
          <PaymentCard
            name="KBZ Pay"
            :src="KBZImage"
            :onClick="() => onClickPayment(PAYMENT.KBZ)"
            :selected="selectedPaymentMethod === PAYMENT.KBZ"
          />
          <PaymentCard
            name="Wave Pay"
            :src="WaveImage"
            :onClick="() => onClickPayment(PAYMENT.WAVE)"
            :selected="selectedPaymentMethod === PAYMENT.WAVE"
          />
          <PaymentCard
            name="Mobile Banking"
            :src="MobileBanking"
            :onClick="() => onClickPayment(PAYMENT.MOBILE_BANKING)"
            :selected="selectedPaymentMethod === PAYMENT.MOBILE_BANKING"
          />
        </div>

        <p class="text-red-50 mt-8">* ငွေလွှဲပြီးနောက် screenshot မဖြစ်မနေတင်ပေးရန်လိုအပ်ပါသည်။</p>

        <div
          :class="{
            'flex items-center justify-center': selectedPaymentMethod !== PAYMENT.MOBILE_BANKING,
            'p-4': selectedPaymentMethod === PAYMENT.MOBILE_BANKING
          }"
          class="mt-8 bg-white-150 py-8 rounded-xl"
        >
          <img
            v-if="selectedPaymentMethod === PAYMENT.KBZ"
            src="../../assets/images/payment/kbz-qr.png"
            alt="kbz-qr"
          />

          <img
            v-else-if="selectedPaymentMethod === PAYMENT.WAVE"
            src="../../assets/images/payment/wave-qr.png"
            alt="wave-qr"
          />

          <div
            v-else-if="selectedPaymentMethod === PAYMENT.MOBILE_BANKING"
            class="flex flex-col space-y-4"
          >
            <div v-for="(account, index) in bankingAccountArr" :key="index">
              <p class="text-sm">{{ account.label }}</p>
              <div
                :class="{
                  'bg-red-100': account.type === 'AYA',
                  'bg-blue-300': account.type === 'KBZ',
                  'bg-yellow-100': account.type === 'CB',
                  'bg-green-100': account.type === 'AGD',
                  'bg-red-150': account.type === 'YOMA'
                }"
                class="p-4 rounded-xl mt-2"
              >
                <div class="flex justify-between">
                  <div>
                    <p class="text-sm text-white-50 font-medium">{{ account.number }}</p>
                    <p class="text-sm text-white-50 font-medium">
                      {{ account.owner }}
                    </p>
                  </div>

                  <div @click="copy(account.number)" class="cursor-pointer">
                    <PhCopySimple :size="20" color="#ffffff" weight="fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!------------------------- Payment -------------------------->

      <!------------------------- Payment Screenshot Upload -------------------------->

      <div class="bg-white-50 p-8 shadow-lg shadow-gray-900/20 rounded-lg">
        <p class="font-semibold mb-8">Payment Screenshot Upload</p>
        <FileInput name="payment_screenshot" />
      </div>

      <!------------------------- Payment Screenshot Upload -------------------------->
    </div>

    <div class="col-span-3">
      <div class="bg-white-150 shadow-lg shadow-gray-900/20 p-8 rounded-lg">
        <p class="font-semibold">Order Summary</p>

        <div class="border border-gray-150 mt-6"></div>

        <div class="flex space-x-4 mt-6">
          <RadioInput
            name="gender"
            label="Gender"
            :options="offerOptions"
            v-model="selectedOfferOption"
          />
        </div>

        <div class="flex space-x-4 mt-4">
          <TextInput name="code" placeholder="Enter Code" class="grow" />
          <div class="my-1">
            <ButtonComponent type="submit" title="Apply" isDisabled />
          </div>
        </div>

        <div class="flex flex-col space-y-8 mt-6">
          <div class="flex justify-between">
            <p>Student ID</p>
            <p>-</p>
          </div>

          <div class="flex justify-between">
            <p>Order Type</p>
            <p>New Purchase</p>
          </div>

          <div class="flex justify-between">
            <p>Subtotal</p>
            <p>85,000 MMK</p>
          </div>

          <div class="flex justify-between">
            <p>Discount</p>
            <p>0 MMK</p>
          </div>

          <div class="border-t-2 border-dashed border-gray-700"></div>

          <div class="flex justify-between">
            <p>Totoal</p>
            <p>85,000 MMK</p>
          </div>

          <ButtonComponent title="Checkout" type="submit" primary />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PhMinusCircle, PhCopySimple } from '@phosphor-icons/vue'
import { useRouter } from 'vue-router'
import { useClipboard } from '@vueuse/core'
import PaymentCard from '../../components/PaymentCard.vue'
import KBZImage from '../../assets/images/payment/kbz.png'
import WaveImage from '../../assets/images/payment/wave.png'
import MobileBanking from '../../assets/images/payment/mobile-banking.png'
import { PAYMENT, SPECIALOFFER } from '../../types/enum'
import RadioInput from '../../components/form/RadioInput.vue'
import TextInput from '../../components/form/TextInput.vue'
import ButtonComponent from '../../components/form/ButtonComponent.vue'
import FileInput from '../../components/form/FileInput.vue'

const router = useRouter()

const selectedPaymentMethod = ref<number | null>(1)
const selectedOfferOption = ref<string | number>(1)

const source = ref('Hello')
const { copy } = useClipboard({ source })

const offerOptions = [
  { label: 'Cupon Code', value: SPECIALOFFER.cuponCode },
  { label: 'Referrer Student ID', value: SPECIALOFFER.referrerStudentId }
]

const bankingAccountArr = [
  {
    label: 'AYA Bank Account',
    number: '200-231-185-06',
    owner: 'SFUx(Strategy First Extension)Ltd',
    type: 'AYA'
  },
  {
    label: 'KBZ Bank Account',
    number: '029-103-029-036-83801',
    owner: 'SFUx(Strategy First Extension) Co.,Ltd',
    type: 'KBZ'
  },
  {
    label: 'CB Bank Account',
    number: '008-610-050-002-9197',
    owner: 'SFUx(Strategy First Extension) Co.,Ltd',
    type: 'CB'
  },
  {
    label: 'AGD Bank Account',
    number: '325-001-100-095-9016',
    owner: 'ACK & Co Services Co.,Ltd',
    type: 'AGD'
  },
  {
    label: 'Yoma Bank Account',
    number: '000-910-262-001-020',
    owner: 'U Aung Chit Khin',
    type: 'YOMA'
  }
]

const onClick = () => {
  router.push({ path: '/' })
}

const onClickPayment = (method: number) => {
  selectedPaymentMethod.value = method
}
</script>

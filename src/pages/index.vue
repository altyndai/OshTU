<template>
    <div class="navbar top-0 sticky">
        <div class="container">
            <div class="flex align-items-center justify-content-between">
                <img style="width: 70px;border-bottom-left-radius: 95px;border-bottom-right-radius: 95px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfZc-azsXa3ggqTit6BVwPAJdz9g3WHegCgJkNhqB3g&s" alt="">
                <h1 class="text-base md:text-2xl text-right">Жеңишбек кызы Алтындай</h1>
            </div>
        </div>
    </div>
    <div class="container pb-6">
        <h1 class="mt-4 mb-3">Тест</h1>
       <div class="flex flex-column mb-4">
        <div class="flex align-items-start mb-3">
            <p class="m-0"><span>1.</span>Кыргызстандын борбору?</p>
        </div>
        <div class="flex flex-column flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="form.first" inputId="firstA" name="first" value="Бишкек" />
                <label for="firstA" class="ml-2">Бишкек</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.first" inputId="firstB" name="first" value="Ош" />
                <label for="firstB" class="ml-2">Ош</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.first" inputId="firstC" name="first" value="Баткен" />
                <label for="firstC" class="ml-2">Баткен</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.first" inputId="firstD" name="first" value="Талас" />
                <label for="firstD" class="ml-2">Талас</label>
            </div>
        </div>
       </div>
       <div class="flex flex-column mb-4">
        <div class="flex align-items-start mb-3">
            <p class="m-0"><span>2.</span>Эн чон област?</p>
        </div>
        <div class="flex flex-column flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="form.second" inputId="secondA" name="second" value="Чуй" />
                <label for="secondA" class="ml-2">Чуй</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.second" inputId="secondB" name="second" value="Нарын" />
                <label for="secondB" class="ml-2">Нарын</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.second" inputId="secondC" name="second" value="Баткен" />
                <label for="secondC" class="ml-2">Баткен</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.second" inputId="secondD" name="second" value="Талас" />
                <label for="secondD" class="ml-2">Талас</label>
            </div>
        </div>
       </div>

       <div class="flex flex-column mb-4">
        <div class="flex align-items-start mb-3">
            <p class="m-0"><span>3.</span>Эн чон шаркыратма?</p>
        </div>
        <div class="flex flex-column flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="form.third" inputId="thirdA" name="third" value="Анхель" />
                <label for="thirdA" class="ml-2">Анхель</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.third" inputId="thirdB" name="third" value="Ниагара" />
                <label for="thirdB" class="ml-2">Ниагара</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.third" inputId="thirdC" name="third" value="Виктория" />
                <label for="thirdC" class="ml-2">Виктория</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.third" inputId="thirdD" name="third" value="Абшыр-Ата" />
                <label for="thirdD" class="ml-2">Абшыр-Ата</label>
            </div>
        </div>
       </div>

       <div class="flex flex-column mb-4">
        <div class="flex align-items-start mb-3">
            <p class="m-0"><span>4.</span>Эн чон материк?</p>
        </div>
        <div class="flex flex-column flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="form.forth" inputId="forthA" name="forth" value="Тундук Америка" />
                <label for="forthA" class="ml-2">Тундук Америка</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.forth" inputId="forthB" name="forth" value="Евразия" />
                <label for="forthB" class="ml-2">Евразия</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.forth" inputId="forthC" name="forth" value="Австралия" />
                <label for="forthC" class="ml-2">Австралия</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.forth" inputId="forthD" name="forth" value="Африка" />
                <label for="forthD" class="ml-2">Африка</label>
            </div>
        </div>
       </div>
       <div class="flex flex-column mb-4">
        <div class="flex align-items-start mb-3">
            <p class="m-0"><span>5.</span>Эн чон арал?</p>
        </div>
        <div class="flex flex-column flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="form.fiveth" inputId="fivethA" name="fiveth" value="Гренландия" />
                <label for="fivethA" class="ml-2">Гренландия</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.fiveth" inputId="fivethB" name="fiveth" value="Мадагаскар" />
                <label for="fivethB" class="ml-2">Мадагаскар</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.fiveth" inputId="fivethC" name="fiveth" value="Жарым дениз аралы" />
                <label for="fivethC" class="ml-2">Жарым дениз аралы</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="form.fiveth" inputId="fivethD" name="fiveth" value="Австралия" />
                <label for="fivethD" class="ml-2">Австралия</label>
            </div>
        </div>
       </div>



        <div class="flex justify-content-end">
            <Button label="Отправить" @click="submit"/>
        </div>
    </div>
  <Dialog v-model:visible="visible"  modal header="Регистрация" :style="{ width: '25rem' }">
    <div class="flex align-items-center gap-3 mb-3">
      <label for="name" class="font-semibold w-6rem">ФИО</label>
      <InputText id="name" class="flex-auto" :class="{'p-invalid': validations.name.show}" autocomplete="off" v-model="form.name" @input="validations.name.validate()"/>
    </div>
    <div class="flex align-items-center gap-3 mb-5">
      <label for="group" class="font-semibold w-6rem">Группа</label>
      <InputText id="group" class="flex-auto" :class="{'p-invalid': validations.group.show}" autocomplete="off" v-model="form.group" @input="validations.group.validate()"/>
    </div>
    <div class="flex align-items-center gap-3 mb-5">
      <label for="email" class="font-semibold w-6rem">Email</label>
      <InputText id="email" class="flex-auto" :class="{'p-invalid': validations.email.show}" autocomplete="off" v-model="form.email" @input="validations.email.validate()"/>
    </div>
    <div class="flex justify-content-end gap-2">
      <Button type="button" label="Save" @click="getName"></Button>
    </div>
  </Dialog>
</template>
<!--<script lang="js">-->
<!--import { defineComponent, ref, reactive } from 'vue';-->
<!--import emailjs from 'emailjs-com';-->

<!--emailjs.init('VBfheZhp06HK3JnWR');-->

<!--export default defineComponent({-->
<!--  data() {-->
<!--    return {-->
<!--      form: {-->
<!--        name: '',-->
<!--        group: '',-->
<!--        email: '',-->
<!--        first: '',-->
<!--        second: '',-->
<!--        third: '',-->
<!--        forth: '',-->
<!--        fiveth: ''-->
<!--      },-->
<!--      visible: true,-->
<!--      validations: {-->
<!--        name: {-->
<!--          message: 'ФИО может быть пустым',-->
<!--          show: false,-->
<!--          validate: ()=> {-->
<!--            this.show = this.form.name === '';-->
<!--            return !this.show;-->
<!--          }-->
<!--        },-->
<!--        group: {-->
<!--          message: 'Группа может быть пустым',-->
<!--          show: false,-->
<!--          validate: ()=> {-->
<!--            this.show = this.form.group === '';-->
<!--            return !this.show;-->
<!--          }-->
<!--        },-->
<!--        email: {-->
<!--          message: 'Email может быть пустым',-->
<!--          show: false,-->
<!--          validate: ()=> {-->
<!--            this.show = this.form.email === '';-->
<!--            return !this.show;-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    validate() {-->
<!--      for (const validationItem of Object.values(this.validations)) {-->
<!--        if (!validationItem.validate()) {-->
<!--          return false;-->
<!--        }-->
<!--      }-->
<!--      return true;-->
<!--    },-->
<!--    getName() {-->
<!--      if (this.validate()) {-->
<!--        console.log(this.form);-->
<!--        this.visible = false;-->
<!--      }-->
<!--    },-->
<!--    async submit() {-->
<!--      let ball = 0;-->

<!--      if (this.form.first === 'Бишкек') {-->
<!--        ball++;-->
<!--      }-->
<!--      if (this.form.second === 'Нарын') {-->
<!--        ball++;-->
<!--      }-->
<!--      if (this.form.third === 'Анхель') {-->
<!--        ball++;-->
<!--      }-->
<!--      if (this.form.forth === 'Евразия') {-->
<!--        ball++;-->
<!--      }-->
<!--      if (this.form.fiveth === 'Гренландия') {-->
<!--        ball++;-->
<!--      }-->
<!--      emailjs.send("service_5pbd6ti","template_rhw9y49",{-->
<!--        to_name: `Эжеке`,-->
<!--        from_name: `${this.form.name}`,-->
<!--        name: `${this.form.name}`,-->
<!--        group: `${this.form.group}`,-->
<!--        ball: `${ball}/5`,-->
<!--        email: `${this.form.email}`-->
<!--      });-->
<!--      this.form = {-->
<!--        name: '',-->
<!--        group: '',-->
<!--        first: '',-->
<!--        second: '',-->
<!--        third: '',-->
<!--        forth: '',-->
<!--        fiveth: ''-->
<!--      };-->
<!--    }-->
<!--  }-->
<!--});-->
<!--</script>-->
<script lang="ts" setup>
import {reactive, ref} from 'vue';
import emailjs from 'emailjs-com';

emailjs.init('VBfheZhp06HK3JnWR');

const form = ref({
  name: '',
  group: '',
  email: '',
  first: '',
  second: '',
  third: '',
  forth: '',
  fiveth: ''
})
const visible = ref(true)

const validations = reactive({
  name: {
    message: 'ФИО может быть пустым',
    show: false,
    validate: ()=>{
      form.value.name
      if (form.value.name == ''){
        validations.name.show = true;
      }else {
        validations.name.show = false
      }
      return !validations.name.show
    }

  },
  group: {
    message: 'Группа может быть пустым',
    show: false,
    validate: ()=>{
      if (form.value.group == ''){
        validations.group.show = true;
      }else {
        validations.group.show = false
      }
      return  !validations.group.show
    }
  },
  email: {
    message: 'email может быть пустым',
    show: false,
    validate: ()=>{
      if (form.value.email == ''){
        validations.email.show = true;
      }else {
        validations.email.show = false
      }
      return  !validations.email.show
    }
  }
})
const validate = () => {
  for (const validationItem of Object.values(validations)) {
    const valid = validationItem.validate()
    if (!valid) { return false }
  }
  return true
}
const getName = ()=>{
  validate()
  console.log(form.value)
  visible.value = false
}
const submit = async ()=>{
  let ball = 0;
  let countQuestion = 0;

  if (form.value.first === 'Бишкек'){
    ball++
  }
  if (form.value.second === 'Нарын'){
    ball++
  }
  if (form.value.third === 'Анхель'){
    ball++
  }
  if (form.value.forth === 'Евразия'){
    ball++
  }
  if (form.value.fiveth === 'Гренландия'){
    ball++
  }
  emailjs.send("service_5pbd6ti","template_rhw9y49",{
    to_name: `Эжеке`,
    from_name: `${form.value.name}`,
    name: `${form.value.name}`,
    group: `${form.value.group}`,
    ball: `${ball}/5`,
    email: `${form.value.email}`
  });
  Object.assign(form.value, {
    name: '',
    group: '',
    first: '',
    second: '',
    third: '',
    forth: '',
    fiveth: ''
  })
}
</script>
<style>
.p-dialog-header-icons{
  display: none !important;
}
</style>

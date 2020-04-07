<template>
  <div>
    <h3>Vuelidate Form Elements</h3>
    <form
      novalidate
      class="form-label"
      @submit.prevent="submitForm"
    >
        <div class="form-row">
          <label class="form-label">
            Name <br>
            <input
              type="text"
              placeholder="Name"
              :class="($v.model.name.$invalid && $v.model.name.$dirty) ? 'invalid' : 'valid'"
              v-model.lazy="$v.model.name.$model">
            <span
              class="error-massage"
              v-if="!$v.model.name.required && $v.model.name.$dirty"
            >
              {{$v.model.name.$params.required.msg}}
            </span>
            <span
              class="error-massage"
              v-if="!$v.model.name.minLength && $v.model.name.$dirty"
            >
              Must be more than 2 characters! (Error Message From Template)
            </span>
          </label>
          <label class="form-label">
            Email <br>
            <input
              type="email"
              placeholder="Email"
              :class="($v.model.email.$invalid && $v.model.email.$dirty) ? 'invalid' : 'valid'"
              v-model="$v.model.email.$model"
            >
            <span
              class="error-massage"
              v-if="!$v.model.email.email && $v.model.email.$dirty"
            >
              Invalid Email
            </span>
          </label>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="$v.$invalid"
        >
          Submit Form
        </button>
    </form>

    <div>
      <h5>Model</h5>
      <pre>
        {{$v.model}}
      </pre>
    </div>

    <div>
      <h4>Importance Notes</h4>
      <div>
        Additional Packages: <b>vuelidate-property-decorators</b>,
        <b>@types/vuelidate</b>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import { Component } from 'vue-property-decorator';
import { validationMixin } from 'vuelidate';
import {
  required,
  minLength,
  email,
  helpers,
} from 'vuelidate/lib/validators';

const requiredWithParams = helpers.withParams(
  { type: 'required', msg: 'Custom Error Message From $param' },
  (value: string) => !!value,
);

@Component({
  name: 'vuelidate-form',
  validations: {
    model: {
      name: {
        required: requiredWithParams,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
    },
  },
})
export default class VuelidateForm extends mixins(validationMixin) {
  model = {
    name: '',
    email: '',
  };

  submitForm(): void {
    console.log(this.$v.$invalid);
  }
}
</script>

<style lang="scss" scoped>
  .form-label .invalid {
    border: 1px solid $red;
    margin-bottom: 3px;
  }
  .error-massage {
    padding: 5px;
    color: red;
    font-size: 12px;
  }
</style>

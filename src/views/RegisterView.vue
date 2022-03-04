<template>
  <div>
    <form class="form-signin">
      <div class="text-center mb-4">
        <img
          class="mb-3"
          :src="require('@/assets/logo_transparent.png')"
          alt="app logo"
          width="200"
        />
        <h1 class="h3 mb-3 font-weight-normal">
          Create your SimbaWise account
        </h1>
        <p class="lead">
          Sign up today and join others in sending virtual money in the
          currencies of (USD, EUR, NGN) to other users.
        </p>
      </div>

      <div class="form-label-group">
        <input
          id="inputUsername"
          class="form-control"
          placeholder="Username"
          required
          autofocus
        />
        <label for="inputEmail">Username</label>
      </div>

      <div class="form-label-group">
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
        />
        <label for="inputEmail">Email address</label>
      </div>

      <div class="form-label-group">
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
        <label for="inputPassword">Password</label>
      </div>

      <button class="btn btn-lg primary-btn btn-block" type="submit">
        Sign up
      </button>
      <p class="mt-5 mb-3 text-muted text-center">
        Already have an account?
        <span @click="$router.push({ name: 'login' })" class="auth-toggle ml-1">
          Sign in
        </span>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input,
.form-label-group label {
  height: 3.125rem;
  padding: 0.75rem;
}

.form-label-group label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:-moz-placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group input:not(:-ms-input-placeholder) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group input:not(:-moz-placeholder-shown) ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

.form-label-group input:not(:-ms-input-placeholder) ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

.form-label-group input:-webkit-autofill ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }

  .form-label-group label {
    position: static;
  }

  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

.primary-btn,
.primary-btn:hover {
  background-color: #718ae8;
  border-color: #718ae8;
  color: #ffffff;
}

.lead {
  letter-spacing: -0.05rem;
}

.auth-toggle {
  color: #393737;
  cursor: pointer;
}
</style>

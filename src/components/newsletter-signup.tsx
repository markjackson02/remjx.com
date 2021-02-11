import React from 'react';

function createMarkup() {
    return {__html: `
        
<link rel="stylesheet"
href="https://emailoctopus.com/bundles/emailoctopuslist/css/1.6/form.css"
>
<div class="emailoctopus-form-wrapper emailoctopus-form-default emailoctopus-form-wrapper-large"
style="font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; color: rgb(26, 26, 26);"
>
<h2 class="emailoctopus-heading">
Subscribe to my list
</h2>
<p class="emailoctopus-success-message">
</p>
<p class="emailoctopus-error-message">
</p>
<form action="https://emailoctopus.com/lists/9bf57356-6c89-11eb-a3d0-06b4694bee2a/members/embedded/1.3s/add"
  method="post"
  data-message-success="Thanks for subscribing!"
  data-message-missing-email-address="Your email address is required."
  data-message-invalid-email-address="Your email address looks incorrect, please try again."
  data-message-bot-submission-error="This doesn't look like a human submission."
  data-message-consent-required="Please check the checkbox to indicate your consent."
  data-message-invalid-parameters-error="This form has missing or invalid fields."
  data-message-unknown-error="Sorry, an unknown error has occurred. Please try again later."
  class="emailoctopus-form"
  data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
>
<div class="emailoctopus-form-row">
<label for="field_0">
  Email address
</label>
<input id="field_0"
       name="field_0"
       type="email"
       placeholder
       required="required"
>
</div>
<div aria-hidden="true"
   class="emailoctopus-form-row-hp"
>
<input type="text"
       name="hpc4b27b6e-eb38-11e9-be00-06b4694bee2a"
       tabindex="-1"
       autocomplete="nope"
>
</div>
<div class="emailoctopus-form-row-subscribe">
<input type="hidden"
       name="successRedirectUrl"
>
<button type="submit"
        style="background-color: rgb(224, 224, 224); color: rgb(0, 0, 0); font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif;"
>
  Subscribe
</button>
</div>
</form>
</div>
<script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.6/form-recaptcha.js">
</script>
<script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.6/form-embed.js">
</script>

    `};
  }

export const NewsletterSignup = () => (
    <div
        dangerouslySetInnerHTML={createMarkup()}
    />
)
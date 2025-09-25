<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=true displayMessage=!messagesPerField.existsError('username'); section>

<#-- Header section -->
<#if section = "header">
<div class="login-header">
    <img src="${url.resourcesPath}/images/Logo.png" alt="Логотип" class="login-logo" />
    <h2 class="login-title">Сбросить пароль</h2>
</div>

<#-- Form section -->
<#elseif section = "form">
<div class="login-container-wrapper">
    <form
            id="kc-reset-password-form"
            class="login-form"
            action="${url.loginAction}"
            method="post">

        <div class="form-group">
            <label for="username" class="form-label">Email</label>
            <input
                    type="text"
                    id="username"
                    name="username"
                    class="form-control"
                    autofocus
                    value="${(auth.attemptedUsername!'')}"
                    aria-invalid="<#if messagesPerField.existsError('username')>true</#if>"
                    dir="ltr" />

            <#-- Display error message for username -->
            <#if messagesPerField.existsError('username')>
            <div class="form-error">
                ${kcSanitize(messagesPerField.get('username'))?no_esc}
            </div>
        </#if>
</div>

<div class="form-group">
    <button type="submit" class="btn btn-primary">Отправить</button>
</div>

<#-- Link below the button for users who remembered their password -->
<div class="register-block">
    Вспомнили пароль?
    <a href="${url.loginUrl}" class="register-link">Войти</a>
</div>

</form>
</div>

<#-- Info section -->
<#elseif section = "info">
<div class="form-info">
    Введите ваш email, и мы отправим ссылку для восстановления пароля.
</div>
</#if>

</@layout.registrationLayout>

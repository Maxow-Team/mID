<#import "template.ftl" as layout>
<@layout.registrationLayout; section>

<#-- Header section -->
<#if section = "header">
<div class="login-header">
    <img src="${url.resourcesPath}/images/Logo.png" alt="Логотип" class="login-logo" />
    <h2 class="login-title">Создание аккаунта</h2>
</div>

<#-- Form section -->
<#elseif section = "form">
<div class="login-container-wrapper">
    <form id="kc-register-form" class="login-form" action="${url.registrationAction}" method="post">

        <div class="form-group">
            <label for="nickname" class="form-label">Никнейм</label>
            <input
                    type="text"
                    id="nickname"
                    class="form-control"
                    name="nickname"
                    value="${(login.nickname!'')}"
                    autocomplete="nickname"
                    aria-invalid="<#if messagesPerField.existsError('nickname')>true</#if>" />
        </div>

        <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
                    type="email"
                    id="email"
                    class="form-control"
                    name="email"
                    value="${(login.username!'')}"
                    autocomplete="email"
                    aria-invalid="<#if messagesPerField.existsError('email')>true</#if>" />
        </div>

        <div class="form-group">
            <label for="password" class="form-label">Пароль</label>
            <input
                    type="password"
                    id="password"
                    class="form-control"
                    name="password"
                    autocomplete="new-password"
                    aria-invalid="<#if messagesPerField.existsError('password','password-confirm')>true</#if>" />
        </div>

        <div class="form-group">
            <label for="password-confirm" class="form-label">Подтверждение пароля</label>
            <input
                    type="password"
                    id="password-confirm"
                    class="form-control"
                    name="password-confirm"
                    autocomplete="new-password"
                    aria-invalid="<#if messagesPerField.existsError('password-confirm')>true</#if>" />
        </div>

        <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Зарегистрироваться"/>
        </div>

    </form>
</div>

<#-- Social providers section -->
<#elseif section = "socialProviders">
<div class="login-container-wrapper">

    <div class="divider">ИЛИ</div>

    <div class="social-providers">
        <a href="#" class="social-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
        </a>

        <a href="#" class="social-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
                <path d="M12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 4.5c1.93 0 3.5 1.57 3.5 3.5S13.93 11.5 12 11.5 8.5 9.93 8.5 8 10.07 4.5 12 4.5z"/>
            </svg>
        </a>

        <a href="#" class="social-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
                <path d="M20.222 5.174c-1.332-.734-2.738-1.235-4.188-1.487a.382.382 0 0 0-.44.378c.08.41.221.82.353 1.228-1.748-.288-3.456-.288-5.124 0 .14-.408.272-.818.352-1.228a.382.382 0 0 0-.439-.378c-1.45.252-2.856.753-4.188 1.487a.415.415 0 0 0-.222.464c.548 2.193 1.603 4.148 3.155 5.67C3.93 13.049 3.012 15.34 3.012 15.34a.43.43 0 0 0 .161.545c1.474.912 2.923 1.39 4.417 1.704a.39.39 0 0 0 .432-.361c-.04-.316-.08-.632-.12-.948-1.125-.216-2.208-.528-3.232-.936.958.624 2.052 1.152 3.256 1.572.24.084.48.168.736.24a.402.402 0 0 0 .462-.396c-.072-.456-.144-.912-.204-1.38.001 0-1.211-.264-1.211-.264-1.14-.3-2.113-.78-2.928-1.416a.37.37 0 0 1-.096-.516c.15-.22.31-.44.47-.65 2.158 1.344 4.887 1.344 7.045 0 .16.21.32.43.47.65a.37.37 0 0 1-.096.516c-.815.636-1.787 1.116-2.927 1.416 0 0-1.21.264-1.21.264-.06.468-.132.924-.204 1.38a.402.402 0 0 0 .462.396c.256-.072.496-.156.736-.24 1.204-.42 2.298-.948 3.256-1.572-1.024.408-2.108.72-3.232.936-.04.316-.08.632-.12.948a.39.39 0 0 0 .432.361c1.494-.314 2.944-.792 4.417-1.704a.43.43 0 0 0 .16-.545s-.918-2.291-2.06-3.765c1.552-1.522 2.607-3.477 3.155-5.67a.415.415 0 0 0-.222-.464z"/>
            </svg>
        </a>
    </div>

    <div class="register-block" style="text-align:center; margin-top:12px;">
        Уже есть аккаунт?
        <a href="${url.loginUrl}" class="register-link">Войти</a>
    </div>

</div>
</#if>

</@layout.registrationLayout>

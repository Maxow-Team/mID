Данный репозиторий это единый сервис авторизации mID.

Запуск сервиса:
Перед запуском необходимо создать файл .env в корне проекта и заполнить его следующими переменными окружения:

```plaintext
KEYCLOAK_ADMIN
KEYCLOAK_ADMIN_PASSWORD
DB_USER
DB_PASSWORD
```

После этого можно запустить сервис с помощью Docker Compose:

```bash
docker-compose up -d
```
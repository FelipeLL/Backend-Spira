# BACKEND - Spira

## Configuración del entorno

1. Crear la base de datos
2. Copiar .env.example a .env and rellenar con las credenciales de su base de datos local

Ahora, instale las dependencias

```bash
npm install
```

3. Migrations:

```bash
npx sequelize-cli db:migrate
```

4. Seeders:

```bash
npx sequelize-cli db:seed:all
```

## Iniciar servidor local

```bash
npm start
```

## Credenciales administrador

```bash
user: admin@test.com
```

```bash
password: 12
```

## Variables de entorno 

```bash
TOKEN_SECRET="vXVH6sdmpNWjRRIqCc7rdxs01lwHzfr3"
```

```bash
SALT=10
```

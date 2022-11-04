# BACKEND - Spira

## Envinroment setup

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

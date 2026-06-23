Após clonar o repositorio e dar um npm install para instalar todas as dependencias necessarias, crie o banco de dados e configure o .env

Crie os modelos em schema.prisma e dps use os dois comando 
-> npx prisma migrate dev --name init
-> npx prisma generate

configure o arquivo server.ts para testar a api com o comando npm run dev
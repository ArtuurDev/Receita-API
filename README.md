Desafio Técnico Concluído com Sucesso!
Como rodar o projeto na sua máquina
- Clonar o repositório:
Copie o link do projeto e execute o seguinte comando no terminal:
git clone <link-do-repositorio>
- Entrar no repositório:
Após a clonagem, acesse a pasta do projeto:
cd <nome-do-repositorio>
- Instalar as dependências:
Execute o seguinte comando para instalar as dependências do projeto:
npm install
- Certificar-se de que o Docker está instalado:
Verifique se você tem o Docker instalado na sua máquina. Se não tiver, faça a instalação a partir do site oficial do Docker.
- Subir os serviços com Docker Compose:
No terminal, execute:
docker-compose up -d
Esse comando iniciará os contêineres do projeto em segundo plano.
- Rodar o projeto em modo desenvolvimento:
- Digite o comando npx prisma generate
Por fim, execute:
npm run start:dev

agora o projeto está rodando na sua maquina
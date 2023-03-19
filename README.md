# DocBot

Inicialmente tenho uma ideia inicial para criar um chat de documentação e auxilio dos objetos usando o ChatGPT

---

Server (Serviços) Backend 

1. Regras de negócio
2. Parte lógica
3. Credibilidade
4. Segurança
5. Tratamento de Dados

OpenIA (SERVER)

1. Server de terceiro

Client

1. Apresentação de dados
2. Cuidar de como o usuário imputa o dados
3. Experiência do Usuário

NODEMON -D (-d para ficar somente em desenvolvimento) não vai para produção

cors

dotenv para os dados senveis 

express

OpenIA

Controllers: Controlar quem acessa e controlar as respostas de devolução (request e response)

Rotas: Quem vai o apontamento de endereços para o nossos controller

Model é a forma de entrada/saída de dados no seu servidor

Config: server para colocar configurações de outras aplicações de terceiros e dados sensíveis

Configurações não embarcadas (.env): server para insolar dados sensiveis 

 Tenho que criar um banco de dados com as informações dos objetos do Studio e fazer o envio para que toda vez que abra o chat traga essas informações

yarn start - front

npm run dev - back

# <p align = "center"> Projeto 22 - Quizz Game </p>

##  :clipboard: Description

Quizz Game is a game of questions which the player can choose among four auternatives of answers. If get it right the player get one point and if get it worng it is game over.

***

## :computer:	 Tecnologies and Concepts

- REST APIs
- Node.js
- TypeScript
- Prisma

***

## :rocket: Routes

```yml
POST /user
    - Register new user
    - headers: {}
    - body: {
        "username": "player_name"
    }
```
    
```yml 
PUT /user
    - Update user's score
    - headers: {}
    - body: {
        "username": "player_name",
        "score": "10"
    }
```

```yml 
GET /quiz
    - Get all quizes from database, until now there are 48 questions
    - headers: {}
    - body: {}
    - response: [
  {
    "id": 1,
    "question": "Quantos planetas Terra cabem dentro do Sol?",
    "answer": [
      {
        "id": 1,
        "answer": "Um milhão",
        "questionId": 1,
        "correct": true
      },
      {
        "id": 2,
        "answer": "Dois milhões",
        "questionId": 1,
        "correct": false
      },
      {
        "id": 3,
        "answer": "Seiscentos",
        "questionId": 1,
        "correct": false
      },
      {
        "id": 4,
        "answer": "Cento e cinquenta",
        "questionId": 1,
        "correct": false
      }
    ]
  },
  ...
]
```
***

## 🏁 Running the project

1. Clone the repository:

```bash
    git clone https://github.com/AlineCantalice/projeto22-quizzGame.git
```

2. Navigate to the project directory:
    
```bash
    cd projeto22-quizzGame
```
3. Install the dependencies:
    
```bash
    npm install
```
4. Set your environment variables following the .env.sample file:

   **Notes**: `PORT` must be a number, `DATABASE_URL`, `CRYPTR_SECRET` and `JWT_SECRET` must be strings

```ts
    DATABASE_URL=
    PORT=
```
5. Generate prisma models that could exist in database:

```
  npx prisma db pull
```
  **Notes**: If there are no models, run the following to generate the models from prisma:
```
  npx prisma migrate dev
```

6. Run the project on dev mode

```bash
   npm run dev
```

7. Front-end:
**Note**: Clone the repository of the front in
```bash
    git clone https://github.com/AlineCantalice/projeto22-quizzGame-front.git
```
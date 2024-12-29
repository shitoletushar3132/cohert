import { PrismaClient, Todo, User } from "@prisma/client";

const prisma = new PrismaClient();

// const data = prisma.user.findMany().then((res) => {
//   return res;
// });
// data.then((data) => console.log(data));

type refined = Pick<User, "username" | "firstname" | "lastname" | "password">;

type todoRefined = Pick<Todo, "title" | "description" | "done" | "userId">;

async function insertUser(user: refined) {
  const data = await prisma.user.create({
    data: user,
  });

  console.log(data);
}

async function insertTodo(todo: todoRefined) {
  const res = await prisma.todo.create({
    data: todo,
  });
  console.log(res);
}

// insertUser({
//   username: "tuahr",
//   password: "1234",
//   firstname: "tus",
//   lastname: "shi",
// });

async function getTodosAndUserDetails(userId: number) {
  const response = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      User: true,
    },
  });
  console.log(response);
}

getTodosAndUserDetails(1);

// insertTodo({
//   title: "do that",
//   description: "what is",
//   done: false,
//   userId: 1,
// });

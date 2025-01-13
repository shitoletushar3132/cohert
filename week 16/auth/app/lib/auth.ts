import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        return {
          id: "user1",
          name: "user",
          email: "user@gmail.com",
        };
      },
    }),
  ],
  secret: "tushar",
  callbacks: {
    jwt: ({ token, user }: any) => {
      console.log(token);
      token.userId = "23";
      return token;
    },
    session: ({ session, token, user }: any) => {
      session.user.id = token.sub;
      return session;
    },
  },
};

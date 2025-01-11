import { prisma } from "@/lib/db";

async function getUserData() {
  const user = await prisma.user.findFirst();

  return {
    id: user?.id,
    email: user?.email,
  };
}

export default async function Home() {
  const data = await getUserData();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        {data.id}
        <br />
        {data.email}
      </div>
    </div>
  );
}

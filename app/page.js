"use client";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home({ newsResults, randomUsersResults }) {
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/auth/signin");
  //   },
  // });

  const [news, setNews] = useState([]);
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
      );
      const data = await res.json();
      setNews(data.articles);
    };
    getNews();
    const getUsers = async () => {
      const res = await fetch(
        "https://randomuser.me/api/?results=30&inc=name,login,picture"
      );
      const data = await res.json();
      setRandomUsers(data.results);
    };
    getUsers();
  }, []);

  return (
    <div>
      <main className="flex min-h-screen mx-auto ">
        <Sidebar />
        <Feed />
        <Widgets newsResults={news} randomUsersResults={randomUsers} />
      </main>
    </div>
  );
}

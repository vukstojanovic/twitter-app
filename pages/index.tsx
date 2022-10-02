import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";
import Widget from "../components/Widget/Widget";
import Feed from "../components/Feed/Feed";
import { Tweet } from "../typings";
import fetchTweets from "../utils/fetchTweets";
import { Toaster } from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Toaster />
      <div className="grid grid-cols-9 h-screen overflow-hidden lg:max-w-6xl mx-auto">
        <Sidebar />
        <Feed tweets={tweets} />
        <Widget />
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    },
  };
};

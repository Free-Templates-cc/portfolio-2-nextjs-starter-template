import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiscussProjects from "@/components/DiscussProjects";
import TestimonialArea from "@/components/TestimonialArea";
import BlogArea from "@/components/BlogArea";
import SliderArea from "@/components/SliderArea";
import PortfolioArea from "@/components/PortfolioArea";
import ServiceArea from "@/components/ServiceArea";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio 2 - Free Starter Templates</title>
        <meta name="description" content="Portfolio 2 - Free Starter Templates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SliderArea />
      <PortfolioArea />
      <ServiceArea />
      <BlogArea />
      <TestimonialArea />
      <DiscussProjects />
      <Footer />
    </>
  );
}

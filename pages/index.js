import Script from "next/script";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Counters from "@/components/Counters";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Shailendra - Full Stack Developer</title>
        <link rel="icon" href="/favicon-new.ico" />
        {/* <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
        {/* <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" /> */}
      </Head>
      <Script src=""></Script>
      <main >
        <Navbar />
        <Hero />
        <About />
        <Achievements />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Blogs />
        <Counters />
        <CV />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

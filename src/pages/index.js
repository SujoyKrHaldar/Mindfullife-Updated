import Head from "next/head";
import { sanityClient } from "../../api";
import Landing from "../components/home/Landing";
import About from "../components/home/About";
import Service from "../components/home/Service";
import Team from "../components/home/Team";
import Review from "../components/home/Review";

const serviceQuery = `*[_type == "service" && isFeatured == true]|order(_createdAt desc){"id":_id, name}`;
const brandQuery = `*[_type == "brand"]{"id":_id, name, brandLogo}`;
const reviewQuery = `*[_type == "review"]|order(_createdAt desc){"id":_id, message, name, role}`;
const albumQuery = `*[_type == "album"][0..1]|order(_createdAt desc){"id":_id, coverPhoto, description, "slug":slug.current, name, gallery}`;
const blogQuery = `*[_type == "post" && isFeatured == true]|order(_createdAt desc){"id":_id, "create":_createdAt, title, description, thumbnail, fbUrl, ytUrl, insUrl}`;
const founderQuery = `*[_type == "teamMembers" && isFounder == true]{"id":_id, name, role, biodata, profile }`;
const teamQuery = `*[_type == "teamMembers" && isFounder == false]{"id":_id, name, role, biodata, profile }`;
const backgroundQuery = `*[_type == "landingPage" && name == "Home"][0]{ altText, background}`;
const featuredPostQuery = `*[_type == "featured"]|order(_createdAt desc){"id":_id, background, description, title}`;

export const getStaticProps = async () => {
  const background = await sanityClient.fetch(backgroundQuery);
  const featuredPost = await sanityClient.fetch(featuredPostQuery);
  const service = await sanityClient.fetch(serviceQuery);
  const review = await sanityClient.fetch(reviewQuery);
  const album = await sanityClient.fetch(albumQuery);
  const blog = await sanityClient.fetch(blogQuery);
  const brand = await sanityClient.fetch(brandQuery);
  const founder = await sanityClient.fetch(founderQuery);
  const teamData = await sanityClient.fetch(teamQuery);

  return {
    props: {
      background,
      featuredPost,
      service,
      review,
      album,
      blog,
      brand,
      founder,
      teamData,
    },
    revalidate: 1,
  };
};

export default function Home({
  background,
  featuredPost,
  service,
  review,
  album,
  blog,
  brand,
  founder,
  teamData,
}) {
  return (
    <>
      <Head>
        <title>
          Mindful Life - The Online Counselling, therapy & Consultation
        </title>
        <meta
          name="description"
          content="Get Best Online Counselling, Online Therapy. Feel Free to Talk with the Best Online Psychologist & Counsellor for Depression, Anxiety, Migraine, Breakup, Employee Wellness, Fear, Stress, Relationship."
        />
        <meta
          property="og:title"
          content="Mindful Life - Best Online Counselling, therapy & Consultation"
        />
        <meta
          property="og:description"
          content="Get Best Online Counselling, Online Therapy. Feel Free to Talk with the Best Online Psychologist & Counsellor for Depression, Anxiety, Migraine, Breakup, Employee Wellness, Fear, Stress, Relationship."
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}`}
        />
      </Head>

      <Landing data={service} background={background} />
      <About />
      <Service data={service} />
      <Team data={founder} team={teamData} />
      <Review />
    </>
  );
}

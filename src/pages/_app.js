import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Mindful Life" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:alt" content="Mindful Life" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}`} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Online Counseling, Mindful life, Prewedding Counseling, relationship issues, couple Counseling, stress, burnout, Mental Health, Online Counseling, Online Therapy India, Online Psychologist, Best Clinical Psychologist, Psychologist for Anxiety, Counselling for Anxiety, Therapist for Anxiety, Psychologist for Depression, Counseling for Depression, Therapist for Depression, Online Counsellor for anxiety, Online Counseling for Depression, Counseling for Anxiety, Online Therapy for Anxiety, Online Counseling for Anxiety, Online Therapist for Anxiety, Treatment for Depression, Treatment for Panic Attack, EAP, Employee Assistance Program, Employee Wellness Program, Employee Mental Health Program, Employee Insurance, Employee Health, Corporate Employee mental health, Corporate Wellness Program, Corporate Workshop, POSH, Goal alignment Workshop, Couple Counseling, Counseling for divorce, family Counseling, child therapy, Best Online Counseling, Marriage Counseling, Counseling for Breakup, Obsessive Compulsive Disorder, OCD, PTSD, Post Traumatic Stress Disorder, parent and child Counseling, parent counselling, career Counseling, Bulimia nervosa, eating disorder, how to reduce weight, Treatment for Migraine, best online therapy in India, Best online psychologists, Best counsellors, Best therapists, Best online psychotherapists, Plan, mental health experts, online psychiatrists, telehealth, free mental health service, Free Psychometric Assessments, Free Online Counseling, Online Psychotherapy Sessions, Cognitive Behaviour therapy, anxiety, CBT, Counseling for Fear, Counseling for Phobia, Online Counseling for Stress, Counseling for Relationship, Talk to a Psychologist online, Find Counsellor for Depression, Mental Health, Affordable and Anonymous Counseling, Talk To a therapist free, Best Online Counseling Services, Best Online Counseling and Employee Assistance Program, Consult Best Psychologists in India, Best Psychologist Near Me, Best Psychiatrists in India, online therapy and Counseling consultation in India and around the globe."
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

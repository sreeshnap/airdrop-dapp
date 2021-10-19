import Airdrop from "components/Airdrop/Airdrop";
import AirdropSchedules from "components/AirdropSchedule";
import EligibilityBanner from "components/EligibilityBanner";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import nextI18NextConfig from "next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import HowItWorks from "snet-ui/HowItWorks";
import Box from "@mui/material/Box";
import Airdroprules from "snet-ui/Airdroprules";
import SubscribeToNotification from "snet-ui/SubscribeToNotification";
import Ecosystem from "snet-ui/Ecosystem";
import Airdropinfo from "snet-ui/Airdropinfo";
import Grid from "@mui/material/Grid";
import AirdropRegistrationMini from "snet-ui/AirdropRegistrationMini";
import CommonLayout from "layout/CommonLayout";
import Registrationsuccess from "snet-ui/Registrationsuccess";
import { useState } from "react";
import { useInterval } from "usehooks-ts";
import AirdropRegistration from "snet-ui/AirdropRegistration";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
  },
});

const airdropOpensIn = new Date();
airdropOpensIn.setSeconds(airdropOpensIn.getSeconds() + 10);

const airdropClosesIn = new Date();
airdropClosesIn.setMinutes(airdropClosesIn.getMinutes() + 135);
airdropClosesIn.setDate(airdropClosesIn.getDate() + 3);

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const [airdropOpen, setAirdropOpen] = useState(true);
  const [userRegistered, setUserRegistered] = useState(false);

  useInterval(() => {
    const now = new Date();
    if (now.getTime() >= airdropOpensIn.getTime()) {
      setAirdropOpen(true);
    }
  }, 500);

  // useInterval(() => {
  //   const now = new Date();
  //   if (now.getTime() >= airdropOpensIn.getTime() && !userRegistered) {
  //     setUserRegistered(true);
  //   }
  // }, 500);

  return (
    <CommonLayout>
      <Head>
        <title>Airdrop</title>
      </Head>
      <Box px={4} mt={3}>
        <EligibilityBanner />
      </Box>
      {userRegistered ? (
        <Registrationsuccess />
      ) : airdropOpen ? (
        <Box sx={{ px: [0, 15] }}>
          <AirdropRegistration
            endDate={airdropClosesIn}
            onRegister={() => setUserRegistered(true)}
            onViewRules={console.log}
            onViewSchedule={console.log}
          />
        </Box>
      ) : (
        <Grid container spacing={2} px={4} mt={2} mb={8}>
          <Grid item xs={12} sm={6}>
            <Airdropinfo blogLink="www.google.com" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AirdropRegistrationMini startDate={airdropOpensIn} />
          </Grid>
        </Grid>
      )}

      <HowItWorks title="How Airdrop Works" steps={HowItWorksSampleData} blogLink="www.google.com" />
      <SubscribeToNotification />
      {/* Refer the commented component below for Registration API integration */}
      {/* <Airdrop /> */}
      <Airdroprules title="Airdrop Rules" steps={HowItWorksSampleData} blogLink="www.google.com" />
      <AirdropSchedules />
      <Ecosystem blogLink="www.google.com" />
    </CommonLayout>
  );
};

export default Home;

const HowItWorksSampleData = [
  {
    title: "Lorem Ipsum is simply dummy text of the printing an",
    description:
      "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
  },
  {
    title: "It is a long established fact that a",
    description:
      " is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions ",
  },
  {
    title: "Contrary to popular belief, Lorem Ipsum is not si",
    description:
      "andom text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem I",
  },
  {
    title: "Where can I get some?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generat",
  },
  {
    title: "atise on the theory of ethics, very popu",
    description:
      "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, c",
  },
  {
    title: "atise Ipsum is simply dummy text of the printing an",
    description:
      "there are many variations in the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
  },
];

const ScheduleSampleData = [
  {
    time: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    title: "Lorem Ipsum is simply dummy text of the printing an",
    description:
      "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
  },
  {
    time: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    title: "It is a long established fact that a",
    description:
      " is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions ",
  },
  {
    time: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    title: "Contrary to popular belief, Lorem Ipsum is not si",
    description:
      "andom text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem I",
  },
  {
    time: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    title: "Where can I get some?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generat",
  },
  {
    time: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    title: "atise on the theory of ethics, very popu",
    description:
      "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, c",
  },
];

const RulesSampleData = [
  {
    title: "Early Deposits Get Better Rewards",
    description:
      "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
  },
  {
    title: "First Come,First Served",
    description:
      " is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions ",
  },
  {
    title: "Deposit the Featured Crypto",
    description:
      "andom text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem I",
  },
  {
    title: "Minimum Token Balance To Maintain",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generat",
  },
];

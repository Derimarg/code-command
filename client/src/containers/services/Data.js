import pic1 from "../../assets/img/svg-1.svg";
import pic2 from "../../assets/img/avatar-svgrepo-com.svg";

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Exclusive Access",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive diamond card that allows you to send unlimited transactions without getting charged any fees",
  buttonLabel: "Get Started",
  imgStart: "",
  img: pic2,
  alt: "Credit Card",
  route: "/testimonials",
};

export const homeObjTwo = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "100% Secure",
  headline: "Stay protected 24/7 anywhere anytime",
  description:
    "We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",
  buttonLabel: "Learn More",
  imgStart: "",
  img: require("../../assets/img/svg-1.svg").default,
  alt: "Vault",
  route: "/signup",
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Easy Setup",
  headline: "Super fast and simple onboarding process",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: "start",
  img: pic1,
  alt: "Vault",
  route: "/signup",
};

export const homeObjFour = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Data Analytics",
  headline: "Every transaction is stored on our secure cloud database",
  description:
    "Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",
  buttonLabel: "Sign Up Now",
  imgStart: "start",
  img: require("../../assets/img/svg-1.svg").default,
  alt: "Vault",
  route: "/signup",
};

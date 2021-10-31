import {
  People,
  Bookmark,
  Groups,
  Store,
  OndemandVideo,
  History,
  Flag,
  Event,
  BusinessCenter,
  BurstMode,
  BarChart,
  Favorite,
  Cloud,
} from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

export const itemsSidebar: Items = [
  {
    id: 0,
    icon: <People sx={{ color: "#209CEE" }} fontSize="large" />,
    title: "Amigos",
  },
  {
    id: 1,
    icon: <Bookmark sx={{ color: "#A931B1" }} fontSize="large" />,
    title: "Guardados",
  },
  {
    id: 2,
    icon: <Groups sx={{ color: "#1877E7" }} fontSize="large" />,
    title: "Grupos",
  },
  {
    id: 3,
    icon: <Store sx={{ color: "#4DBACA" }} fontSize="large" />,
    title: "Marketplace",
  },
  {
    id: 4,
    icon: <OndemandVideo sx={{ color: "#238BD7" }} fontSize="large" />,
    title: "Watch",
  },
  {
    id: 5,
    icon: <History sx={{ color: "#186ECD" }} fontSize="large" />,
    title: "Recuerdos",
  },
  {
    id: 6,
    icon: <Flag sx={{ color: "#E15829" }} fontSize="large" />,
    title: "Páginas",
  },
  {
    id: 7,
    icon: <Event sx={{ color: "#DF314F" }} fontSize="large" />,
    title: "Eventos",
  },
  {
    id: 8,
    icon: <BusinessCenter sx={{ color: "#CC7019" }} fontSize="large" />,
    title: "Empleos",
  },
  {
    id: 9,
    icon: <BurstMode sx={{ color: "#1C88EA" }} fontSize="large" />,
    title: "Actividad publicitaria reciente",
  },
  {
    id: 10,
    icon: <BarChart sx={{ color: "#219FEF" }} fontSize="large" />,
    title: "Administrador de anuncios",
  },
  {
    id: 11,
    icon: <Favorite sx={{ color: "#F2B754" }} fontSize="large" />,
    title: "Ayuda comunitaria",
  },
  {
    id: 12,
    icon: <Cloud sx={{ color: "#B7C9D3" }} fontSize="large" />,
    title: "Clima",
  },
  {
    id: 13,
    icon: <BarChart sx={{ color: "#219FEF" }} fontSize="large" />,
    title: "Administrador de anuncios",
  },
  {
    id: 14,
    icon: <Favorite sx={{ color: "#F2B754" }} fontSize="large" />,
    title: "Ayuda comunitaria",
  },
  {
    id: 15,
    icon: <Cloud sx={{ color: "#B7C9D3" }} fontSize="large" />,
    title: "Clima",
  },
  {
    id: 16,
    icon: <BarChart sx={{ color: "#219FEF" }} fontSize="large" />,
    title: "Administrador de anuncios",
  },
  {
    id: 17,
    icon: <Favorite sx={{ color: "#F2B754" }} fontSize="large" />,
    title: "Ayuda comunitaria",
  },
  {
    id: 18,
    icon: <Cloud sx={{ color: "#B7C9D3" }} fontSize="large" />,
    title: "Clima",
  },
];

export interface Items extends Array<item> {}

interface item {
  id: number;
  icon: SvgIconProps;
  title: string;
}

export const dataLinks: LinksProps = [
  { id: 0, title: "Privacidad", url: "#" },
  { id: 1, title: "Condiciones", url: "#" },
  { id: 2, title: "Publicidad", url: "#" },
  { id: 3, title: "Opciones de anuncios", url: "#" },
  { id: 4, title: "Cookies", url: "#" },
  { id: 5, title: "Más", url: "#" },
];

export interface LinksProps extends Array<link> {}

interface link {
  id: number;
  title: string;
  url: string;
}

export const itemsContacts: ContactsProps = [
  {
    id: 0,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t31.18172-1/s480x480/16904651_1189081231210512_7200876331633736413_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFwWEeGE6N9_JBAX-5TME6O6pfhwu4SWAPql-HC7hJYA5m-CxudSxj-L2BVHTzVphA&_nc_ohc=nv8nCkQhBksAX8XDQs0&_nc_ht=scontent-scl2-1.xx&oh=d2924402d5dc62013469b36437b2ba68&oe=61A2E8C3",
    name: "Nicolas Castillo Soto",
  },
  {
    id: 1,
    profileURL:
      "https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4",
    name: "Sonny Smith",
  },
  {
    id: 2,
    profileURL:
      "https://lh3.googleusercontent.com/a-/AOh14GhS2lY23dprx6TjwsxS9CuVDLmULPF7hPGU9cXoZqc=s96-c",
    name: "Jaime Linares",
  },
  {
    id: 3,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t31.18172-1/c0.80.480.480a/p480x480/15676126_10211387101094756_260645460950742924_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFYKkVzLPB5PBOJHfY92tbvUeDtkp_RUsFR4O2Sn9FSweet_l9d7ZPpytP9N_Eka2E&_nc_ohc=a6fKiy-CFLwAX__PDz4&_nc_ht=scontent-scl2-1.xx&oh=e23c68549080e99ff7886e1331371ba2&oe=61A2B680",
    name: "Vanessa Jacqueline Aguayo Soto",
  },
  {
    id: 4,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-1/p480x480/51544725_10217376887076025_9192598441560113152_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeF9tCTdxSx6BAMoEfUOdNXzLWJc4rSO5qotYlzitI7mqteLEr5IorOxltRYW9ZDD7g&_nc_ohc=fVy66JvoctYAX-09FTJ&_nc_ht=scontent-scl2-1.xx&oh=a9bc006091a8cdd4c47782f8deea633f&oe=61A40202",
    name: "Gloria Patricia Solar Quispe",
  },
  {
    id: 5,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-1/p480x480/54522118_10218716993499626_3792293446186696704_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHH6fRuseCmSR23Qx-8oLvVZ5M9NZqoXARnkz01mqhcBODavpxuStdYjElEEF2LnWo&_nc_ohc=0MVJVmChfosAX-5BufD&_nc_ht=scontent-scl2-1.xx&oh=d38e4122faa417dd5f777c78c1ec2858&oe=61A49E9B",
    name: "Panchito Javier Gonzalez",
  },
  {
    id: 6,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t1.18169-1/p480x480/25158271_10215235968956246_6485124001630783704_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFsRJTv5IGQuqGj40d1_1A4aXCLLhv2AqRpcIsuG_YCpGj4lisXkZXQZHsG3gUNimA&_nc_ohc=ZMwoprlexb4AX8vu9Nf&_nc_ht=scontent-scl2-1.xx&oh=403c4903799d4a337e574a0582ee7596&oe=61A3135A",
    name: "Ronald Benitez Aguilera",
  },
  {
    id: 7,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t1.18169-1/p480x480/10405634_10205627606353592_7258165579314437645_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHDLetWJyXbpwYDpZEF2TXvAClYA6w75doAKVgDrDvl2kKg7PbatCLX5S9_wBSPgh4&_nc_ohc=OqGMzjZKoDAAX-9swLg&_nc_oc=AQm4aLiw3T3YF8INYcwaH5q0L7pyB9zt53ulP13iDabMMC2x7YEDKtgBYEaYh9Os5IA&_nc_ht=scontent-scl2-1.xx&oh=9a129ce81f78ebb32277c13aae514e6c&oe=61A445ED",
    name: "Geovanny Castro",
  },
  {
    id: 8,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-1/p480x480/239195716_10219435669667910_3972470524618065154_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFO0JLR6JUJZ0b6mmKff4TqLFDb_4jeXCQsUNv_iN5cJGDvyRosKlks-E_PR8iC9HU&_nc_ohc=J1oSP9r0k5QAX-9STYf&_nc_ht=scontent-scl2-1.xx&oh=6d0a4548def8e5de502d61f9662ea46b&oe=61A46080",
    name: "Luis Guz",
  },
  {
    id: 9,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-1/p480x480/160886138_10214456196957877_7258249256230028827_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGOvLyr-qdYLCNkyqzNijWLzE9qRXoA94HMT2pFegD3gcxO3IRvxfKcXtTsJWTBIrI&_nc_ohc=hvZNl-B4gigAX-vqlee&tn=5rmuk4MAy1pSMG3p&_nc_ht=scontent-scl2-1.xx&oh=0ba078e6261c52b18200d7c0ea6a22f2&oe=61A2868F",
    name: "Luis Luna Ceballos",
  },
  {
    id: 10,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-1/s480x480/96420933_3859726054068558_6686413573268176896_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHk1DlO19oyVcWf6sCSDgVylcOc__fUoh6Vw5z_99SiHlBDAxgfwPWaPFqq8UEQEPk&_nc_ohc=udEH5-Dxan8AX9ucYXC&_nc_oc=AQkJ6d_Jafdf7UiRpGGPPPxX48qpQqtwylqcNr3Hb9UPWXgl_kggm_QuN_ITJIzxjYY&_nc_ht=scontent-scl2-1.xx&oh=c3431bdd0c83571cce66999a46c259fb&oe=61A49FEC",
    name: "Leonel Bastian Contreras Vera",
  },
  {
    id: 11,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-1/s480x480/240519989_1998809676943597_4496183441182664516_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeE61oiOT8D4x8J149oUMKH3yOcw1uhUSLzI5zDW6FRIvDnmI09FnMj_6Z-2DPk0678&_nc_ohc=Yz7eMAhofCgAX8h-ZWW&_nc_ht=scontent-scl2-1.xx&oh=5e70c854bb414ddcbf960ac1b272b130&oe=61833A4B",
    name: "Danissa S Villa",
  },
  {
    id: 12,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-1/s480x480/239119738_2878288732421018_482409963465455794_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeH8a8kCiNmeBvIn0LY30b5sUKXvzc_XldFQpe_Nz9eV0ayKHewavojg6ExKK5V1SpM&_nc_ohc=GNdqpOo0IrgAX-NBqwC&_nc_ht=scontent-scl2-1.xx&oh=336358b84e69b2293c3d86de3eca8a65&oe=61A35CDA",
    name: "Diego Alberto Villanueva",
  },
  {
    id: 13,
    profileURL:
      "https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-1/p480x480/103281466_3290481590976295_4015057378282003123_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHHNF6yMzdUS5oJHlQS1FjP5XWk1mSRJwDldaTWZJEnACfJx0nMpOJ6AMvICZhYtiU&_nc_ohc=x8tc_lhGYRQAX8EvTr4&_nc_ht=scontent-scl2-1.xx&oh=7ef7bc47d319e15d6981603a53a641f5&oe=61A42F77",
    name: "Jhon Ulloa Sanchez",
  },
];

export interface ContactsProps extends Array<contact> {}

interface contact {
  id: number;
  name: string;
  profileURL: string;
}

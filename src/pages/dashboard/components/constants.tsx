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
    icon: <People sx={{ color: "#209CEE" }} fontSize="large" />,
    title: "Amigos",
  },
  {
    icon: <Bookmark sx={{ color: "#A931B1" }} fontSize="large" />,
    title: "Guardados",
  },
  {
    icon: <Groups sx={{ color: "#1877E7" }} fontSize="large" />,
    title: "Grupos",
  },
  {
    icon: <Store sx={{ color: "#4DBACA" }} fontSize="large" />,
    title: "Marketplace",
  },
  {
    icon: <OndemandVideo sx={{ color: "#238BD7" }} fontSize="large" />,
    title: "Watch",
  },
  {
    icon: <History sx={{ color: "#186ECD" }} fontSize="large" />,
    title: "Recuerdos",
  },
  {
    icon: <Flag sx={{ color: "#E15829" }} fontSize="large" />,
    title: "Páginas",
  },
  {
    icon: <Event sx={{ color: "#DF314F" }} fontSize="large" />,
    title: "Eventos",
  },
  {
    icon: <BusinessCenter sx={{ color: "#CC7019" }} fontSize="large" />,
    title: "Empleos",
  },
  {
    icon: <BurstMode sx={{ color: "#1C88EA" }} fontSize="large" />,
    title: "Actividad publicitaria reciente",
  },
  {
    icon: <BarChart sx={{ color: "#219FEF" }} fontSize="large" />,
    title: "Administrador de anuncios",
  },
  {
    icon: <Favorite sx={{ color: "#F2B754" }} fontSize="large" />,
    title: "Ayuda comunitaria",
  },
  {
    icon: <Cloud sx={{ color: "#B7C9D3" }} fontSize="large" />,
    title: "Clima",
  },
  {
    icon: <BarChart sx={{ color: "#219FEF" }} fontSize="large" />,
    title: "Administrador de anuncios",
  },
  {
    icon: <Favorite sx={{ color: "#F2B754" }} fontSize="large" />,
    title: "Ayuda comunitaria",
  },
  {
    icon: <Cloud sx={{ color: "#B7C9D3" }} fontSize="large" />,
    title: "Clima",
  },
  {
    icon: <BarChart sx={{ color: "#219FEF" }} fontSize="large" />,
    title: "Administrador de anuncios",
  },
  {
    icon: <Favorite sx={{ color: "#F2B754" }} fontSize="large" />,
    title: "Ayuda comunitaria",
  },
  {
    icon: <Cloud sx={{ color: "#B7C9D3" }} fontSize="large" />,
    title: "Clima",
  },
];

export interface Items extends Array<item> {}

interface item {
  icon: SvgIconProps;
  title: string;
}

export const dataLinks: LinksProps = [
  { title: "Privacidad", url: "#" },
  { title: "Condiciones", url: "#" },
  { title: "Publicidad", url: "#" },
  { title: "Opciones de anuncios", url: "#" },
  { title: "Cookies", url: "#" },
  { title: "Más", url: "#" },
];

export interface LinksProps extends Array<link> {}

interface link {
  title: string;
  url: string;
}

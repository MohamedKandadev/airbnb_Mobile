import { Icons } from "@/constants";
import { places } from "./places";
import { guestsGropus } from "./guests";

export interface ICategorie {
  id: number;
  name: string;
  icon: any;
}

export const categories: ICategorie[] = [
  {
    id: 1,
    name: "Cabins",
    icon: Icons.IconCabins,
  },
  {
    id: 2,
    name: "Rooms",
    icon: Icons.IconRooms,
  },
  {
    id: 3,
    name: "Amazing views",
    icon: Icons.IconAviews,
  },
  {
    id: 4,
    name: "Beachfront",
    icon: Icons.IconBeach,
  },
  {
    id: 5,
    name: "Caves",
    icon: Icons.IconCaves,
  },
];

export interface IProfileSettins {
  id: number;
  icon: any;
  title: string;
}
export const profileSettings: IProfileSettins[] = [
  {
    id: 1,
    icon: Icons.IconProfile,
    title: "Personal information",
  },
  {
    id: 2,
    icon: Icons.IconPayment,
    title: "Payments and payouts",
  },
  {
    id: 3,
    icon: Icons.IconTranstion,
    title: "Transition",
  },
  {
    id: 4,
    icon: Icons.IconNotification,
    title: "Notifications",
  },
  {
    id: 5,
    icon: Icons.IconLock,
    title: "Privacy and sharing",
  },
  {
    id: 6,
    icon: Icons.IconBag,
    title: "Travel for work",
  },
];

export { places, guestsGropus };

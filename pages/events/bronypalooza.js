import React from "react";
import BasicLayout from "../../components/common/BasicLayout";

import Lineup from "../../components/BronyPalooza/Lineup.js";

const LINEUPLIST = [
  {
    name: "Hollowpoint",
    slug: "hollowpoint",
    setTime: "Thursday @ 7:00pm"
  },
  {
    name: "Seventh Element",
    slug: "seventh-element",
    setTime: "Thursday @ 7:40pm"
  },
  {
    name: "John Kenza",
    slug: "john-kenza",
    setTime: "Thursday @ 8:20pm"
  },
  {
    name: "YourEnigma",
    slug: "yourenigma",
    setTime: "Thursday @ 8:55pm"
  },
  {
    name: "GeekBrony",
    slug: "geekbrony",
    setTime: "Thursday @ 9:30pm"
  },
  {
    name: "loophoof",
    slug: "loophoof",
    setTime: "Thursday @ 10:05pm"
  },
  {
    name: "Elative",
    slug: "elative",
    setTime: "Thursday @ 10:40pm"
  },
  {
    name: "FLIGHTRUSH",
    slug: "flightrush",
    setTime: "Thursday @ 11:15pm"
  },
  {
    name: "R3CTIFIER",
    slug: "r3ctifier",
    setTime: "Thursday @ 11:50pm"
  },
  {
    name: "Chang31ing",
    slug: "chang31ing",
    setTime: "Friday @ 12:25am"
  },
  {
    name: "StrachAttack",
    slug: "strachattack",
    setTime: "Friday @ 1:00am"
  },
  {
    name: "VinylTastic",
    slug: "vinyltastic",
    setTime: "Friday @ 11:00pm"
  },
  {
    name: "Vylet Pony",
    slug: "vylet-pony",
    setTime: "Friday @ 11:35pm"
  },
  {
    name: "A Secret Guest",
    slug: "sekrit-gest",
    setTime: "Saturday @ 12:10am"
  },
  {
    name: "Silva Hound",
    slug: "silva-hound",
    setTime: "Saturday @ 1:00am"
  },
  {
    name: "Michelle Creber",
    slug: "michelle-creber",
    setTime: "Saturday @ 8:00pm"
  },
  {
    name: "Black Gryph0n",
    slug: "black-gryph0n",
    setTime: "Saturday @ 8:00pm"
  },
  {
    name: "Baasik",
    slug: "baasik",
    setTime: "Saturday @ 8:00pm"
  },
  {
    name: "BronyPalooza Superband, featuring Luck Rock, Crusader!, Cyril the Wolf, P1K, & The Wonderbolts!",
    slug: "bp-superband",
    setTime: "Saturday @ 9:40pm"
  },
  {
    name: "Eurobeat Brony",
    slug: "eurobeat-brony",
    setTime: "Sunday @ 1:00am"
  }
];

const BronyPalooza = props => (
  <BasicLayout pageTitle="BronyPalooza">
    <Lineup lineupList={ LINEUPLIST } />
  </BasicLayout>
);

export default BronyPalooza;

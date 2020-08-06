const policies = [
  {
    from: "/about/policy",
    to: "/policies"
  },
  {
    from: "/about/policies",
    to: "/policies"
  },
  {
    from: "/about/policies/general-rules",
    to: "/policies"
  },
  {
    from: "/about/policies/anti-harassment-policy",
    to: "/policies#anti­-harassment-policy"
  },
  {
    from: "/about/policies/cosplay-props-policy",
    to: "/policies#cosplay-and-props-policy"
  },
  {
    from: "/about/policies/color-communication-cards",
    to: "/policies#color-communication-cards"
  },
  {
    from: "/about/policies/gender-neutral-bathrooms",
    to: "/policies#gender-neutral-bathrooms"
  },
  {
    from: "/about/policies/autographs",
    to: "/policies#autographs-policy"
  },
  {
    from: "/about/policies/badge-policy",
    to: "/policies#lost-badge"
  },
  {
    from: "/about/policies/convention-areas-policy",
    to: "/policies#restricted-areas"
  },
  {
    from: "/about/policies/kids-policy",
    to: "/policies#kids"
  },
  {
    from: "/about/policies/medical-assistance-policy",
    to: "/policies#medical-emergencies"
  },
  {
    from: "/about/policies/smoking-and-alcohol-policy",
    to: "/policies#smoking"
  },
  {
    from: "/about/policies/accessibility-policy",
    to: "/policies#accessibility-requests"
  },
  {
    from: "/about/policies/and-up-policy",
    to: "/policies#andup-policy-21-programming"
  },
  {
    from: "/about/policies/press-policy",
    to: "/policies/press"
  },
  {
    from: "/about/policies/marketplace-policies",
    to: "/policies/marketplace"
  }
];

const marketplace = [
  {
    from: "/exhibit",
    to: "/marketplace"
  },
  {
    from: "/marketplace/apply-to-sell",
    to: "/marketplace"
  }
];

const social = [
  {
    from: "/telegram",
    to: "https://t.me/BronyCon"
  },
  {
    from: "/discord",
    to: "https://discord.gg/7rMhsKQ"
  },
  {
    from: "/workcafe",
    to: "https://forms.gle/GtToS1NyJsPat1MGA"
  }
];

const baltimore = [
  {
    from: "/baltimore/hotels",
    to: "/baltimore"
  },
  {
    from: "/baltimore/getting-here",
    to: "/baltimore"
  },
  {
    from: "/baltimore/getting-here/by-car",
    to: "/baltimore"
  },
  {
    from: "/baltimore/getting-here/by-air",
    to: "/baltimore"
  },
  {
    from: "/baltimore/getting-here/by-train",
    to: "/baltimore"
  }
];

const about = [
  {
    from: "/pressapp",
    to: "http://bit.ly/2BouuoZ"
  },
  {
    from: "/about/press-media",
    to: "http://bit.ly/2BouuoZ"
  },
  {
    from: "/about/press-media/apply",
    to: "http://bit.ly/2BouuoZ"
  },
  {
    from: "/staffswag",
    to: "https://bcconstore.myshopify.com/"
  },
  {
    from: "/polo",
    to: "https://bcconstore.myshopify.com/products/bronycon-polo"
  }
];

const events = [
  {
    from: "/premier",
    to: "/#premier"
  },
  {
    from: "/cafe",
    to:
      "https://www.eventbrite.com/e/crystal-cafe-2019-dining-registration-63888650674"
  },
  {
    from: "/gala",
    to: "/policies/gala"
  },
  {
    from: "/bronypalooza",
    to: "/events/bronypalooza"
  },
  {
    from: "/bp",
    to: "/events/bronypalooza"
  },
  {
    from: "/guide",
    to: "https://bronycon2019.sched.com"
  }
];

const guests = [
  {
    from: "/guests/alexandre-bellelle",
    to: "/guests/minty-root"
  },
  {
    from: "/guests/monochromatic-cayetana",
    to: "/guests/monochromatic"
  },
  {
    from: "/guests/thelostnarator",
    to: "/guests/thelostnarrator"
  },
  {
    from: "/guests/horizon-bax",
    to: "/guests/horizon"
  },
  {
    from: "/guests/trish",
    to: "/guests/trish-forstner"
  }
];

module.exports = [
  ...policies,
  ...marketplace,
  ...social,
  ...baltimore,
  ...about,
  ...events,
  ...guests
];

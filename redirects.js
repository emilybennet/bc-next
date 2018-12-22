const policies = [
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
    from: "/marketplace",
    to: "/exhibit"
  },
  {
    from: "/marketplace/apply-to-sell",
    to: "/exhibit"
  }
];

module.exports = [...policies, ...marketplace];

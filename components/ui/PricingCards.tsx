import React from "react";
export const tiers = [
  {
    name: "Basic",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Get chat right away with anyone anywhere",
    features: [
      "20 Messages chat limit in chats",
      "2 participant limit in chat",
      "3 chat rooms limit",
      "support 2 languages",
      "48-hours support response time",
    ],
  },
  {
    name: "Standard",
    id: null,
    href: "#",
    priceMonthly: "€10",
    description: "Unlock full potential with Pro!",
    features: [
      "Unlimited messages in chat",
      "Unlimited participants in chat",
      "Unlimited chat rooms",
      "support up to 10 languages",
      "Unlimited support [comming soon ...]",
      "1-hour dedicated support response time",
      "EArly access to new features",
    ],
  },
  {
    name: "Plus ",
    id: null,
    href: "#",
    priceMonthly: "€20",
    description: "Experience expetional features with plus plan!",
    features: [
      "Unlimited messages in chat",
      "Unlimited participants in chat",
      "Unlimited chat rooms",
      "support up to 10 languages",
      "Unlimited support [comming soon ...]",
      "1-hour dedicated support response time",
      "EArly access to new features",
    ],
  },
];

function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
          >

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;

import { CheckCheck, CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import CheckoutButton from "./CheckoutButton";
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
    id: "12233",
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
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
          >
            <div>
              <h3
                id={tier.id + tier.name}
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.priceMonthly ? (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-base font-semibold leading-7 text-gray-600">
                      /month
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    Free
                  </span>
                )}
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {tier.description}
              </p>
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {redirect ? (
              <Link
                href="/register"
                className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80"
              >
                Get Started Today
              </Link>
            ) : (
              tier.id && <CheckoutButton />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;

"use client";
import React from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { CheckIcon } from "lucide-react";
interface CardProps {
  plan: string | undefined;
  description: string;
  features: string[];
  price: string | null;
}

const Card: React.FC<CardProps> = ({ plan, description, price, features }) => {
  const Router = useRouter();
  return (
    <div className="bg-gray-200 p-6 rounded-lg w-75">
      <h2 className="text-xl font-semibold mb-4 dark:text-black">{plan}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul
        className="mt-10 space-y-4 text-sm leading-7 text-gray-600"
        role="list"
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon
              className="h-6 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
      {price && (
        <div className="text-2xl font-bold mb-4 dark:text-black">
          {price}/Month
        </div>
      )}

      <Button onClick={() => Router.push("/register")}>Select Plan</Button>
    </div>
  );
};

export default Card;

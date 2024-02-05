import React from "react";
import PageTrunk from "../../components/ui/PageTrunk";
import Card from "../../components/ui/card";
import { tiers } from "../../pricingPlanTier";
const Pricing = () => {
  return (
    <PageTrunk title="Pricing Plan">
      {tiers.map((tier) => {
        return (
          <Card
            plan={tier.name}
            key={tier.id}
            description={tier.description}
            price={tier.priceMonthly}
            features={tier.features}
          />
        );
      })}
    </PageTrunk>
  );
};

export default Pricing;

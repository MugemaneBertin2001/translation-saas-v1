"use client"
import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'
function PricingButton() {
  const router = useRouter();
  return (
    <Button variant={"outline"} onClick={()=>{
      router.push("/pricing")
    }}>
        Pricing
    </Button>
  )
}

export default PricingButton
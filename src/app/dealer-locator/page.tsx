import type { Metadata } from "next";

import DealerHero from "@/components/dealer/DealerHero";
import DealerCTA from "@/components/dealer/DealerCTA";

import DealerClient from "./DealerClient";

import { DEALERS } from "@/data/dealers";

/* ============================================================
   SEO
============================================================ */

export const metadata: Metadata = {
  title: "Find a Dealer | UNIK BIOTECH",
  description:
    "Locate an authorized UNIK BIOTECH dealer near you or become an official distributor of our agricultural biotechnology products.",
};

/* ============================================================
   PAGE
============================================================ */

export default function DealerLocatorPage() {
  return (
    <>
      {/* ======================================================
          HERO
      ======================================================= */}

      <DealerHero
        totalDealers={DEALERS.length}
      />

      {/* ======================================================
          SEARCH + DEALERS
      ======================================================= */}

      <DealerClient
        dealers={DEALERS}
      />

      {/* ======================================================
          CTA
      ======================================================= */}

      <DealerCTA />
    </>
  );
}
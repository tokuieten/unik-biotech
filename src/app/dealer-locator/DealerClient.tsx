"use client";

import { useMemo, useState } from "react";

import DealerSearch from "@/components/dealer/DealerSearch";
import DealerFilters from "@/components/dealer/DealerFilters";
import DealerGrid from "@/components/dealer/DealerGrid";
import DealerMap from "@/components/dealer/DealerMap";
import DealerCoverage from "@/components/dealer/DealerCoverage";
import BecomeDealer from "@/components/dealer/BecomeDealer";
import DealerFAQ from "@/components/dealer/DealerFAQ";
import DealerCTA from "@/components/dealer/DealerCTA";

import type { Dealer } from "@/types/dealer";

type DealerClientProps = {
  dealers: Dealer[];
};

export default function DealerClient({
  dealers,
}: DealerClientProps) {
  const [search, setSearch] = useState("");

  const [selectedState, setSelectedState] =
    useState("all");

  const [selectedDistrict, setSelectedDistrict] =
    useState("all");

  /* ==========================================================
     STATES
  ========================================================== */

  const states = useMemo(() => {
    return [
      "all",
      ...Array.from(
        new Set(
          dealers.map((dealer) => dealer.state)
        )
      ).sort(),
    ];
  }, [dealers]);

  /* ==========================================================
     DISTRICTS
  ========================================================== */

  const districts = useMemo(() => {
    const filtered =
      selectedState === "all"
        ? dealers
        : dealers.filter(
            (dealer) =>
              dealer.state === selectedState
          );

    return [
      "all",
      ...Array.from(
        new Set(
          filtered.map(
            (dealer) => dealer.district
          )
        )
      ).sort(),
    ];
  }, [dealers, selectedState]);

  /* ==========================================================
     FILTERED DEALERS
  ========================================================== */

  const filteredDealers = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return dealers.filter((dealer) => {
      const stateMatch =
        selectedState === "all" ||
        dealer.state === selectedState;

      const districtMatch =
        selectedDistrict === "all" ||
        dealer.district ===
          selectedDistrict;

      if (!stateMatch || !districtMatch) {
        return false;
      }

      if (!keyword) {
        return true;
      }

      const searchable = [
        dealer.dealerName,
        dealer.owner,
        dealer.city,
        dealer.district,
        dealer.state,
        dealer.address,
        dealer.products.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(keyword);
    });
  }, [
    dealers,
    search,
    selectedState,
    selectedDistrict,
  ]);

  /* ==========================================================
     COVERAGE
  ========================================================== */

  const totalStates = useMemo(() => {
    return new Set(
      dealers.map(
        (dealer) => dealer.state
      )
    ).size;
  }, [dealers]);

  const totalDistricts = useMemo(() => {
    return new Set(
      dealers.map(
        (dealer) => dealer.district
      )
    ).size;
  }, [dealers]);

  return (
    <>
      {/* ======================================================
          SEARCH
      ======================================================= */}

      <DealerSearch
        search={search}
        totalDealers={filteredDealers.length}
        onSearchChange={setSearch}
      />

      {/* ======================================================
          FILTERS
      ======================================================= */}

      <DealerFilters
        states={states}
        districts={districts}
        selectedState={selectedState}
        selectedDistrict={selectedDistrict}
        onStateChange={(value) => {
          setSelectedState(value);
          setSelectedDistrict("all");
        }}
        onDistrictChange={setSelectedDistrict}
      />

      {/* ======================================================
          DEALER GRID
      ======================================================= */}

      <DealerGrid
        dealers={filteredDealers}
      />

      {/* ======================================================
          INTERACTIVE MAP
      ======================================================= */}

      <DealerMap
        dealers={filteredDealers}
      />

      {/* ======================================================
          COVERAGE
      ======================================================= */}

      <DealerCoverage
        totalDealers={dealers.length}
        totalStates={totalStates}
        totalDistricts={totalDistricts}
      />

      {/* ======================================================
          BECOME A DEALER
      ======================================================= */}

      <BecomeDealer />

      {/* ======================================================
          FAQ
      ======================================================= */}

      <DealerFAQ />

      {/* ======================================================
          CTA
      ======================================================= */}

      <DealerCTA />
    </>
  );
}
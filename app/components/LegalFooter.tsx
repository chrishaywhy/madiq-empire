"use client";

import { useState } from "react";
import LegalModal from "./LegalModal";

export default function LegalFooter() {
  const [selectedLegal, setSelectedLegal] = useState<
    "privacy" | "terms" | null
  >(null);

  return (
    <>
      <div className="legal-footer-links">
        <button
          type="button"
          onClick={() => setSelectedLegal("privacy")}
        >
          Privacy Policy
        </button>

        <button
          type="button"
          onClick={() => setSelectedLegal("terms")}
        >
          Terms &amp; Conditions
        </button>
      </div>

      <LegalModal
        type={selectedLegal}
        onClose={() => setSelectedLegal(null)}
      />
    </>
  );
}
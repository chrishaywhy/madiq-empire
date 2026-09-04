"use client";

type LegalModalProps = {
  type: "privacy" | "terms" | null;
  onClose: () => void;
};

export default function LegalModal({
  type,
  onClose,
}: LegalModalProps) {
  if (!type) return null;

  return (
    <div
      className="journal-modal"
      onClick={onClose}
    >
      <div
        className="journal-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="journal-modal-close"
          onClick={onClose}
          aria-label="Close legal information"
        >
          ×
        </button>

        <div className="section-label">
          {type === "privacy" ? "PRIVACY" : "TERMS"}
        </div>

        <h2>
          {type === "privacy"
            ? "PRIVACY POLICY"
            : "TERMS & CONDITIONS"}
        </h2>

        <p className="journal-modal-date">
          Last updated: September 2026
        </p>

        <div className="journal-modal-body">
          {type === "privacy" ? (
            <>
              <p>
                Madiq Empire respects your privacy and is committed to
                protecting the information you provide when you interact
                with our website.
              </p>

              <p>
                We may collect information you voluntarily provide, such
                as your name or email address when you contact us. We use
                this information only for legitimate business,
                communication, and creative purposes.
              </p>

              <p>
                We do not sell or intentionally share your personal
                information with third parties for their own marketing
                purposes.
              </p>

              <p>
                Our website may contain links to external platforms such
                as Instagram and Spotify. Those platforms operate under
                their own privacy policies and terms.
              </p>

              <p>
                By using the Madiq Empire website, you acknowledge this
                policy. If you have questions about how your information
                is handled, you can contact us through the email provided
                on this website.
              </p>
            </>
          ) : (
            <>
              <p>
                By accessing and using the Madiq Empire website, you agree
                to use the website responsibly and in accordance with
                applicable laws.
              </p>

              <p>
                All music, artwork, photography, videos, branding, text,
                logos, and other original content published by Madiq
                Empire remain the property of their respective owners
                unless otherwise stated.
              </p>

              <p>
                You may view and share links to our content for personal
                and promotional purposes, but you may not reproduce,
                redistribute, modify, or commercially exploit our
                copyrighted material without permission.
              </p>

              <p>
                Links to third-party platforms are provided for
                convenience. Madiq Empire is not responsible for the
                content, policies, or practices of external websites.
              </p>

              <p>
                Madiq Empire reserves the right to update these terms,
                website content, or available services at any time.
                Continued use of the website after changes are published
                constitutes acceptance of the updated terms.
              </p>

              <p>
                For business, licensing, press, partnership, or other
                inquiries, please contact Madiq Empire using the official
                contact information provided on the website.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
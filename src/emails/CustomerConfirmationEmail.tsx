import type { CSSProperties } from "react";

import {
  getContactEnquiryTypeLabel,
  type ContactEnquiry,
} from "@/lib/contact/contact-types";

type CustomerConfirmationEmailProps = {
  enquiry: ContactEnquiry;
};

const COMPANY_PHONE = "+918380017593";
const COMPANY_PHONE_LABEL = "083800 17593";

function formatSubmittedAt(
  submittedAt: string
): string {
  const date = new Date(submittedAt);

  if (Number.isNaN(date.getTime())) {
    return submittedAt;
  }

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

function createPhoneHref(): string {
  return `tel:${COMPANY_PHONE}`;
}

function createWhatsAppHref(
  enquiry: ContactEnquiry
): string {
  const message = [
    "Hello UNIK BIOTECH RESEARCH,",
    "",
    "I recently submitted an enquiry through your website.",
    "",
    `Enquiry reference: ${enquiry.id}`,
    `Name: ${enquiry.name}`,
    "",
    "I would like to discuss my enquiry.",
  ].join("\n");

  return `https://wa.me/${COMPANY_PHONE.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;
}

export default function CustomerConfirmationEmail({
  enquiry,
}: CustomerConfirmationEmailProps) {
  const enquiryTypeLabel =
    getContactEnquiryTypeLabel(
      enquiry.enquiryType
    );

  const phoneHref = createPhoneHref();

  const whatsappHref =
    createWhatsAppHref(enquiry);

  return (
    <div style={styles.page}>
      <div style={styles.emailContainer}>
        <div style={styles.header}>
          <p style={styles.brandEyebrow}>
            UNIK BIOTECH RESEARCH
          </p>

          <h1 style={styles.headerTitle}>
            We have received
            <br />
            your enquiry.
          </h1>

          <p style={styles.headerDescription}>
            Thank you for contacting us,{" "}
            {enquiry.name}. Your enquiry has
            reached our team and will be reviewed
            shortly.
          </p>
        </div>

        <div style={styles.content}>
          <div style={styles.successSection}>
            <div style={styles.successIcon}>
              ✓
            </div>

            <div>
              <p style={styles.successTitle}>
                Enquiry successfully received
              </p>

              <p style={styles.successDescription}>
                Our team can now review the
                information you submitted.
              </p>
            </div>
          </div>

          <div style={styles.introSection}>
            <p style={styles.greeting}>
              Hello {enquiry.name},
            </p>

            <p style={styles.bodyText}>
              Thank you for reaching out to UNIK
              BIOTECH RESEARCH. We have received
              your website enquiry and recorded it
              under the reference shown below.
            </p>

            <p style={styles.bodyText}>
              A member of our team will review
              your crop, product or partnership
              requirement and contact you using
              the details you provided.
            </p>
          </div>

          <div style={styles.summaryCard}>
            <p style={styles.sectionEyebrow}>
              YOUR ENQUIRY
            </p>

            <SummaryRow
              label="Enquiry type"
              value={enquiryTypeLabel}
            />

            <SummaryRow
              label="Crop"
              value={
                enquiry.crop ||
                "Not specified"
              }
            />

            <SummaryRow
              label="Phone"
              value={enquiry.phone}
            />

            <SummaryRow
              label="Submitted"
              value={formatSubmittedAt(
                enquiry.submittedAt
              )}
            />
          </div>

          <div style={styles.messageSection}>
            <p style={styles.sectionEyebrow}>
              YOUR MESSAGE
            </p>

            <div style={styles.messageCard}>
              <p style={styles.messageText}>
                {enquiry.message}
              </p>
            </div>
          </div>

          <div style={styles.referenceSection}>
            <p style={styles.referenceLabel}>
              ENQUIRY REFERENCE
            </p>

            <p style={styles.referenceValue}>
              {enquiry.id}
            </p>

            <p style={styles.referenceHelp}>
              Keep this reference available when
              contacting our team about this
              enquiry.
            </p>
          </div>

          <div style={styles.contactSection}>
            <h2 style={styles.contactTitle}>
              Need to speak with us sooner?
            </h2>

            <p style={styles.contactDescription}>
              You can call our team directly or
              continue the conversation through
              WhatsApp.
            </p>

            <div style={styles.actionSection}>
              <a
                href={phoneHref}
                style={{
                  ...styles.actionButton,
                  ...styles.primaryAction,
                }}
              >
                Call {COMPANY_PHONE_LABEL}
              </a>

              <a
                href={whatsappHref}
                style={{
                  ...styles.actionButton,
                  ...styles.whatsappAction,
                }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div style={styles.noticeSection}>
            <p style={styles.noticeText}>
              This is an automatic confirmation
              that your enquiry was received. You
              do not need to submit the form
              again.
            </p>
          </div>
        </div>

        <div style={styles.footer}>
          <p style={styles.footerBrand}>
            UNIK BIOTECH RESEARCH
          </p>

          <p style={styles.footerDescription}>
            Agricultural biotechnology,
            crop nutrition and specialised
            farming solutions.
          </p>

          <p style={styles.footerContact}>
            Nashik, Maharashtra ·{" "}
            {COMPANY_PHONE_LABEL}
          </p>

          <p style={styles.footerReference}>
            Enquiry reference: {enquiry.id}
          </p>
        </div>
      </div>
    </div>
  );
}

type SummaryRowProps = {
  label: string;
  value: string;
};

function SummaryRow({
  label,
  value,
}: SummaryRowProps) {
  return (
    <div style={styles.summaryRow}>
      <p style={styles.summaryLabel}>
        {label}
      </p>

      <p style={styles.summaryValue}>
        {value}
      </p>
    </div>
  );
}

const styles = {
  page: {
    margin: "0",
    padding: "40px 16px",
    backgroundColor: "#F3F6F2",
    color: "#142C1D",
    fontFamily:
      "Arial, Helvetica, sans-serif",
  },

  emailContainer: {
    width: "100%",
    maxWidth: "640px",
    margin: "0 auto",
    overflow: "hidden",
    border: "1px solid #DCE6DE",
    borderRadius: "24px",
    backgroundColor: "#FFFFFF",
    boxShadow:
      "0 24px 70px rgba(20, 52, 32, 0.08)",
  },

  header: {
    padding: "44px 40px",
    backgroundColor: "#0B3B24",
    color: "#FFFFFF",
  },

  brandEyebrow: {
    margin: "0",
    color: "#91D7A8",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.2em",
  },

  headerTitle: {
    margin: "18px 0 0",
    color: "#FFFFFF",
    fontSize: "38px",
    fontWeight: "800",
    lineHeight: "1.08",
    letterSpacing: "-0.035em",
  },

  headerDescription: {
    maxWidth: "500px",
    margin: "18px 0 0",
    color: "#C8DED0",
    fontSize: "15px",
    lineHeight: "1.75",
  },

  content: {
    padding: "40px",
  },

  successSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "36px",
    padding: "20px",
    border: "1px solid #CFE8D6",
    borderRadius: "18px",
    backgroundColor: "#F1FAF4",
  },

  successIcon: {
    width: "44px",
    height: "44px",
    marginRight: "16px",
    borderRadius: "999px",
    backgroundColor: "#08783F",
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: "800",
    lineHeight: "44px",
    textAlign: "center",
  },

  successTitle: {
    margin: "0",
    color: "#174A2C",
    fontSize: "15px",
    fontWeight: "800",
    lineHeight: "1.5",
  },

  successDescription: {
    margin: "4px 0 0",
    color: "#66736A",
    fontSize: "12px",
    lineHeight: "1.6",
  },

  introSection: {
    marginBottom: "36px",
  },

  greeting: {
    margin: "0 0 16px",
    color: "#142C1D",
    fontSize: "22px",
    fontWeight: "800",
    lineHeight: "1.3",
  },

  bodyText: {
    margin: "0 0 16px",
    color: "#526259",
    fontSize: "15px",
    lineHeight: "1.8",
  },

  summaryCard: {
    marginBottom: "36px",
    padding: "26px",
    border: "1px solid #DDE8DF",
    borderRadius: "20px",
    backgroundColor: "#F8FAF7",
  },

  sectionEyebrow: {
    margin: "0 0 14px",
    color: "#7A887F",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "0.18em",
  },

  summaryRow: {
    padding: "14px 0",
    borderBottom: "1px solid #E3EAE4",
  },

  summaryLabel: {
    margin: "0 0 5px",
    color: "#829087",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },

  summaryValue: {
    margin: "0",
    color: "#1C3527",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "1.5",
  },

  messageSection: {
    marginBottom: "36px",
  },

  messageCard: {
    marginTop: "12px",
    padding: "24px",
    borderLeft: "4px solid #08783F",
    borderRadius: "0 16px 16px 0",
    backgroundColor: "#F7FAF7",
  },

  messageText: {
    margin: "0",
    color: "#294235",
    fontSize: "15px",
    lineHeight: "1.8",
    whiteSpace: "pre-wrap",
  },

  referenceSection: {
    marginBottom: "36px",
    padding: "24px",
    border: "1px solid #E3EAE4",
    borderRadius: "18px",
  },

  referenceLabel: {
    margin: "0",
    color: "#829087",
    fontSize: "9px",
    fontWeight: "800",
    letterSpacing: "0.16em",
  },

  referenceValue: {
    margin: "9px 0 0",
    color: "#174A2C",
    fontFamily:
      "Courier New, Courier, monospace",
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "1.6",
    wordBreak: "break-all",
  },

  referenceHelp: {
    margin: "10px 0 0",
    color: "#7A887F",
    fontSize: "11px",
    lineHeight: "1.6",
  },

  contactSection: {
    padding: "30px",
    borderRadius: "20px",
    backgroundColor: "#0B3B24",
    color: "#FFFFFF",
  },

  contactTitle: {
    margin: "0",
    color: "#FFFFFF",
    fontSize: "23px",
    fontWeight: "800",
    lineHeight: "1.3",
    letterSpacing: "-0.02em",
  },

  contactDescription: {
    margin: "12px 0 0",
    color: "#C8DED0",
    fontSize: "14px",
    lineHeight: "1.7",
  },

  actionSection: {
    marginTop: "24px",
  },

  actionButton: {
    display: "inline-block",
    margin: "0 8px 10px 0",
    padding: "14px 20px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "700",
    lineHeight: "1",
    textDecoration: "none",
  },

  primaryAction: {
    backgroundColor: "#FFFFFF",
    color: "#174A2C",
  },

  whatsappAction: {
    backgroundColor: "#25D366",
    color: "#082A17",
  },

  noticeSection: {
    marginTop: "30px",
    paddingTop: "24px",
    borderTop: "1px solid #E5ECE6",
  },

  noticeText: {
    margin: "0",
    color: "#7A887F",
    fontSize: "12px",
    lineHeight: "1.7",
  },

  footer: {
    padding: "30px 40px",
    borderTop: "1px solid #E5ECE6",
    backgroundColor: "#F7FAF7",
  },

  footerBrand: {
    margin: "0",
    color: "#174A2C",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "0.12em",
  },

  footerDescription: {
    margin: "10px 0 0",
    color: "#66736A",
    fontSize: "12px",
    lineHeight: "1.7",
  },

  footerContact: {
    margin: "8px 0 0",
    color: "#66736A",
    fontSize: "11px",
    lineHeight: "1.6",
  },

  footerReference: {
    margin: "14px 0 0",
    color: "#94A099",
    fontFamily:
      "Courier New, Courier, monospace",
    fontSize: "9px",
    lineHeight: "1.5",
    wordBreak: "break-all",
  },
} satisfies Record<
  string,
  CSSProperties
>;
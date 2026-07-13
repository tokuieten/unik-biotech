import type { CSSProperties } from "react";

import {
  getContactEnquiryTypeLabel,
  type ContactEnquiry,
} from "@/lib/contact/contact-types";

type AdminEnquiryEmailProps = {
  enquiry: ContactEnquiry;
};

function createPhoneHref(phone: string): string {
  const normalizedPhone = phone.replace(
    /[^\d+]/g,
    ""
  );

  return `tel:${normalizedPhone}`;
}

function createWhatsAppHref(
  phone: string
): string {
  const normalizedPhone = phone.replace(
    /\D/g,
    ""
  );

  return `https://wa.me/${normalizedPhone}`;
}

function createEmailHref(
  email: string
): string {
  return `mailto:${email}`;
}

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

export default function AdminEnquiryEmail({
  enquiry,
}: AdminEnquiryEmailProps) {
  const enquiryTypeLabel =
    getContactEnquiryTypeLabel(
      enquiry.enquiryType
    );

  const phoneHref = createPhoneHref(
    enquiry.phone
  );

  const whatsappHref = createWhatsAppHref(
    enquiry.phone
  );

  const emailHref = enquiry.email
    ? createEmailHref(enquiry.email)
    : null;

  return (
    <div style={styles.page}>
      <div style={styles.emailContainer}>
        <div style={styles.header}>
          <div style={styles.brandEyebrow}>
            UNIK BIOTECH RESEARCH
          </div>

          <h1 style={styles.headerTitle}>
            New website enquiry
          </h1>

          <p style={styles.headerDescription}>
            A new customer enquiry has been
            submitted through the UNIK BIOTECH
            website.
          </p>
        </div>

        <div style={styles.content}>
          <div style={styles.statusRow}>
            <span style={styles.statusBadge}>
              NEW ENQUIRY
            </span>

            <span style={styles.enquiryType}>
              {enquiryTypeLabel}
            </span>
          </div>

          <div style={styles.customerSection}>
            <p style={styles.sectionEyebrow}>
              CUSTOMER
            </p>

            <h2 style={styles.customerName}>
              {enquiry.name}
            </h2>

            <p style={styles.customerMeta}>
              Submitted{" "}
              {formatSubmittedAt(
                enquiry.submittedAt
              )}
            </p>
          </div>

          <div style={styles.actionSection}>
            <a
              href={phoneHref}
              style={{
                ...styles.actionButton,
                ...styles.primaryAction,
              }}
            >
              Call Customer
            </a>

            <a
              href={whatsappHref}
              style={{
                ...styles.actionButton,
                ...styles.whatsappAction,
              }}
            >
              WhatsApp Customer
            </a>

            {emailHref ? (
              <a
                href={emailHref}
                style={{
                  ...styles.actionButton,
                  ...styles.secondaryAction,
                }}
              >
                Reply by Email
              </a>
            ) : null}
          </div>

          <div style={styles.divider} />

          <div style={styles.detailsGrid}>
            <DetailRow
              label="Phone"
              value={enquiry.phone}
              href={phoneHref}
            />

            <DetailRow
              label="Email"
              value={
                enquiry.email ||
                "Not provided"
              }
              href={emailHref}
            />

            <DetailRow
              label="Crop"
              value={
                enquiry.crop ||
                "Not specified"
              }
            />

            <DetailRow
              label="Enquiry type"
              value={enquiryTypeLabel}
            />
          </div>

          <div style={styles.messageSection}>
            <p style={styles.sectionEyebrow}>
              CUSTOMER MESSAGE
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
          </div>
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            This enquiry was received from the
            official UNIK BIOTECH RESEARCH website.
          </p>

          <p style={styles.footerReference}>
            Source: {enquiry.source}
          </p>
        </div>
      </div>
    </div>
  );
}

type DetailRowProps = {
  label: string;
  value: string;
  href?: string | null;
};

function DetailRow({
  label,
  value,
  href,
}: DetailRowProps) {
  return (
    <div style={styles.detailRow}>
      <p style={styles.detailLabel}>
        {label}
      </p>

      {href ? (
        <a
          href={href}
          style={styles.detailLink}
        >
          {value}
        </a>
      ) : (
        <p style={styles.detailValue}>
          {value}
        </p>
      )}
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
    padding: "40px",
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
    fontSize: "34px",
    fontWeight: "800",
    lineHeight: "1.1",
    letterSpacing: "-0.03em",
  },

  headerDescription: {
    maxWidth: "470px",
    margin: "16px 0 0",
    color: "#C8DED0",
    fontSize: "15px",
    lineHeight: "1.7",
  },

  content: {
    padding: "40px",
  },

  statusRow: {
    marginBottom: "34px",
  },

  statusBadge: {
    display: "inline-block",
    marginRight: "12px",
    padding: "7px 12px",
    borderRadius: "999px",
    backgroundColor: "#DDF5E5",
    color: "#08783F",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "0.14em",
  },

  enquiryType: {
    color: "#66736A",
    fontSize: "13px",
    fontWeight: "600",
  },

  customerSection: {
    marginBottom: "30px",
  },

  sectionEyebrow: {
    margin: "0",
    color: "#7A887F",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "0.18em",
  },

  customerName: {
    margin: "10px 0 0",
    color: "#142C1D",
    fontSize: "28px",
    fontWeight: "800",
    lineHeight: "1.2",
    letterSpacing: "-0.025em",
  },

  customerMeta: {
    margin: "8px 0 0",
    color: "#7A887F",
    fontSize: "13px",
    lineHeight: "1.6",
  },

  actionSection: {
    marginBottom: "36px",
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
    backgroundColor: "#08783F",
    color: "#FFFFFF",
  },

  whatsappAction: {
    backgroundColor: "#25D366",
    color: "#082A17",
  },

  secondaryAction: {
    border: "1px solid #CAD8CD",
    backgroundColor: "#FFFFFF",
    color: "#174A2C",
  },

  divider: {
    height: "1px",
    margin: "0 0 34px",
    backgroundColor: "#E5ECE6",
  },

  detailsGrid: {
    marginBottom: "38px",
  },

  detailRow: {
    padding: "17px 0",
    borderBottom: "1px solid #EDF2EE",
  },

  detailLabel: {
    margin: "0 0 6px",
    color: "#829087",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },

  detailValue: {
    margin: "0",
    color: "#1C3527",
    fontSize: "15px",
    fontWeight: "600",
    lineHeight: "1.5",
  },

  detailLink: {
    color: "#08783F",
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: "1.5",
    textDecoration: "none",
  },

  messageSection: {
    marginTop: "6px",
  },

  messageCard: {
    marginTop: "12px",
    padding: "24px",
    border: "1px solid #DDE8DF",
    borderRadius: "18px",
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
    marginTop: "34px",
    paddingTop: "24px",
    borderTop: "1px solid #E5ECE6",
  },

  referenceLabel: {
    margin: "0",
    color: "#829087",
    fontSize: "9px",
    fontWeight: "800",
    letterSpacing: "0.16em",
  },

  referenceValue: {
    margin: "8px 0 0",
    color: "#526259",
    fontFamily:
      "Courier New, Courier, monospace",
    fontSize: "11px",
    lineHeight: "1.6",
    wordBreak: "break-all",
  },

  footer: {
    padding: "28px 40px",
    backgroundColor: "#F7FAF7",
    borderTop: "1px solid #E5ECE6",
  },

  footerText: {
    margin: "0",
    color: "#66736A",
    fontSize: "12px",
    lineHeight: "1.7",
  },

  footerReference: {
    margin: "7px 0 0",
    color: "#94A099",
    fontSize: "10px",
    lineHeight: "1.5",
  },
} satisfies Record<
  string,
  CSSProperties
>;
import "server-only";

import AdminEnquiryEmail from "@/emails/AdminEnquiryEmail";
import CustomerConfirmationEmail from "@/emails/CustomerConfirmationEmail";
import type {
  ContactDeliveryResult,
  ContactEnquiry,
} from "@/lib/contact/contact-types";
import { resend } from "@/lib/email/resend";

const ADMIN_EMAIL =
  process.env.CONTACT_ADMIN_EMAIL;

const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL;

const REPLY_TO_EMAIL =
  process.env.CONTACT_REPLY_TO_EMAIL;

type ResendDelivery = {
  data: {
    id: string;
  } | null;
  error: {
    message: string;
    name?: string;
  } | null;
};

function assertEmailConfiguration(): {
  adminEmail: string;
  fromEmail: string;
  replyToEmail: string | undefined;
} {
  if (!ADMIN_EMAIL) {
    throw new Error(
      "Missing CONTACT_ADMIN_EMAIL environment variable."
    );
  }

  if (!FROM_EMAIL) {
    throw new Error(
      "Missing CONTACT_FROM_EMAIL environment variable."
    );
  }

  return {
    adminEmail: ADMIN_EMAIL,
    fromEmail: FROM_EMAIL,
    replyToEmail:
      REPLY_TO_EMAIL || undefined,
  };
}

function getAdminEmailSubject(
  enquiry: ContactEnquiry
): string {
  const crop = enquiry.crop
    ? ` — ${enquiry.crop}`
    : "";

  return `New Website Enquiry${crop} — ${enquiry.name}`;
}

function getCustomerEmailSubject(
  enquiry: ContactEnquiry
): string {
  return `We received your enquiry — ${enquiry.id}`;
}

function getDeliveryId(
  delivery: ResendDelivery,
  deliveryName: string
): string {
  if (delivery.error) {
    throw new Error(
      `${deliveryName} failed: ${delivery.error.message}`
    );
  }

  if (!delivery.data?.id) {
    throw new Error(
      `${deliveryName} failed without returning an email ID.`
    );
  }

  return delivery.data.id;
}

async function sendAdminEmail(
  enquiry: ContactEnquiry,
  configuration: ReturnType<
    typeof assertEmailConfiguration
  >
): Promise<string> {
  const delivery = await resend.emails.send({
    from: configuration.fromEmail,
    to: [configuration.adminEmail],
    subject: getAdminEmailSubject(enquiry),
    react: AdminEnquiryEmail({
      enquiry,
    }),
    replyTo:
      enquiry.email ||
      configuration.replyToEmail,
    headers: {
      "X-UNIK-Enquiry-ID": enquiry.id,
      "X-UNIK-Enquiry-Source":
        enquiry.source,
    },
  });

  return getDeliveryId(
    delivery,
    "Admin enquiry email"
  );
}

async function sendCustomerEmail(
  enquiry: ContactEnquiry,
  configuration: ReturnType<
    typeof assertEmailConfiguration
  >
): Promise<string | null> {
  if (!enquiry.email) {
    return null;
  }

  const delivery = await resend.emails.send({
    from: configuration.fromEmail,
    to: [enquiry.email],
    subject:
      getCustomerEmailSubject(enquiry),
    react: CustomerConfirmationEmail({
      enquiry,
    }),
    replyTo: configuration.replyToEmail,
    headers: {
      "X-UNIK-Enquiry-ID": enquiry.id,
      "X-UNIK-Enquiry-Source":
        enquiry.source,
    },
  });

  return getDeliveryId(
    delivery,
    "Customer confirmation email"
  );
}

export async function sendContactEnquiry(
  enquiry: ContactEnquiry
): Promise<ContactDeliveryResult> {
  const configuration =
    assertEmailConfiguration();

  const adminEmailId = await sendAdminEmail(
    enquiry,
    configuration
  );

  let customerEmailId: string | null = null;

  try {
    customerEmailId = await sendCustomerEmail(
      enquiry,
      configuration
    );
  } catch (error) {
    console.error(
      "[CONTACT_CUSTOMER_EMAIL_ERROR]",
      {
        enquiryId: enquiry.id,
        error,
      }
    );
  }

  return {
    adminEmailId,
    customerEmailId,
  };
}
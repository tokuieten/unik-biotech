export const CONTACT_SOURCE = "unik-biotech-website" as const;

export const CONTACT_ENQUIRY_TYPES = [
  "product",
  "crop",
  "dealer",
  "distribution",
  "other",
] as const;

export type ContactEnquiryType =
  (typeof CONTACT_ENQUIRY_TYPES)[number];

export type ContactSource =
  typeof CONTACT_SOURCE;

export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  crop: string;
  enquiryType: string;
  message: string;
};

export type ContactEnquiry = ContactPayload & {
  id: string;
  submittedAt: string;
  source: ContactSource;
};

export type ContactField =
  keyof ContactPayload;

export type ContactValidationSuccess = {
  success: true;
  data: ContactPayload;
};

export type ContactValidationFailure = {
  success: false;
  message: string;
  field?: ContactField;
};

export type ContactValidationResult =
  | ContactValidationSuccess
  | ContactValidationFailure;

export type ContactDeliveryResult = {
  adminEmailId: string | null;
  customerEmailId: string | null;
};

export function isContactEnquiryType(
  value: string
): value is ContactEnquiryType {
  return (
    CONTACT_ENQUIRY_TYPES as readonly string[]
  ).includes(value);
}

export function getContactEnquiryTypeLabel(
  enquiryType: string
): string {
  switch (enquiryType) {
    case "product":
      return "Product Enquiry";

    case "crop":
      return "Crop Guidance";

    case "dealer":
      return "Dealer Partnership";

    case "distribution":
      return "Distribution";

    case "other":
      return "Other Enquiry";

    default:
      return "General Enquiry";
  }
}
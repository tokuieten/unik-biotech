import { NextRequest, NextResponse } from "next/server";

import type { ContactEnquiry } from "@/lib/contact/contact-types";
import { sendContactEnquiry } from "@/lib/email/send-contact-enquiry";

const MAX_NAME_LENGTH = 100;
const MAX_PHONE_LENGTH = 20;
const MAX_EMAIL_LENGTH = 254;
const MAX_CROP_LENGTH = 100;
const MAX_ENQUIRY_TYPE_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 3000;

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_PATTERN =
  /^[+\d][\d\s()-]{7,19}$/;

type ContactRequestBody = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  crop?: unknown;
  enquiryType?: unknown;
  message?: unknown;
};

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  crop: string;
  enquiryType: string;
  message: string;
};

type ValidationResult =
  | {
      success: true;
      data: ContactPayload;
    }
  | {
      success: false;
      message: string;
      field?: keyof ContactPayload;
    };

function sanitizeText(
  value: unknown,
  maxLength: number
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/\0/g, "")
    .replace(/\r\n/g, "\n")
    .trim()
    .slice(0, maxLength);
}

function normalizePhone(
  value: string
): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
}

function validateContactPayload(
  body: ContactRequestBody
): ValidationResult {
  const name = sanitizeText(
    body.name,
    MAX_NAME_LENGTH
  );

  const phone = normalizePhone(
    sanitizeText(
      body.phone,
      MAX_PHONE_LENGTH
    )
  );

  const email = sanitizeText(
    body.email,
    MAX_EMAIL_LENGTH
  ).toLowerCase();

  const crop = sanitizeText(
    body.crop,
    MAX_CROP_LENGTH
  );

  const enquiryType = sanitizeText(
    body.enquiryType,
    MAX_ENQUIRY_TYPE_LENGTH
  );

  const message = sanitizeText(
    body.message,
    MAX_MESSAGE_LENGTH
  );

  if (name.length < 2) {
    return {
      success: false,
      field: "name",
      message:
        "Please enter a valid name with at least 2 characters.",
    };
  }

  if (!PHONE_PATTERN.test(phone)) {
    return {
      success: false,
      field: "phone",
      message:
        "Please enter a valid phone number.",
    };
  }

  if (
    email.length > 0 &&
    !EMAIL_PATTERN.test(email)
  ) {
    return {
      success: false,
      field: "email",
      message:
        "Please enter a valid email address.",
    };
  }

  if (message.length < 10) {
    return {
      success: false,
      field: "message",
      message:
        "Please provide a little more information about your enquiry.",
    };
  }

  return {
    success: true,
    data: {
      name,
      phone,
      email,
      crop,
      enquiryType,
      message,
    },
  };
}

function createRequestId(): string {
  return crypto.randomUUID();
}

function createContactEnquiry(
  requestId: string,
  payload: ContactPayload
): ContactEnquiry {
  return {
    id: requestId,
    ...payload,
    submittedAt: new Date().toISOString(),
    source: "unik-biotech-website",
  };
}

function methodNotAllowedResponse() {
  return NextResponse.json(
    {
      success: false,
      message: "Method not allowed.",
    },
    {
      status: 405,
      headers: {
        Allow: "POST",
      },
    }
  );
}

export async function POST(
  request: NextRequest
) {
  const requestId = createRequestId();

  try {
    const contentType =
      request.headers.get("content-type");

    if (
      !contentType
        ?.toLowerCase()
        .includes("application/json")
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid request content type.",
          requestId,
        },
        {
          status: 415,
        }
      );
    }

    let body: ContactRequestBody;

    try {
      body =
        (await request.json()) as ContactRequestBody;
    } catch {
      return NextResponse.json(
        {
          success: false,
          message:
            "The request body contains invalid JSON.",
          requestId,
        },
        {
          status: 400,
        }
      );
    }

    const validation =
      validateContactPayload(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: validation.message,
          field: validation.field,
          requestId,
        },
        {
          status: 422,
        }
      );
    }

    const contactEnquiry =
      createContactEnquiry(
        requestId,
        validation.data
      );

    const delivery =
      await sendContactEnquiry(
        contactEnquiry
      );

    if (
      process.env.NODE_ENV ===
      "development"
    ) {
      console.info(
        "[CONTACT_ENQUIRY_DELIVERED]",
        {
          enquiryId: contactEnquiry.id,
          adminEmailId:
            delivery.adminEmailId,
          customerEmailDelivered:
            delivery.customerEmailId !== null,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been received. Our team will contact you shortly.",
        requestId,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "[CONTACT_API_ERROR]",
      {
        requestId,
        error:
          error instanceof Error
            ? {
                name: error.name,
                message: error.message,
              }
            : "Unknown contact API error",
      }
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "We could not process your enquiry right now. Please try again shortly.",
        requestId,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  return methodNotAllowedResponse();
}

export async function PUT() {
  return methodNotAllowedResponse();
}

export async function PATCH() {
  return methodNotAllowedResponse();
}

export async function DELETE() {
  return methodNotAllowedResponse();
}
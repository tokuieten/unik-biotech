"use client";

import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";

import {
  ArrowRight,
  Check,
  LoaderCircle,
  RotateCcw,
  TriangleAlert,
} from "lucide-react";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  crop: string;
  enquiryType: string;
  message: string;
};

type ContactField =
  keyof ContactFormData;

type FieldErrors = Partial<
  Record<ContactField, string>
>;

type ApiResponse = {
  success: boolean;
  message: string;
  field?: ContactField;
  requestId?: string;
};

type SubmitState =
  | "idle"
  | "submitting"
  | "success"
  | "error";

const initialFormData: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  crop: "",
  enquiryType: "",
  message: "",
};

const crops = [
  "Grapes",
  "Pomegranate",
  "Cotton",
  "Chilli",
  "Onion",
  "Tomato",
  "Sugarcane",
  "Soybean",
  "Other",
] as const;

const enquiryTypes = [
  {
    label: "Product enquiry",
    value: "product",
  },
  {
    label: "Crop guidance",
    value: "crop",
  },
  {
    label: "Dealer partnership",
    value: "dealer",
  },
  {
    label: "Distribution",
    value: "distribution",
  },
  {
    label: "Other enquiry",
    value: "other",
  },
] as const;

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_PATTERN =
  /^[+\d][\d\s()-]{7,19}$/;

export default function ContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(
      initialFormData
    );

  const [fieldErrors, setFieldErrors] =
    useState<FieldErrors>({});

  const [submitState, setSubmitState] =
    useState<SubmitState>("idle");

  const [statusMessage, setStatusMessage] =
    useState("");

  const [requestId, setRequestId] =
    useState<string | null>(null);

  const isSubmitting =
    submitState === "submitting";

  function updateField(
    field: ContactField,
    value: string
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setFieldErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = {
        ...current,
      };

      delete next[field];

      return next;
    });

    if (submitState === "error") {
      setSubmitState("idle");
      setStatusMessage("");
    }
  }

  function handleInputChange(
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >
  ) {
    const field =
      event.target.name as ContactField;

    updateField(
      field,
      event.target.value
    );
  }

  function validateForm(): boolean {
    const errors: FieldErrors = {};

    const name = formData.name.trim();

    const phone = formData.phone.trim();

    const email = formData.email.trim();

    const message =
      formData.message.trim();

    if (name.length < 2) {
      errors.name =
        "Enter a valid name with at least 2 characters.";
    }

    if (
      !PHONE_PATTERN.test(phone)
    ) {
      errors.phone =
        "Enter a valid phone number.";
    }

    if (
      email.length > 0 &&
      !EMAIL_PATTERN.test(email)
    ) {
      errors.email =
        "Enter a valid email address.";
    }

    if (message.length < 10) {
      errors.message =
        "Tell us a little more about your enquiry.";
    }

    setFieldErrors(errors);

    return (
      Object.keys(errors).length === 0
    );
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setStatusMessage("");
    setRequestId(null);

    const valid = validateForm();

    if (!valid) {
      setSubmitState("error");
      setStatusMessage(
        "Please check the highlighted fields."
      );

      return;
    }

    setSubmitState("submitting");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            crop: formData.crop,
            enquiryType:
              formData.enquiryType,
            message:
              formData.message.trim(),
          }),
        }
      );

      const data =
        (await response.json()) as ApiResponse;

      if (!response.ok || !data.success) {
        if (data.field) {
            const errorField: ContactField = data.field;

            setFieldErrors((current) => ({
            ...current,
            [errorField]: data.message,
            }));
        }

        setSubmitState("error");

        setStatusMessage(
            data.message ||
            "We could not send your enquiry."
        );

        return;
        }

      setSubmitState("success");

      setStatusMessage(data.message);

      setRequestId(
        data.requestId ?? null
      );

      setFieldErrors({});

      setFormData(initialFormData);
    } catch {
      setSubmitState("error");

      setStatusMessage(
        "Unable to connect to the server. Please check your connection and try again."
      );
    }
  }

  function resetForm() {
    setFormData(initialFormData);

    setFieldErrors({});

    setSubmitState("idle");

    setStatusMessage("");

    setRequestId(null);
  }

  if (submitState === "success") {
    return (
      <div
        className="
          flex
          min-h-140
          flex-col
          items-center
          justify-center
          px-4
          py-12
          text-center
        "
      >
        <div
          className="
            relative
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-emerald-50
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              animate-ping
              rounded-full
              bg-emerald-400/12
            "
          />

          <div
            className="
              relative
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-[#08783F]
              text-white
              shadow-[0_18px_45px_rgba(8,120,63,0.28)]
            "
          >
            <Check
              aria-hidden="true"
              size={29}
              strokeWidth={2.7}
            />
          </div>
        </div>

        <p
          className="
            mt-8
            text-[11px]
            font-extrabold
            uppercase
            tracking-[0.2em]
            text-[#08783F]
          "
        >
          Enquiry received
        </p>

        <h3
          className="
            mt-3
            max-w-115
            font-heading
            text-4xl
            font-extrabold
            tracking-tighter
            text-[#10281B]
          "
        >
          We&apos;ll take it from here.
        </h3>

        <p
          className="
            mt-5
            max-w-120
            text-[15px]
            leading-7
            text-slate-500
          "
        >
          {statusMessage}
        </p>

        {requestId && (
          <p
            className="
              mt-5
              rounded-full
              border
              border-[#163D29]/8
              bg-[#F7F9F6]
              px-4
              py-2
              font-mono
              text-[10px]
              text-slate-400
            "
          >
            Ref: {requestId}
          </p>
        )}

        <button
          type="button"
          onClick={resetForm}
          className="
            group
            mt-8
            inline-flex
            min-h-13
            items-center
            justify-center
            gap-2.5
            rounded-full
            border
            border-[#163D29]/12
            bg-white
            px-6
            text-sm
            font-bold
            text-[#173524]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#08783F]/25
            hover:text-[#08783F]
            hover:shadow-[0_14px_35px_rgba(14,54,32,0.08)]
          "
        >
          <RotateCcw
            aria-hidden="true"
            size={16}
            className="
              transition-transform
              duration-500
              group-hover:-rotate-180
            "
          />

          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="mt-10"
    >
      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
        "
      >
        <FormField
          id="name"
          label="Your name"
          error={fieldErrors.name}
          required
        >
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            autoComplete="name"
            placeholder="Enter your full name"
            aria-invalid={
              Boolean(fieldErrors.name)
            }
            aria-describedby={
              fieldErrors.name
                ? "name-error"
                : undefined
            }
            className={getFieldClassName(
              Boolean(fieldErrors.name)
            )}
          />
        </FormField>

        <FormField
          id="phone"
          label="Phone number"
          error={fieldErrors.phone}
          required
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 XXXXX XXXXX"
            aria-invalid={
              Boolean(fieldErrors.phone)
            }
            aria-describedby={
              fieldErrors.phone
                ? "phone-error"
                : undefined
            }
            className={getFieldClassName(
              Boolean(fieldErrors.phone)
            )}
          />
        </FormField>
      </div>

      <div className="mt-6">
        <FormField
          id="email"
          label="Email address"
          error={fieldErrors.email}
          optional
        >
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isSubmitting}
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={
              Boolean(fieldErrors.email)
            }
            aria-describedby={
              fieldErrors.email
                ? "email-error"
                : undefined
            }
            className={getFieldClassName(
              Boolean(fieldErrors.email)
            )}
          />
        </FormField>
      </div>

      <div
        className="
          mt-6
          grid
          gap-6
          sm:grid-cols-2
        "
      >
        <FormField
          id="crop"
          label="Crop type"
        >
          <select
            id="crop"
            name="crop"
            value={formData.crop}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className={getFieldClassName(
              false
            )}
          >
            <option value="">
              Select your crop
            </option>

            {crops.map((crop) => (
              <option
                key={crop}
                value={crop.toLowerCase()}
              >
                {crop}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id="enquiryType"
          label="I need help with"
        >
          <select
            id="enquiryType"
            name="enquiryType"
            value={
              formData.enquiryType
            }
            onChange={handleInputChange}
            disabled={isSubmitting}
            className={getFieldClassName(
              false
            )}
          >
            <option value="">
              Select enquiry type
            </option>

            {enquiryTypes.map(
              (type) => (
                <option
                  key={type.value}
                  value={type.value}
                >
                  {type.label}
                </option>
              )
            )}
          </select>
        </FormField>
      </div>

      <div className="mt-6">
        <FormField
          id="message"
          label="Your message"
          error={fieldErrors.message}
          required
        >
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            rows={6}
            placeholder="Tell us about your crop, requirement or enquiry..."
            aria-invalid={
              Boolean(fieldErrors.message)
            }
            aria-describedby={
              fieldErrors.message
                ? "message-error"
                : undefined
            }
            className={`${getFieldClassName(
              Boolean(fieldErrors.message)
            )} min-h-40 resize-y py-4`}
          />
        </FormField>
      </div>

      {submitState === "error" &&
        statusMessage && (
          <div
            role="alert"
            className="
              mt-6
              flex
              items-start
              gap-3
              rounded-2xl
              border
              border-red-200
              bg-red-50
              px-4
              py-3.5
              text-red-700
            "
          >
            <TriangleAlert
              aria-hidden="true"
              size={18}
              className="mt-0.5 shrink-0"
            />

            <p
              className="
                text-[13px]
                font-medium
                leading-5
              "
            >
              {statusMessage}
            </p>
          </div>
        )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="
          group
          mt-8
          flex
          min-h-15
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[#08783F]
          px-7
          text-[15px]
          font-bold
          text-white
          shadow-[0_18px_40px_rgba(8,120,63,0.22)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-[#066735]
          hover:shadow-[0_22px_50px_rgba(8,120,63,0.3)]
          disabled:pointer-events-none
          disabled:opacity-70
        "
      >
        {isSubmitting ? (
          <>
            <LoaderCircle
              aria-hidden="true"
              size={19}
              className="animate-spin"
            />

            Sending enquiry...
          </>
        ) : (
          <>
            Send enquiry

            <ArrowRight
              aria-hidden="true"
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </>
        )}
      </button>
    </form>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
};

function FormField({
  id,
  label,
  required = false,
  optional = false,
  error,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-2.5
          flex
          items-center
          gap-1.5
          text-[12px]
          font-bold
          text-[#173524]
        "
      >
        {label}

        {required && (
          <span
            aria-hidden="true"
            className="text-emerald-600"
          >
            *
          </span>
        )}

        {optional && (
          <span
            className="
              font-medium
              text-slate-400
            "
          >
            (optional)
          </span>
        )}
      </label>

      {children}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="
            mt-2
            flex
            items-center
            gap-1.5
            text-[12px]
            font-medium
            text-red-600
          "
        >
          <TriangleAlert
            aria-hidden="true"
            size={13}
          />

          {error}
        </p>
      )}
    </div>
  );
}

function getFieldClassName(
  hasError: boolean
) {
  return `
    min-h-14
    w-full
    rounded-2xl
    border
    ${
      hasError
        ? "border-red-300 bg-red-50/50"
        : "border-[#163D29]/10 bg-[#F7F9F6]"
    }
    px-4
    text-[14px]
    font-medium
    text-[#14221A]
    outline-none
    transition-all
    duration-300
    placeholder:text-slate-400
    hover:border-[#08783F]/20
    focus:border-[#08783F]/45
    focus:bg-white
    focus:shadow-[0_0_0_4px_rgba(8,120,63,0.08)]
    disabled:cursor-not-allowed
    disabled:opacity-65
  `;
}
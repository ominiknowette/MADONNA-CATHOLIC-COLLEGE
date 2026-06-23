import { AlertCircle, Loader2, Send } from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";

export type AdmissionEnquiry = {
  parentGuardianFullName: string;
  phoneNumber: string;
  emailAddress: string;
  studentFullName: string;
  classApplyingFor: string;
  termApplyingFor: string;
  academicSession: string;
  submittedAt: string;
  status: "pending";
};

type AdmissionEnquiryDraft = Omit<AdmissionEnquiry, "submittedAt" | "status">;
type FieldName = keyof AdmissionEnquiryDraft;
type FieldErrors = Partial<Record<FieldName, string>>;

type AdmissionEnquiryFormProps = {
  onSubmitted: (enquiry: AdmissionEnquiry) => void;
};

const initialForm: AdmissionEnquiryDraft = {
  parentGuardianFullName: "",
  phoneNumber: "",
  emailAddress: "",
  studentFullName: "",
  classApplyingFor: "",
  termApplyingFor: "",
  academicSession: "",
};

const classOptions = [
  "JSS 1",
  "JSS 2",
  "JSS 3",
  "SS 1",
  "SS 2",
  "SS 3",
];

const termOptions = ["First Term", "Second Term", "Third Term"];
const sessionOptions = ["2026/2027", "2027/2028", "2028/2029"];

const requiredMessage = "This field is required.";

function validateField(name: FieldName, value: string) {
  const trimmed = value.trim();

  if (!trimmed) return requiredMessage;
  if (name === "emailAddress" && !/^\S+@\S+\.\S+$/.test(trimmed)) return "Enter a valid email address.";
  if (name === "phoneNumber" && trimmed.replace(/[^0-9+]/g, "").length < 8) return "Enter a reachable phone number.";

  return "";
}

function mockNotifySchool(enquiry: AdmissionEnquiry) {
  console.info("Mock admission enquiry payload:", enquiry);
  console.info("Mock email notification queued for admissions office:", {
    to: "admissions@mcc.edu.ng",
    subject: `New admission enquiry for ${enquiry.studentFullName}`,
    status: enquiry.status,
    submittedAt: enquiry.submittedAt,
  });
}

/** Public admission enquiry form with local validation and mock notification only. */
export default function AdmissionEnquiryForm({ onSubmitted }: AdmissionEnquiryFormProps) {
  const [form, setForm] = useState<AdmissionEnquiryDraft>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(name: FieldName, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
  }

  function handleBlur(name: FieldName, value: string) {
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
  }

  function validateForm() {
    const nextErrors = (Object.keys(initialForm) as FieldName[]).reduce<FieldErrors>((result, name) => {
      const error = validateField(name, form[name]);
      if (error) result[name] = error;
      return result;
    }, {});

    setErrors(nextErrors);
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm();

    const firstErrorName = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstErrorName) {
      window.setTimeout(() => document.getElementById(firstErrorName)?.focus(), 0);
      return;
    }

    setIsSubmitting(true);

    const enquiry: AdmissionEnquiry = {
      ...form,
      parentGuardianFullName: form.parentGuardianFullName.trim(),
      phoneNumber: form.phoneNumber.trim(),
      emailAddress: form.emailAddress.trim(),
      studentFullName: form.studentFullName.trim(),
      submittedAt: new Date().toISOString(),
      status: "pending",
    };

    await new Promise((resolve) => window.setTimeout(resolve, 900));
    mockNotifySchool(enquiry);

    try {
      window.localStorage.setItem("mcc.latestAdmissionEnquiry", JSON.stringify(enquiry));
    } catch (error) {
      console.warn("Could not save mock admission enquiry locally.", error);
    }

    setForm(initialForm);
    setErrors({});
    setIsSubmitting(false);
    onSubmitted(enquiry);
  }

  const inputBase = "mt-2 h-12 w-full rounded-xl border bg-white px-4 text-sm font-semibold text-mcc-ink shadow-sm transition placeholder:text-mcc-muted/70 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-mcc-blush";
  const inputState = (name: FieldName) =>
    errors[name]
      ? "border-red-300 focus:border-red-500 focus:ring-red-100"
      : "border-mcc-line focus:border-mcc-wine focus:ring-mcc-line/70";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5" aria-label="Admission enquiry form">
      <fieldset className="grid gap-5">
        <legend className="sr-only">Parent and student admission enquiry details</legend>

        <FormField label="Parent / Guardian Full Name" name="parentGuardianFullName" error={errors.parentGuardianFullName}>
          <input
            id="parentGuardianFullName"
            name="parentGuardianFullName"
            type="text"
            autoComplete="name"
            value={form.parentGuardianFullName}
            onChange={(event) => updateField("parentGuardianFullName", event.target.value)}
            onBlur={(event) => handleBlur("parentGuardianFullName", event.target.value)}
            placeholder="Mrs. Chioma Okeke"
            aria-invalid={Boolean(errors.parentGuardianFullName)}
            aria-describedby={errors.parentGuardianFullName ? "parentGuardianFullName-error" : undefined}
            disabled={isSubmitting}
            className={`${inputBase} ${inputState("parentGuardianFullName")}`}
            required
          />
        </FormField>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Phone Number" name="phoneNumber" error={errors.phoneNumber}>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              value={form.phoneNumber}
              onChange={(event) => updateField("phoneNumber", event.target.value)}
              onBlur={(event) => handleBlur("phoneNumber", event.target.value)}
              placeholder="+234 803 123 4567"
              aria-invalid={Boolean(errors.phoneNumber)}
              aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
              disabled={isSubmitting}
              className={`${inputBase} ${inputState("phoneNumber")}`}
              required
            />
          </FormField>

          <FormField label="Email Address" name="emailAddress" error={errors.emailAddress}>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              autoComplete="email"
              value={form.emailAddress}
              onChange={(event) => updateField("emailAddress", event.target.value)}
              onBlur={(event) => handleBlur("emailAddress", event.target.value)}
              placeholder="parent@example.com"
              aria-invalid={Boolean(errors.emailAddress)}
              aria-describedby={errors.emailAddress ? "emailAddress-error" : undefined}
              disabled={isSubmitting}
              className={`${inputBase} ${inputState("emailAddress")}`}
              required
            />
          </FormField>
        </div>

        <FormField label="Student Full Name" name="studentFullName" error={errors.studentFullName}>
          <input
            id="studentFullName"
            name="studentFullName"
            type="text"
            autoComplete="off"
            value={form.studentFullName}
            onChange={(event) => updateField("studentFullName", event.target.value)}
            onBlur={(event) => handleBlur("studentFullName", event.target.value)}
            placeholder="Adaora Okeke"
            aria-invalid={Boolean(errors.studentFullName)}
            aria-describedby={errors.studentFullName ? "studentFullName-error" : undefined}
            disabled={isSubmitting}
            className={`${inputBase} ${inputState("studentFullName")}`}
            required
          />
        </FormField>

        <div className="grid gap-5 sm:grid-cols-3">
          <SelectField
            label="Class Applying For"
            name="classApplyingFor"
            value={form.classApplyingFor}
            error={errors.classApplyingFor}
            options={classOptions}
            disabled={isSubmitting}
            inputBase={inputBase}
            inputState={inputState("classApplyingFor")}
            onChange={(value) => updateField("classApplyingFor", value)}
            onBlur={(value) => handleBlur("classApplyingFor", value)}
          />

          <SelectField
            label="Term Applying For"
            name="termApplyingFor"
            value={form.termApplyingFor}
            error={errors.termApplyingFor}
            options={termOptions}
            disabled={isSubmitting}
            inputBase={inputBase}
            inputState={inputState("termApplyingFor")}
            onChange={(value) => updateField("termApplyingFor", value)}
            onBlur={(value) => handleBlur("termApplyingFor", value)}
          />

          <SelectField
            label="Academic Session"
            name="academicSession"
            value={form.academicSession}
            error={errors.academicSession}
            options={sessionOptions}
            disabled={isSubmitting}
            inputBase={inputBase}
            inputState={inputState("academicSession")}
            onChange={(value) => updateField("academicSession", value)}
            onBlur={(value) => handleBlur("academicSession", value)}
          />
        </div>
      </fieldset>

      <div className="rounded-2xl border border-mcc-line bg-mcc-blush/70 p-4 text-sm leading-6 text-mcc-muted">
        This form records an admission enquiry only. It does not collect fees or process payments.
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--admission-accent)] px-6 py-3 text-base font-black text-white shadow-card transition hover:bg-mcc-plum focus:outline-none focus:ring-4 focus:ring-mcc-line/80 disabled:cursor-wait disabled:opacity-80"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending Enquiry...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Submit Admission Enquiry
          </>
        )}
      </button>
    </form>
  );
}

type FormFieldProps = {
  label: string;
  name: FieldName;
  error?: string;
  children: ReactNode;
};

function FormField({ label, name, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-black text-mcc-ink">
        {label} <span className="text-mcc-wine" aria-hidden="true">*</span>
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-2 flex items-center gap-2 text-sm font-semibold text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: FieldName;
  value: string;
  error?: string;
  options: string[];
  disabled: boolean;
  inputBase: string;
  inputState: string;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
};

function SelectField({
  label,
  name,
  value,
  error,
  options,
  disabled,
  inputBase,
  inputState,
  onChange,
  onBlur,
}: SelectFieldProps) {
  return (
    <FormField label={label} name={name} error={error}>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={(event) => onBlur(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        disabled={disabled}
        className={`${inputBase} ${inputState}`}
        required
      >
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FormField>
  );
}

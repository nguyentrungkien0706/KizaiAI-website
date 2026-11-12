"use client";

import * as React from "react";
import { readSource, trackEvent } from "@/components/site/analytics";
import { AlertCircle, Check, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section, displayClass } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "company";
type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact({ t, locale }: { t: Dictionary; locale: Locale }) {
  const c = t.contact;
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<Partial<Record<Field, string>>>({});
  const formRef = React.useRef<HTMLFormElement>(null);
  const successRef = React.useRef<HTMLDivElement>(null);

  function validate(data: FormData) {
    const next: Partial<Record<Field, string>> = {};
    if (!String(data.get("name") ?? "").trim()) next.name = c.errors.name;
    if (!EMAIL_RE.test(String(data.get("email") ?? "").trim())) next.email = c.errors.email;
    if (!String(data.get("company") ?? "").trim()) next.company = c.errors.company;
    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validate(data);
    setErrors(found);
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      formRef.current?.querySelector<HTMLInputElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(data),
          locale,
          source: readSource().src,
          landing: readSource().land,
          page: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      trackEvent("generate_lead", { form: "demo_request", locale, page_path: window.location.pathname });
      setStatus("success");
      formRef.current?.reset();
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
    }
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <Section id="contact" aria-labelledby="contact-title" className="pt-0 md:pt-0 xl:pt-0">
      <Container>
        <div className="grid grid-cols-1 gap-10 rounded-xl bg-surface p-6 md:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:p-16">
          <div>
            <h2
              id="contact-title"
              className={cn(displayClass, "text-[34px] md:text-[44px] xl:text-[52px] [:lang(ja)_&]:text-[28px] md:[:lang(ja)_&]:text-[38px]")}
            >
              {c.title}
            </h2>
            <p className="mt-5 max-w-[30rem] text-lg text-ink-3">{c.sub}</p>
            <ul className="mt-8 space-y-3">
              {c.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[16px] font-medium text-ink">
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-white">
                    <Check aria-hidden="true" className="size-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-line pt-8">
              <h3 className="text-[17px] font-semibold">{c.info.title}</h3>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 text-[15px] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <dt className="text-ink-3">{c.info.phoneLabel}</dt>
                  <dd className="m-0 font-medium text-ink">
                    <a href={`tel:${c.info.phone.replace(/[^+\d]/g, "")}`} className="underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                      {c.info.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-3">{c.info.emailLabel}</dt>
                  <dd className="m-0 font-medium text-ink">
                    <a href={`mailto:${c.info.email}`} className="underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                      {c.info.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-3">{c.info.addressLabel}</dt>
                  <dd className="m-0 text-ink">{c.info.address}</dd>
                </div>
                <div>
                  <dt className="text-ink-3">{c.info.hoursLabel}</dt>
                  <dd className="m-0 text-ink">{c.info.hours}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="self-start rounded-lg bg-white p-6 md:p-8">
            {status === "success" ? (
              <div ref={successRef} tabIndex={-1} role="status" className="focus:outline-none">
                <div className="flex gap-3 rounded-md bg-success-tint p-4 text-success">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
                  <div>
                    <p className="font-semibold">{c.successTitle}</p>
                    <p className="mt-1 text-[14px]">{c.successText}</p>
                  </div>
                </div>
                <Button variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>
                  {c.again}
                </Button>
              </div>
            ) : (
              <form ref={formRef} noValidate onSubmit={onSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {hasErrors ? <ErrorBox className="md:col-span-2">{c.errors.summary}</ErrorBox> : null}

                <TextField name="name" label={c.fields.name} required={c.required} autoComplete="name" error={errors.name} />
                <TextField
                  name="email"
                  type="email"
                  label={c.fields.email}
                  required={c.required}
                  autoComplete="email"
                  error={errors.email}
                />
                <TextField
                  name="company"
                  label={c.fields.company}
                  required={c.required}
                  autoComplete="organization"
                  error={errors.company}
                />
                <SelectField name="size" label={c.fields.size} placeholder={c.choose} options={c.sizes} />
                <TextField name="cad" label={c.fields.cad} hint={c.cadHint} />
                <SelectField name="need" label={c.fields.need} placeholder={c.choose} options={c.needs} />

                {status === "error" ? <ErrorBox className="md:col-span-2">{c.errors.network}</ErrorBox> : null}

                <div className="flex flex-col gap-3 pt-2 md:col-span-2">
                  <Button type="submit" size="lg" className="w-full" loading={status === "sending"} loadingText={c.sending}>
                    {c.submit}
                  </Button>
                  <p className="text-center text-[13px] text-ink-3">{c.privacy}</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ErrorBox({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div role="alert" className={cn("flex gap-3 rounded-md bg-danger-tint p-4 text-danger", className)}>
      <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
      <p className="text-[14px] font-medium">{children}</p>
    </div>
  );
}

const controlClass =
  "h-11 w-full rounded-md border border-line-strong bg-white px-3.5 text-[16px] text-ink transition-colors duration-[120ms] placeholder:text-ink-3 hover:border-ink-3 focus:border-ink disabled:bg-surface disabled:text-ink-3";

function TextField({
  name,
  label,
  required,
  hint,
  error,
  type = "text",
  autoComplete,
}: {
  name: string;
  label: string;
  required?: string;
  hint?: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  const id = `field-${name}`;
  const describedBy = [error ? `${id}-error` : null, hint ? `${id}-hint` : null].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <label htmlFor={id} className="text-[14px] font-medium text-ink">
        {label}
        {required ? <span className="font-normal text-ink-3"> {required}</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-required={required ? true : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(controlClass, "mt-1.5", error && "border-2 border-danger hover:border-danger focus:border-danger")}
      />
      {hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-[13px] text-ink-3">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-[13px] font-medium text-danger">
          <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  name,
  label,
  placeholder,
  options,
}: {
  name: string;
  label: string;
  placeholder: string;
  options: string[];
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-[14px] font-medium text-ink">
        {label}
      </label>
      <div className="relative mt-1.5">
        <select id={id} name={name} defaultValue="" className={cn(controlClass, "appearance-none pr-10")}>
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-ink-2"
        />
      </div>
    </div>
  );
}

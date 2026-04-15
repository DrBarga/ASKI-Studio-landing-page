"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import type { ContactFormState } from "@/app/actions";
import { submitLead } from "@/app/actions";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="gold-button w-full disabled:opacity-70"
      disabled={pending}
    >
      {pending ? "Wysyłanie..." : "Wyślij formularz"}
    </button>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitLead, initialState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold-soft)]">
          Formularz kontaktowy
        </p>
        <h3 className="display-heading text-4xl leading-tight text-white">
          Opowiedz krótko o realizacji.
        </h3>
        <p className="text-sm leading-7 text-white/64">
          Imię, telefon i e-mail to minimum. Jeśli chcesz, dopisz też kilka słów
          o typie wnętrza lub zakresie prac.
        </p>
      </div>

      <form ref={formRef} action={formAction} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm text-white/76">Imię</span>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Twoje imię"
              required
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm text-white/76">Telefon</span>
            <input
              name="phone"
              type="tel"
              className="form-control"
              placeholder="+48 000 000 000"
              required
            />
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-sm text-white/76">E-mail</span>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="twoj@email.com"
            required
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm text-white/76">Kilka słów o projekcie</span>
          <textarea
            name="details"
            rows={5}
            className="form-control resize-none"
            placeholder="Mieszkanie premium, lokal komercyjny, planowany zakres prac..."
          />
        </label>

        <SubmitButton />

        {state.status !== "idle" ? (
          <p
            className={`rounded-[1.2rem] border px-4 py-3 text-sm leading-6 ${
              state.status === "success"
                ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-100"
                : "border-amber-300/20 bg-amber-500/10 text-amber-100"
            }`}
          >
            {state.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}

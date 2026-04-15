"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

function normalizeValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

export async function submitLead(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = normalizeValue(formData.get("name"));
  const phone = normalizeValue(formData.get("phone"));
  const email = normalizeValue(formData.get("email"));
  const details = normalizeValue(formData.get("details"));

  if (name.length < 2) {
    return {
      status: "error",
      message: "Podaj proszę imię, żebyśmy wiedzieli, jak się do Ciebie odezwać.",
    };
  }

  if (phone.length < 7) {
    return {
      status: "error",
      message: "Podaj poprawny numer telefonu.",
    };
  }

  if (!email.includes("@")) {
    return {
      status: "error",
      message: "Podaj poprawny adres e-mail.",
    };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return {
      status: "error",
      message:
        "Formularz jest gotowy, ale wysyłka do Telegrama wymaga jeszcze ustawienia TELEGRAM_BOT_TOKEN i TELEGRAM_CHAT_ID.",
    };
  }

  const message = [
    "Nowe zapytanie ze strony ASKI Studio",
    "",
    `Imię: ${name}`,
    `Telefon: ${phone}`,
    `E-mail: ${email}`,
    `Szczegóły: ${details || "Nie podano"}`,
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        disable_web_page_preview: true,
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return {
      status: "error",
      message:
        "Nie udało się wysłać formularza. Spróbuj ponownie albo skontaktuj się telefonicznie.",
    };
  }

  return {
    status: "success",
    message: "Dziękujemy. Wiadomość została wysłana, wrócimy do Ciebie z odpowiedzią.",
  };
}

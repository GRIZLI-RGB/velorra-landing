"use client";

import { ChangeEvent, ComponentProps, FormEvent, useState } from "react";

import Title from "./ui/title";
import clsx from "clsx";

type FormValues = {
  contactName: string;
  companyName: string;
  phone: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FieldName = keyof FormValues;
type FieldConfig = {
  name: FieldName;
  label: string;
  inputMode?: ComponentProps<"input">["inputMode"];
};

const INITIAL_VALUES: FormValues = {
  contactName: "",
  companyName: "",
  phone: "",
};

const FIELD_LABEL_CLASS = "block text-[20px] text-justify";
const FIELD_INPUT_CLASS =
  "mt-3 h-10 w-full border-b border-[#353535] bg-transparent pb-2 text-[20px] outline-none";
const FIELD_ERROR_CLASS = "mt-2 text-sm text-[#cc2f2f]";

const FORM_FIELDS: FieldConfig[] = [
  { name: "contactName", label: "Имя контактного лица:" },
  { name: "companyName", label: "Название компании:" },
  { name: "phone", label: "Телефон:", inputMode: "tel" },
];

export default function EntryForm({ className }: { className?: string }) {
  const [formValues, setFormValues] = useState<FormValues>(INITIAL_VALUES);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};

    if (!values.contactName.trim()) {
      errors.contactName = "Укажите имя контактного лица.";
    }

    if (!values.companyName.trim()) {
      errors.companyName = "Укажите название компании.";
    }

    const phoneValue = values.phone.trim();
    const phoneDigits = phoneValue.replace(/\D/g, "");
    const phonePattern = /^[+\d()\-\s]+$/;

    if (!phoneValue) {
      errors.phone = "Укажите телефон.";
    } else if (!phonePattern.test(phoneValue) || phoneDigits.length < 10) {
      errors.phone = "Введите корректный номер телефона.";
    }

    return errors;
  };

  const handleInputChange = (
    field: keyof FormValues,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const nextValue = event.target.value;

    setFormValues((previousValues) => ({
      ...previousValues,
      [field]: nextValue,
    }));

    setFormErrors((previousErrors) => {
      if (!previousErrors[field]) {
        return previousErrors;
      }

      const nextErrors = { ...previousErrors };
      delete nextErrors[field];

      return nextErrors;
    });

    setIsSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formValues);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setFormValues(INITIAL_VALUES);
    }
  };

  return (
    <section className={clsx(className)}>
      <div className="default-container flex items-start justify-between gap-10">
        <div className="max-w-[460px] w-full">
          <Title align="left" className="leading-[120%]">
            Готовы попробовать Velorra в работе?
          </Title>
          <p className="mt-2.5 text-[25px]">
            Оставьте заявку и получите
            <br />
            <b>100 минут в подарок!</b>
          </p>
        </div>

        <form
          className="w-full max-w-[424px]"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="space-y-[46px]">
            {FORM_FIELDS.map((field) => {
              const fieldError = formErrors[field.name];

              return (
                <div key={field.name}>
                  <label htmlFor={field.name} className={FIELD_LABEL_CLASS}>
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={formValues[field.name]}
                    onChange={(event) => handleInputChange(field.name, event)}
                    className={FIELD_INPUT_CLASS}
                    inputMode={field.inputMode}
                  />
                  {fieldError ? (
                    <p className={FIELD_ERROR_CLASS}>{fieldError}</p>
                  ) : null}
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            className="mt-[73px] inline-flex h-[52px] px-10 items-center justify-center gap-4 rounded-full bg-(--color-blue) text-[20px] text-white transition-opacity hover:opacity-90"
          >
            <span>Начать тестировать</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="6"
              viewBox="0 0 32 6"
              fill="none"
            >
              <path
                d="M31.1328 2.88672L26.1328 -3.26633e-05V5.77347L31.1328 2.88672ZM0 2.88672V3.38672H26.6328V2.88672V2.38672H0V2.88672Z"
                fill="white"
              />
            </svg>
          </button>

          {isSubmitted ? (
            <p className="mt-4 text-sm text-[#2960EA]">
              Заявка готова к отправке.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

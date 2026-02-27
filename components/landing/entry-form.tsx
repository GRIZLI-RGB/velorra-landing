"use client";

import { ChangeEvent, ComponentProps, FormEvent, useState } from "react";

import Title from "./ui/title";
import clsx from "clsx";
import Button from "./ui/button";

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

const FIELD_LABEL_CLASS =
	"block text-[20px] text-justify max-[985px]:text-[17px] max-md:text-[16px]";
const FIELD_INPUT_CLASS =
	"mt-3 h-10 w-full border-b border-[#353535] bg-transparent pb-2 text-[20px] outline-none max-[985px]:h-9 max-[985px]:text-[17px] max-md:text-[16px]";
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
		<section className={clsx("relative", className)}>
			<img
				src="/images/decor/center-form.png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none max-[985px]:opacity-80"
			/>

			<div className="default-container relative z-10 flex items-start justify-between gap-10 max-[985px]:flex-col max-[985px]:items-center max-[985px]:gap-6 max-md:gap-5">
				<div className="w-full max-w-[460px] max-[985px]:text-center">
					<Title
						align="left"
						className="leading-[120%] max-[985px]:text-center"
					>
						Готовы попробовать Velorra в работе?
					</Title>
					<p className="mt-2.5 text-[25px] max-[985px]:mt-2 max-[985px]:text-[20px] max-md:text-[18px]">
						Оставьте заявку и получите
						<br />
						<b>100 минут в подарок!</b>
					</p>
				</div>

				<form
					className="w-full max-w-[424px] max-[985px]:max-w-full"
					onSubmit={handleSubmit}
					noValidate
				>
					<div className="space-y-[46px] max-[985px]:space-y-8 max-md:space-y-6">
						{FORM_FIELDS.map((field) => {
							const fieldError = formErrors[field.name];

							return (
								<div key={field.name}>
									<label
										htmlFor={field.name}
										className={FIELD_LABEL_CLASS}
									>
										{field.label}
									</label>
									<input
										id={field.name}
										name={field.name}
										value={formValues[field.name]}
										onChange={(event) =>
											handleInputChange(field.name, event)
										}
										className={FIELD_INPUT_CLASS}
										inputMode={field.inputMode}
									/>
									{fieldError ? (
										<p className={FIELD_ERROR_CLASS}>
											{fieldError}
										</p>
									) : null}
								</div>
							);
						})}
					</div>

					<Button
						text="Начать тестировать"
						className="mt-[73px] max-[985px]:mt-10 max-md:mt-8 max-[420px]:w-full!"
					/>

					{isSubmitted ? (
						<p className="mt-4 text-sm text-[#2960EA]">
							Заявка отправлена.
						</p>
					) : null}
				</form>
			</div>
		</section>
	);
}

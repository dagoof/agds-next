import { ReactNode } from 'react';
import { useId } from '@reach/auto-id';
import { FieldContainer } from './FieldContainer';
import { FieldLabel } from './FieldLabel';
import { FieldHint } from './FieldHint';
import { FieldMessage } from './FieldMessage';

export type FieldProps = {
	children: ((allyProps: A11yProps) => ReactNode) | ReactNode;
	hint: string | undefined;
	id?: string;
	invalid?: boolean;
	label: string;
	secondaryLabel?: string;
	message: string | undefined;
	required: boolean;
	valid?: boolean;
};

export const Field = ({
	children,
	hint,
	id,
	invalid,
	label,
	secondaryLabel,
	message,
	required,
	valid,
}: FieldProps) => {
	const { fieldId, hintId, messageId } = useFieldIds(id);

	const a11yProps = useFieldA11yProps({
		required,
		fieldId,
		message,
		messageId,
		hint,
		hintId,
		invalid,
	});

	return (
		<FieldContainer invalid={invalid}>
			<FieldLabel
				htmlFor={fieldId}
				secondaryLabel={secondaryLabel}
				required={required}
			>
				{label}
			</FieldLabel>
			{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
			{message && (invalid || valid) ? (
				<FieldMessage id={messageId} invalid={invalid} valid={valid}>
					{message}
				</FieldMessage>
			) : null}
			{typeof children === 'function' ? children(a11yProps) : children}
		</FieldContainer>
	);
};

export const useFieldIds = (idProp?: string) => {
	const autoId = useId(idProp);
	const fieldId = idProp ? idProp : `field-${autoId}`;
	const hintId = `field-${autoId}-hint`;
	const messageId = `field-${autoId}-message`;
	return { fieldId, hintId, messageId };
};

type A11yProps = {
	'aria-required': boolean;
	'aria-invalid': boolean;
	'aria-describedby': string;
	id: string;
};

export const useFieldA11yProps = ({
	required,
	fieldId,
	message,
	messageId,
	hint,
	hintId,
	invalid,
}: {
	required?: boolean;
	fieldId: string;
	message?: string;
	messageId: string;
	hint?: string;
	hintId: string;
	invalid?: boolean;
}): A11yProps => ({
	'aria-required': Boolean(required),
	'aria-invalid': Boolean(invalid),
	'aria-describedby': [message ? messageId : null, hint ? hintId : null]
		.filter(Boolean)
		.join(' '),
	id: fieldId,
});

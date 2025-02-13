import { Flex } from '@ag.ds-next/box';
import { AlertFilledIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';

export const FieldMessage = ({
	children,
	id,
	invalid,
	valid,
}: {
	children: string;
	id?: string;
	invalid?: boolean;
	valid?: boolean;
}) => (
	<Flex gap={0.5} alignItems="center">
		{invalid ? <AlertFilledIcon color="error" size="md" /> : null}
		<Text display="block" color={getColor({ invalid, valid })} id={id}>
			{children}
		</Text>
	</Flex>
);

const getColor = ({
	invalid,
	valid,
}: {
	invalid?: boolean;
	valid?: boolean;
}) => {
	if (invalid) return 'error';
	if (valid) return 'success';
};

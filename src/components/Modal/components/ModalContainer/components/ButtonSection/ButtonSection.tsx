import Button from '@/components/Button';

interface ButtonSectionProps {
	isCompleted: boolean;
	onClose: () => void;
	isDisabled: boolean;
	isLoading: boolean;
}

const ButtonSection: React.FC<ButtonSectionProps> = props => {
	const { isCompleted, onClose, isDisabled, isLoading } = props;
	return isCompleted ? (
		<Button type="button" width="100%" onClick={onClose}>
			OK!
		</Button>
	) : (
		<Button width="100%" type="submit" disabled={isDisabled}>
			{isLoading ? 'Sending, please wait...' : 'submit'}
		</Button>
	);
};

export default ButtonSection;

import { ItemContainer } from './styles';

interface ExperienceItemProps {
  title: string;
  subtitle: string;
  description: string;
}

function ExperienceItem({ title, subtitle, description }: ExperienceItemProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}

export default ExperienceItem;

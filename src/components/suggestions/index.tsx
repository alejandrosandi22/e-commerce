import Card from 'components/card';
import styles from 'styles/Suggestions.module.scss';
import { SuggestionsType } from 'types';

export default function Suggestions({
  suggestions,
}: {
  suggestions: SuggestionsType;
}) {
  if (!suggestions) return <h1>Loading</h1>;

  return (
    <div className={styles.suggestions}>
      <ul>
        <Card data={suggestions.related.kits} />
        <Card data={suggestions.related.training} />
        <Card data={suggestions.related.lifestyle} />
        <Card data={suggestions.related.accesories} />
      </ul>
      <ul>
        <Card data={suggestions.others.kits[0]} />
        <Card data={suggestions.others.kits[1]} />
        <Card data={suggestions.others.kits[2]} />
        <Card data={suggestions.others.kits[3]} />
      </ul>
      <ul>
        <Card data={suggestions.others.training[0]} />
        <Card data={suggestions.others.training[1]} />
        <Card data={suggestions.others.training[2]} />
        <Card data={suggestions.others.training[3]} />
      </ul>
      <ul>
        <Card data={suggestions.others.lifestyle[0]} />
        <Card data={suggestions.others.lifestyle[1]} />
        <Card data={suggestions.others.lifestyle[2]} />
        <Card data={suggestions.others.lifestyle[3]} />
      </ul>
      <ul>
        <Card data={suggestions.others.accesories[0]} />
        <Card data={suggestions.others.accesories[1]} />
        <Card data={suggestions.others.accesories[2]} />
        <Card data={suggestions.others.accesories[3]} />
      </ul>
    </div>
  );
}

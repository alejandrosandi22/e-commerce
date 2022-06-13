import Card from 'components/shared/cards/card';
import useFetch from 'hooks/useFetch';
import styles from 'styles/Suggestions.module.scss';
import { CollectionsType } from 'types';

export default function Suggestions({ endpoint }: { endpoint: string | null }) {
  const { data: similarData, loading: similarDataLoading } =
    useFetch<CollectionsType>(
      `https://sp-api.alejandrosandi.com/api/products/team/${endpoint}?sort=sold&limit=1&order=desc`
    );
  const { data: recommendedData, loading: recommendedDataLoading } =
    useFetch<CollectionsType>(
      `https://sp-api.alejandrosandi.com/api/products?sort=sold&limit=4&order=desc`
    );

  return (
    <div className={styles.suggestions}>
      <ul>
        <Card
          loading={similarDataLoading}
          data={similarDataLoading ? null : similarData.kits[0]}
        />
        <Card
          loading={similarDataLoading}
          data={similarDataLoading ? null : similarData.training[0]}
        />
        <Card
          loading={similarDataLoading}
          data={similarDataLoading ? null : similarData.lifestyle[0]}
        />
        <Card
          loading={similarDataLoading}
          data={similarDataLoading ? null : similarData.accesories[0]}
        />
      </ul>
      <ul>
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.kits[0]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.kits[1]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.kits[2]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.kits[3]}
        />
      </ul>
      <ul>
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.training[0]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.training[1]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.training[2]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.training[3]}
        />
      </ul>
      <ul>
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.lifestyle[0]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.lifestyle[1]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.lifestyle[2]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.lifestyle[3]}
        />
      </ul>
      <ul>
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.accesories[0]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.accesories[1]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.accesories[2]}
        />
        <Card
          loading={recommendedDataLoading}
          data={recommendedDataLoading ? null : recommendedData.accesories[3]}
        />
      </ul>
    </div>
  );
}
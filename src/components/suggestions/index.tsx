import Card from 'components/shared/cards/card';
import useFetch from 'hooks/useFetch';
import styles from 'styles/Suggestions.module.scss';
import { CollectionsType } from 'types';

export default function Suggestions({ endpoint }: { endpoint?: string }) {
  const { data: similarData, loading: similarDataLoading } =
    useFetch<CollectionsType>(
      endpoint
        ? `https://sp-api.alejandrosandi.com/api/products/team/${endpoint}?sort=sold&limit=1&order=desc`
        : `https://sp-api.alejandrosandi.com/api/products?order=asc&limit=1&sort=sold`
    );
  const { data: recommendedData, loading: recommendedDataLoading } =
    useFetch<CollectionsType>(
      `https://sp-api.alejandrosandi.com/api/products?sort=sold&limit=4&order=desc`
    );

  return (
    <div className='suggestions__container'>
      <ul className='suggestions__unordered__list'>
        <Card data={similarDataLoading ? null : similarData.kits[0]} />
        <Card data={similarDataLoading ? null : similarData.training[0]} />
        <Card data={similarDataLoading ? null : similarData.lifestyle[0]} />
        <Card data={similarDataLoading ? null : similarData.accessories[0]} />
      </ul>
      <ul className='suggestions__unordered__list'>
        <Card data={recommendedDataLoading ? null : recommendedData.kits[0]} />
        <Card data={recommendedDataLoading ? null : recommendedData.kits[1]} />
        <Card data={recommendedDataLoading ? null : recommendedData.kits[2]} />
        <Card data={recommendedDataLoading ? null : recommendedData.kits[3]} />
      </ul>
      <ul className='suggestions__unordered__list'>
        <Card
          data={recommendedDataLoading ? null : recommendedData.training[0]}
        />
        <Card
          data={recommendedDataLoading ? null : recommendedData.training[1]}
        />
        <Card
          data={recommendedDataLoading ? null : recommendedData.training[2]}
        />
        <Card
          data={recommendedDataLoading ? null : recommendedData.training[3]}
        />
      </ul>
      <ul className='suggestions__unordered__list'>
        <Card
          data={recommendedDataLoading ? null : recommendedData.lifestyle[0]}
        />
        <Card
          data={recommendedDataLoading ? null : recommendedData.lifestyle[1]}
        />
        <Card
          data={recommendedDataLoading ? null : recommendedData.lifestyle[2]}
        />
        <Card
          data={recommendedDataLoading ? null : recommendedData.lifestyle[3]}
        />
      </ul>
      <ul className='suggestions__unordered__list'>
        <Card
          data={recommendedDataLoading ? null : recommendedData.accessories[0]}
        />
        <Card
          data={recommendedDataLoading ? null : recommendedData.accessories[1]}
        />
        <Card
          data={recommendedDataLoading ? null : recommendedData.accessories[2]}
        />
        <Card
          data={recommendedDataLoading ? null : recommendedData.accessories[3]}
        />
      </ul>
    </div>
  );
}

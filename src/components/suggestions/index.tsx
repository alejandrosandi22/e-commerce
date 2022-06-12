import Card from 'components/cards/card';
import useFetch from 'hooks/useFetch';
import styles from 'styles/Suggestions.module.scss';
import { ProductType } from 'types';

export default function Suggestions({ endpoint }: { endpoint: string | null }) {
  const { data, loading } = useFetch<any>(
    `https://sp-api.alejandrosandi.com/api/products/team/${endpoint}?sort=sold&limit=4&order=desc`
  );

  console.log(data);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.suggestions}>
      <ul></ul>
      <ul></ul>
      <ul></ul>
      <ul></ul>
      <ul></ul>
    </div>
  );
}

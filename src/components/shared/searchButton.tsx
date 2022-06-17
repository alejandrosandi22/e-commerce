/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAutocomplete } from '@algolia/autocomplete-core';
import React, { useMemo, useRef, useState } from 'react';
import { ProductType } from 'types';
import styles from 'styles/Search.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export function AutoCompleteItem(props: ProductType) {
  return (
    <li className={styles.autocompleteItem}>
      <Link href={`/product/${props._id}`}>
        <a>
          <div className={styles.imageWrapper}>
            <Image src={props.images[0]} layout='fill' alt={props.endpoint} />
          </div>
          <div className={styles.autoCompleteTextWrapper}>
            <h3>{`${props.team} ${props.season} ${props.type} ${props.category}`}</h3>
            <p>${props.price}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default function SearchButton() {
  const [autocompleteState, setAutocompleteState] = useState<any>({
    collections: [],
    isOpen: false,
  });

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: 'Search',
        onStateChange: ({ state }) => {
          return setAutocompleteState(state);
        },
        getSources: () => [
          {
            sourceId: 'products',
            getItems: ({ query }) => {
              if (query) {
                return fetch(`/api/search?q=${query}`).then((res) =>
                  res.json()
                );
              }
              return [];
            },
          },
        ],
      }),
    []
  );

  const formRef = useRef<React.FormEvent<HTMLFormElement>>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current,
  });

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
  });

  return (
    <form ref={formRef} className={styles.searchForm} {...formProps}>
      <button>
        <i className='fal fa-search'></i>
      </button>
      <input ref={inputRef} {...inputProps} />
      {autocompleteState.isOpen && (
        <div
          className={styles.panel}
          ref={panelRef}
          {...autocomplete.getPanelProps()}
        >
          {autocompleteState.collections.map(
            (collection: any, index: number) => {
              const { items } = collection;
              return (
                <section key={`section-${index}`}>
                  {items.length > 0 && (
                    <ul {...autocomplete.getListProps()}>
                      {items.map((item: ProductType) => (
                        <AutoCompleteItem key={item._id} {...item} />
                      ))}
                    </ul>
                  )}
                </section>
              );
            }
          )}
        </div>
      )}
    </form>
  );
}

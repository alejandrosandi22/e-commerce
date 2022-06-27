/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAutocomplete } from '@algolia/autocomplete-core';
import { ProductType } from 'types';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function AutoCompleteItem(props: ProductType) {
  return (
    <li className='search__autocomplete__item'>
      <Link href={`/product/${props._id}`}>
        <a className='search__link__item'>
          <div className='search__image__wrapper'>
            <Image src={props.images[0]} layout='fill' alt={props.endpoint} />
          </div>
          <div className='search__autocomplete__text__wrapper'>
            <h3 className='search__title'>{`${props.team} ${props.season} ${props.type} ${props.category}`}</h3>
            <p className='search__price'>${props.price}</p>
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

  useEffect(() => console.clear(), []);

  return (
    <>
      <form ref={formRef} className='search__form' {...formProps}>
        <button className='search__button'>
          <i className='fal fa-search'></i>
        </button>
        <input ref={inputRef} className='search__input' {...inputProps} />
        {autocompleteState.isOpen && (
          <div
            className='search__panel'
            ref={panelRef}
            {...autocomplete.getPanelProps()}
          >
            {autocompleteState.collections.map(
              (collection: any, index: number) => {
                const { items } = collection;
                return (
                  <section
                    className='search__autocomplete__wrapper'
                    key={`section-${index}`}
                  >
                    {items.length > 0 && (
                      <ul
                        className='search__unodered__list__autocomplete'
                        {...autocomplete.getListProps()}
                      >
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
    </>
  );
}

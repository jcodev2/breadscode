import { createAutocomplete } from '@algolia/autocomplete-core'
import React, { useMemo, useRef, useState } from 'react'
import { getBreads } from '../services'
import AutocompleteItem from './AutocompleteItem'

const Search = (props) => {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: 'Search your favorite bread',
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: 'offers-next-api',
            getItems: ({ query }) => {
              if (!!query) {
                return getBreads()
              }
              return []
            }
          }
        ],
        ...props
      }),
    [props]
  )

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <form className='form-search' ref={formRef} {...formProps}>
      <input type='text' ref={inputRef} {...inputProps} />

      {autocompleteState.isOpen && (
        <div
          className='panel-search'
          ref={panelRef}
          {...autocomplete.getPanelProps()}
        >
          {autocompleteState.collections.map((collection, index) => {
            const { items } = collection
            const filteredItems = items.filter((item) => !!item.name)
            const filteredItemsMatchingSearch = filteredItems.filter((item) =>
              item.name
                .toLowerCase()
                .includes(autocompleteState.query.toLowerCase())
            )

            console.log(filteredItemsMatchingSearch)

            return (
              <section key={index} className='panel-search-section'>
                {items.length > 0 && (
                  <ul {...autocomplete.getListProps()}>
                    {filteredItemsMatchingSearch.length > 0 ? (
                      filteredItemsMatchingSearch.map((item, index) => (
                        <AutocompleteItem key={index} {...item} />
                      ))
                    ) : (
                      <p className='no-results'>There are no results</p>
                    )}
                  </ul>
                )}
              </section>
            )
          })}
        </div>
      )}
    </form>
  )
}

export default Search

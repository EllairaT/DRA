import { useEffect, useState } from 'react'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import Script from 'next/script'
import Head from 'next/head'

function Places() {
  const [address, setAddress] = useState('')
  const [selected, setSelected] = useState('')
  const handleSelect = async (val) => {
    setSelected(val)
  }

  return (
    <>
      <Head>
        <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDor5APMdLLIrbWeShLLUlpIjqmskJ_qjU&libraries=places"
        />
      </Head>

      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Type address' })} className="form-control" />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                // custom render function
                const style = { backgroundColor: suggestion.active ? '#5BE7C4' : '#fff  ' }
                console.log(suggestion)
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })} key={suggestion.placeId}>
                    {suggestion.description}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <div>
        <h1>Selected: {address}</h1>
      </div>
    </>
  )
}

export default Places

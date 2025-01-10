<script>
import { reactive, ref } from 'vue';

export default {
  props: {
    mapboxOptions: Object,
    placeholder: {
      type: String,
      default: 'Enter address'
    }
  },
  emits: ['addressSelect'],
  setup(props, { emit }) {
    const defaultMapboxOptions = {
      api: 'https://api.mapbox.com/geocoding/v5/',
      endpoint: 'mapbox.places',
      access_token: '',
      limit: 5,
      types: 'address',
      proximity: 'ip',
      autocomplete: true,
      fuzzyMatch: true,
      language: 'en',
      country: 'gb' // Restrict to the UK
    };

    const dropdownMenu = ref(null);
    const searchtext = ref('');
    const suggestions = reactive([]);

    const mapboxOptions = { ...defaultMapboxOptions, ...props.mapboxOptions };

    function formatLabel(label, part) {
      const index = label.toLowerCase().indexOf(searchtext.value.toLowerCase());

      if (index >= 0) {
        let text = '';
        switch (part) {
          case 'start':
            text = label.substring(0, index);
            break;
          case 'middle':
            text = label.substring(index, index + searchtext.value.length);
            break;
          case 'end':
            text = label.substring(index + searchtext.value.length);
            break;
        }
        return text;
      } else if (part === 'start') {
        return label;
      } else {
        return '';
      }
    }

    async function searchAddress() {
      if (searchtext.value.length >= 2) {
        suggestions.length = 0;
        const results = await geoCode(searchtext.value);
        if (results) {
          suggestions.push(...results);
          dropdownMenu.value?.classList.add('show');
        }
      } else {
        dropdownMenu.value?.classList.remove('show');
      }
    }

    function selectAddress(address) {
      dropdownMenu.value?.classList.remove('show');
      searchtext.value = address.street;
      emit('addressSelect', address);
    }

    async function geoCode(street) {
      if (street.length >= 2) {
        const searchtext = encodeURIComponent(street);
        const { api, endpoint, ...query } = mapboxOptions;
        const queryString = new URLSearchParams(query).toString();
        const requestUrl = `${api + endpoint}/${searchtext}.json?${queryString}`;

        try {
          const response = await fetch(requestUrl);
          const data = await response.json();

          if (data.features) {
            return data.features.map((address) => {
              const label = address.place_name;
              const location = label.split(', ')[1] || '';

              return {
                label: label,
                street: label.split(', ')[0],
                postcode: location.slice(0, location.indexOf(' ')),
                city: location.slice(1 + location.indexOf(' ')),
                state: address.context?.at(-2)?.text || '',
                country: address.context?.at(-1)?.text || ''
              };
            });
          } else {
            console.log(data.message);
          }
        } catch (error) {
          console.error('Error fetching geocoding data:', error);
        }
      }
    }

    return {
      dropdownMenu,
      searchtext,
      suggestions,
      formatLabel,
      searchAddress,
      selectAddress
    };
  }
};
</script>

<template>
  <div>
    <input 
      type="text" 
      class="form-control" 
      :placeholder="placeholder"
      v-model="searchtext" 
      @input="searchAddress" 
    />
    <ul ref="dropdownMenu" class="dropdown-menu">
      <li v-for="suggestion in suggestions" :key="suggestion.label">
        <a 
          class="dropdown-item" 
          href="#" 
          @click.prevent="selectAddress(suggestion)"
        >
          {{ formatLabel(suggestion.label, 'start') }}
          <span class="text-primary">
            {{ formatLabel(suggestion.label, 'middle') }}
          </span>
          {{ formatLabel(suggestion.label, 'end') }}
        </a>
      </li>
    </ul>
  </div>
</template>

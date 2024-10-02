import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'https://aviasales-test-api.kata.academy/';

export const ticketsApi = createApi({
  reducerPath: 'ticketsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ['Tickets'],
  endpoints: (builder) => ({
    getSearchId: builder.query({
      query: () => 'search',
    }),
    fetchTickets: builder.query({
      query: (id) => URL + `tickets?searchId=${id}`,
      merge: (currentCache = [], newCache) => {
        if (!currentCache.tickets) {
          currentCache.data = [];
          currentCache.stop = null;
          currentCache.data = [...newCache.tickets];
          currentCache.stop = newCache.stop;
          return;
        }
        currentCache.tickets = [...currentCache.tickets, ...newCache.tickets];
        currentCache.stop = newCache.stop;
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
  }),
});

export const { useGetSearchIdQuery, useLazyFetchTicketsQuery, useFetchTicketsQuery } = ticketsApi;

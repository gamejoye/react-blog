import { IAccount } from '../../common/types/account';
import { apiSlice } from '../apiSlice';

type AccountResponse = IAccount;

export const acountApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccount: builder.query<AccountResponse, void>({
      query: () => `accounts`,
    }),
  }),
});

export const { useGetAccountQuery } = acountApiSlice;

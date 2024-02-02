import {
  SerializedError,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {
  IBlogComment,
  IBlogCommentReply,
} from '../../common/types/blog-comment';
import { IRootState } from '../../app/store';
import {
  IGetBlogCommentsRequest,
  IGetBlogCommentsThunkResponse,
  IPostBlogCommentRequest,
  IPostBlogCommentResponse,
} from './types';
import {
  addBlogCommentApi,
  getBlogCommentsByBlogIdApi,
} from './blogCommentApi';

const dateDescComparer = (
  a: IBlogComment | IBlogCommentReply,
  b: IBlogComment | IBlogCommentReply,
) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime();

type IInitialState = {
  status: 'idle' | 'loading' | 'succeed' | 'failed';
  postStatus: 'idle' | 'loading' | 'succeed' | 'failed';
  mores: any;
  error: null | SerializedError;
};

export const fetchBlogComments = createAsyncThunk<
  IGetBlogCommentsThunkResponse,
  IGetBlogCommentsRequest
>('blogComments/fetchBlogComments', async (option) => {
  const res = await getBlogCommentsByBlogIdApi(option);
  const parentCommentid = option.queryOption?.parent_comment_id;
  return {
    ...res,
    parentCommentId: parentCommentid,
  };
});

export const postBlogComment = createAsyncThunk<
  IPostBlogCommentResponse,
  IPostBlogCommentRequest
>('blogComments/postBlogComments', async (partialComment) => {
  const res = await addBlogCommentApi(partialComment);
  return res;
});

export const blogCommentsAdapter = createEntityAdapter<
  IBlogComment | IBlogCommentReply
>({ sortComparer: dateDescComparer });
const initialState = blogCommentsAdapter.getInitialState<IInitialState>({
  status: 'idle',
  postStatus: 'idle',
  mores: {},
  error: null,
});

export const blogCommentsSlice = createSlice({
  name: 'blogComments',
  initialState,
  reducers: {
    removeAllBlogComments: (state) => {
      Object.assign(state, initialState);
      blogCommentsAdapter.removeAll(state);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBlogComments.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogComments.fulfilled, (state, action) => {
        const { more, comments, parentCommentId } = action.payload;
        state.status = 'succeed';
        state.mores[parentCommentId + ''] = more;
        blogCommentsAdapter.addMany(state, comments);
      })
      .addCase(fetchBlogComments.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(postBlogComment.pending, (state, action) => {
        state.postStatus = 'loading';
      })
      .addCase(postBlogComment.fulfilled, (state, action) => {
        const { payload } = action;
        state.postStatus = 'succeed';
        blogCommentsAdapter.addOne(state, payload);
      })
      .addCase(postBlogComment.rejected, (state, action) => {
        state.postStatus = 'failed';
      });
  },
});
export default blogCommentsSlice.reducer;
export const { removeAllBlogComments } = blogCommentsSlice.actions;
export const { selectAll: selectAllBlogComments } =
  blogCommentsAdapter.getSelectors((state: IRootState) => state.blogComments);

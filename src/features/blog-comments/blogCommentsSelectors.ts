import { createSelector } from '@reduxjs/toolkit';
import { IRootState } from '../../app/store';
import { selectAllBlogComments } from './blogCommentsSlice';

export const selectBlogCommentsStatus = (state: IRootState) =>
  state.blogComments.status;
export const selectBlogCommentsMoreByParentId = (
  state: IRootState,
  parentId?: number,
) => state.blogComments.mores[parentId + ''];
export const selectBlogCommentsByParentId = createSelector(
  [selectAllBlogComments, (state, parentId?: number) => parentId],
  (allComments, parentId) => {
    return allComments.filter(
      (comment) => (comment as any).parentComment?.id === parentId,
    );
  },
);

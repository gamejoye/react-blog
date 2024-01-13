import { PropsWithChildren, useEffect, useState } from 'react';
import { Comment } from '@ant-design/compatible';
import { Avatar, Button, Col, Empty, List, Row, Spin } from 'antd';
import { showRelativeTime } from '../../common/utils/dayjs';
import { fetchBlogComments, removeAllBlogComments } from './blogCommentsSlice';
import { IRootState, useAppDispatch } from '../../app/store';
import { useSelector } from 'react-redux';
import { IBlogComment } from '../../common/types/blog-comment';
import {
  selectBlogCommentsByParentId,
  selectBlogCommentsMoreByParentId,
  selectBlogCommentsStatus,
} from './blogCommentsSelectors';
import './index.css';

type IProps = {
  blogId: number;
  parentCommentId?: number;
};

const style: React.CSSProperties = { padding: '0 8px' };

const BlogCommentList: React.FC<PropsWithChildren<IProps>> = ({
  blogId,
  parentCommentId,
}) => {
  const dispatch = useAppDispatch();
  const comments = useSelector((state: IRootState) =>
    selectBlogCommentsByParentId(state, parentCommentId),
  );
  const more = useSelector((state: IRootState) =>
    selectBlogCommentsMoreByParentId(state, parentCommentId),
  );
  const status = useSelector(selectBlogCommentsStatus);
  const isLoading = status === 'idle'; // 初始化
  const isFetching = status === 'loading'; // 再次请求数据

  useEffect(() => {
    dispatch(fetchBlogComments({ blogId }));
    return () => {
      dispatch(removeAllBlogComments());
    };
  }, [blogId, dispatch]);

  const handleOnLoadmore = () => {
    const earliestTimeStamp = comments[comments.length - 1].createTime;
    dispatch(
      fetchBlogComments({
        blogId,
        queryOption: {
          parent_comment_id: parentCommentId,
          timestamp: earliestTimeStamp,
        },
      }),
    );
  };

  const Loadmore =
    more && !isFetching ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={handleOnLoadmore}>loading more</Button>
      </div>
    ) : null;

  const LoadmorePlaceholder = isFetching ? (
    <div style={{ height: '100px' }} />
  ) : null;

  let content;

  if (isLoading) {
    content = (
      <Spin tip="评论加载中..." spinning size="large">
        <div />
      </Spin>
    );
  } else {
    content = (
      <List
        itemLayout="horizontal"
        dataSource={comments}
        locale={{ emptyText: <Empty description="还没有相关评论哦~" /> }}
        loadMore={Loadmore}
        footer={LoadmorePlaceholder}
        renderItem={(comment) => (
          <Comment
            style={style}
            className="fade-in"
            author={
              comment.account.username ||
              comment.account.platformProfile.username
            }
            avatar={<Avatar src={comment.account.platformProfile.avatarUrl} />}
            content={<p>{comment.content}</p>}
            datetime={showRelativeTime(comment.createTime)}
            children={
              (comment as IBlogComment).replies !== undefined &&
              (comment as IBlogComment).replies.length > 0 ? (
                <BlogCommentList blogId={blogId} parentCommentId={comment.id} />
              ) : null
            }
          />
        )}
      />
    );
  }
  return (
    <Row justify="center">
      <Col span={24}>{content}</Col>
    </Row>
  );
};

export default BlogCommentList;

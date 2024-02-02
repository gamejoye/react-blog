import { Row, Col, Typography, Skeleton, Card, Avatar, message } from 'antd';
import { useParams } from 'react-router';
import { useGetBlogQuery } from '../../features/blogs/blogsSlice';
import TagBar from '../../common/components/TagBar';
import BlogCommentList from '../../features/blog-comments/BlogCommentList';
import { useGetAccountQuery } from '../../features/accounts/accountSlice';
import CommentEditor from '../../common/components/CommentEditor';
import { Comment } from '@ant-design/compatible';
import { IAccount } from '../../common/types/account';
import { useState } from 'react';
import { useAppDispatch } from '../store';
import { postBlogComment } from '../../features/blog-comments/blogCommentsSlice';

const commentEditorStyle: React.CSSProperties = { padding: '0 8px' };

const Post = () => {
  const { id } = useParams();
  const intId = parseInt(id || '');
  const { data: blog, isLoading, isFetching } = useGetBlogQuery(intId);
  const dispatch = useAppDispatch();

  let post;

  if (isLoading) {
    post = <Skeleton title active paragraph={{ rows: 10 }} />;
  } else if (isFetching) {
    post = <Skeleton title active paragraph={{ rows: 10 }} />;
  } else {
    post = (
      <Typography>
        <Col span={24}>
          <Typography.Title>{blog?.title}</Typography.Title>
        </Col>
        <Row gutter={[16, 16]}>
          <Col span={18}>
            <div
              dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
            ></div>
          </Col>
          <Col span={6}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card title="标签" bordered={false}>
                  <TagBar tags={blog?.tags || []} color="#108ee9" />
                </Card>
              </Col>
              <Col span={24}>
                <Card title="归档" bordered={false}>
                  <TagBar tags={blog?.folders || []} color="#87d068" />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Typography>
    );
  }

  const {
    data: account = {} as IAccount,
    isLoading: isAccountLoading,
    isFetching: isAccountFetching,
    isError: isAccountError,
    isSuccess: isAccountSuccess,
  } = useGetAccountQuery();
  // console.log(account, isLoading, isFetching, isError, error);

  const [commentValue, setCommentValue] = useState('');
  const [submiting, setSubmiting] = useState(false);
  const showLogin =
    ![isAccountLoading, isAccountFetching].some(Boolean) && !isAccountSuccess;
  const submitDisabled =
    [isAccountLoading, isAccountFetching, isAccountError].some(Boolean) ||
    showLogin ||
    commentValue === '';
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.currentTarget.value);
  };
  const handleOnSubmit = async () => {
    try {
      const accountId = account.id;
      setSubmiting(true);
      await dispatch(
        postBlogComment({
          content: commentValue,
          blog: {
            id: intId,
          },
          account: {
            id: accountId,
          },
        }),
      ).unwrap();
    } catch (e) {
      message.error('评论发布失败');
    } finally {
      setCommentValue('');
      setSubmiting(false);
    }
  };

  return (
    <Row gutter={[16, 16]}>
      <Col offset={4} span={16}>
        {post}
      </Col>
      <Col offset={4} span={16}>
        <Comment
          style={commentEditorStyle}
          author={account.username || account.platformProfile?.username}
          avatar={
            <Avatar
              src={account.platformProfile?.avatarUrl}
              alt={account.username || account.platformProfile?.username}
            />
          }
          content={
            <CommentEditor
              onChange={handleOnChange}
              onSubmit={handleOnSubmit}
              submitting={submiting}
              disabled={submitDisabled}
              value={commentValue}
              showLogin={showLogin}
            />
          }
        />
        <BlogCommentList blogId={intId} />
      </Col>
    </Row>
  );
};
export default Post;

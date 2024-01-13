import { ProList } from '@ant-design/pro-components';
import { IBlog } from '../../common/types/blog';
import { getBlogsApi } from './blogsApi';
import { Button, Space, Typography } from 'antd';
import IconText from '../../common/components/IconText';
import { EyeTwoTone, MessageTwoTone } from '@ant-design/icons';
import TagBar from '../../common/components/TagBar';
import { IGetPagingQuery } from '../../common/types/api';
import { stripHtml } from '../../common/utils/strip';
import { IGetBlogsQuery } from './types';

type IProps = {
  search: boolean;
  size?: 'small' | 'large' | 'default';
  handleOnPostClick: (blog: IBlog) => void;
};

export const BlogList: React.FC<IProps> = ({
  search,
  size = 'default',
  handleOnPostClick,
}) => {
  return (
    <ProList<IBlog>
      itemLayout="vertical"
      pagination={{
        pageSize: 5,
      }}
      size={size}
      rowKey={'id'}
      search={search ? {} : false}
      request={async ({ current = 1, pageSize = 1, ...props }) => {
        const { content = '' } = props;
        const params: IGetBlogsQuery & IGetPagingQuery = {
          _start: (current - 1) * pageSize,
          _end: current * pageSize,
          _order: 'DESC',
          _sort: 'createTime',
        };
        if (content !== '') {
          params['q'] = content;
        }
        return await getBlogsApi(params);
      }}
      onRow={(blog) => {
        return {
          onClick: () => handleOnPostClick(blog),
        };
      }}
      metas={{
        title: {
          search: false,
        },
        description: {
          search: false,
          render: (_, blog) => {
            return blog.tags.length === 0 ? null : (
              <TagBar tags={blog.tags} color="blue" />
            );
          },
        },
        content: {
          dataIndex: 'content',
          render(_, blog) {
            return (
              <Typography.Paragraph ellipsis={{ rows: 2, symbol: 'more' }}>
                {stripHtml(blog.content)}
              </Typography.Paragraph>
            );
          },
        },
        actions: {
          render: (_, blog) => (
            <Space split>
              <IconText icon={MessageTwoTone} text={blog.commentsCount + ''} />
              <IconText icon={EyeTwoTone} text={blog.views + ''} />
            </Space>
          ),
        },
        extra: {
          search: false,
          render: (_: any, blog: IBlog) => {
            return (
              <Button type="link" onClick={() => handleOnPostClick(blog)}>
                View Post
              </Button>
            );
          },
        },
      }}
    />
  );
};

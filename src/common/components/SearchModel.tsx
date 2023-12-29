import { SearchOutlined } from '@ant-design/icons';
import { Input, Modal, ModalProps } from 'antd';
import React, { useState } from 'react';
import { useGetBlogsQuery } from '../../features/blogs/blogsSlice';
import BlogList from './BlogList';
import { IBlog } from '../types/blog';

type IProps = {
  handleOnPostClick: (blog: IBlog) => void;
};

const SearchModel: React.FC<ModalProps & IProps> = ({
  handleOnPostClick,
  ...props
}) => {
  const { data: blogs = [] } = useGetBlogsQuery();
  const [searchValue, setSearchValue] = useState('');
  const filterBlogs =
    searchValue === ''
      ? []
      : blogs.filter((blog) =>
          blog.content.toUpperCase().includes(searchValue.toUpperCase()),
        );
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  return (
    <Modal {...props}>
      <Input
        size="large"
        prefix={<SearchOutlined />}
        onChange={handleOnChange}
      />
      {searchValue !== '' ? (
        <BlogList
          blogs={filterBlogs}
          handleOnPostClick={handleOnPostClick}
          size="small"
        />
      ) : null}
    </Modal>
  );
};
export default SearchModel;

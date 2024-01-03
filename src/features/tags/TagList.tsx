import { ProList } from "@ant-design/pro-components";
import { Button } from "antd";
import { IGetPagingQuery } from "../../common/types/api";
import { showRelativeTime } from "../../common/utils/dayjs";
import { ITag } from "../../common/types/tag";
import { getTagsApi } from "./tagsApi";

type IProps = {
  size?: 'small' | 'large' | 'default';
  handleOnTagClick: (tag: ITag) => void;
};

export const TagList: React.FC<IProps> = ({
  size = 'default',
  handleOnTagClick,
}) => {
  return (
    <ProList<ITag>
      pagination={{
        pageSize: 10,
      }}
      size={size}
      rowKey={"id"}
      request={async ({ current = 1, pageSize = 10, ...props }) => {
        const params: IGetPagingQuery = {
          _start: (current - 1) * pageSize,
          _end: current * pageSize,
          _order: 'DESC',
          _sort: 'createTime',
        };
        return await getTagsApi(params);
      }}
      metas={{
        title: {
          dataIndex: 'name',
        },
        description: {
          dataIndex: 'createTime',
          render(_, tag) {
            return (
              <span>{showRelativeTime(tag.createTime)}</span>
            );
          }
        },
        actions: {
          render: (_: any, tag: ITag) => {
            return (
              <Button type='link' onClick={() => handleOnTagClick(tag)}>
                View Detail
              </Button>
            )
          }
        }
      }}
    />
  )
}
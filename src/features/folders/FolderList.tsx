import { ProList } from "@ant-design/pro-components";
import { Button } from "antd";
import { IGetPagingQuery } from "../../common/types/api";
import { IFolder } from "../../common/types/folder";
import { getFoldersApi } from "./foldersApi";
import { showRelativeTime } from "../../common/utils/dayjs";

type IProps = {
  size?: 'small' | 'large' | 'default';
  handleOnFolderClick: (folder: IFolder) => void;
};

export const FolderList: React.FC<IProps> = ({
  size = 'default',
  handleOnFolderClick,
}) => {
  return (
    <ProList<IFolder>
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
        return await getFoldersApi(params);
      }}
      metas={{
        title: {
          dataIndex: 'name',
        },
        description: {
          dataIndex: 'createTime',
          render(_, folder) {
            return (
              <span>{showRelativeTime(folder.createTime)}</span>
            );
          }
        },
        actions: {
          render: (_: any, folder: IFolder) => {
            return (
              <Button type='link' onClick={() => handleOnFolderClick(folder)}>
                View Detail
              </Button>
            )
          }
        }
      }}
    />
  )
}
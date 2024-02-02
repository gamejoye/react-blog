import { Alert, Button, Input } from 'antd';
import { GITHUB_AUTH_CALLBACK } from '../constants/base';

type IEditorProps = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  submitting: boolean;
  disabled: boolean;
  value: string;
  showLogin: boolean;
};

const CommentEditor: React.FC<IEditorProps> = ({
  onChange,
  onSubmit,
  submitting,
  disabled,
  value,
  showLogin,
}) => {
  return (
    <>
      {showLogin ? (
        <Alert
          message={
            <div>
              要发表评论，请先授权您的
              <a href={GITHUB_AUTH_CALLBACK}>github</a>
              账户
            </div>
          }
          type="info"
          showIcon
        />
      ) : null}
      <Input.TextArea
        rows={4}
        onChange={onChange}
        value={value}
        placeholder="留下你精彩的评论吧~"
      />
      <Button
        htmlType="submit"
        loading={submitting}
        disabled={disabled}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </>
  );
};

export default CommentEditor;

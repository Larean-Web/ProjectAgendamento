import { Alert, Space } from "antd";

type AppProps = {
    message: string
};
function CAlerta({message}: AppProps) {
    return (
        <div>
            <Space direction="vertical" className="text-sm">
                <Alert
                    message="Error"
                    description={message}
                    type="error"
                    showIcon
                />
            </Space>
        </div>
    );
}
export default CAlerta;

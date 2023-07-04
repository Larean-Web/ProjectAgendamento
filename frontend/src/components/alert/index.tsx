import { Alert, Space } from "antd";

type AppProps = {
    mensagem: string
};
function CAlerta({mensagem}: AppProps) {
    return (
        <div>
            <Space direction="vertical" className="text-sm">
                <Alert
                    message="Error"
                    description={mensagem}
                    type="error"
                    showIcon
                />
            </Space>
        </div>
    );
}
export default CAlerta;

import {Layout, theme, Typography} from 'antd';
import {Outlet} from "react-router-dom";

const {Header, Content, Footer} = Layout;
const {Text} = Typography


const PageLayout = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout className="min-w-screen min-h-screen">
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Text className="text-3xl text-white text-center w-full">
                    System rekomendacji książek oparty o zawartość
                </Text>
            </Header>
            <Content className="px-16 py-8">
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                Dawid Kiełkowski ©{new Date().getFullYear()} Praca inżynierska
            </Footer>
        </Layout>
    );
}

export default PageLayout;
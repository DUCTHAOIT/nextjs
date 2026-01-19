'use client'
import { Layout } from 'antd';

const AdminFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: 'center' }}>
                SuSu App ©{new Date().getFullYear()} Created by @SumoTech
            </Footer>
        </>
    )
}

export default AdminFooter;
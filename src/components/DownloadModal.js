import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import GoogleAd from "../ads/GoogleAd";

const DownloadModal = (props) => {

    const { t } = useTranslation()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    // const [email, setEmail] = useState('');

    return (
        <>
            <Button type="primary" onClick={showModal}>
                {t("DOWNLOAD")}
            </Button>
            <Modal title={t("Download Book")} footer={false} visible={isModalVisible} onCancel={handleCancel}>
                {/* <lable htmlfor='email' class="name h5" dir='auto'>{t("Enter your email to download")}</lable> */}
                {/* <input type='email' onChange={(event)=>{ setEmail(event.target.value)}} placeholder={t("Email...")} className="form-control" name="email" id="email" /> */}
                <div className="text-center mt-2">
                <GoogleAd slot="4567237334" googleAdId="ca-pub-6043226569102012"/>
                    <Button type="primary">
                        <a href={props.link}>{t("DOWNLOAD")}</a>
                    </Button>
                <GoogleAd slot="4567237334" googleAdId="ca-pub-6043226569102012"/>
                </div>
            </Modal>
        </>
    );
};

export default DownloadModal;
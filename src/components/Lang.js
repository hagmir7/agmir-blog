import { useTranslation } from "react-i18next";
import coockies from 'js-cookie'
import { useEffect } from "react";
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';


const languages = [
    {
        code: 'en',
        name: 'English'
    },
    {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl'
    }
    // },
    // {
    //     code: 'fr',
    //     name: 'Français'
    // },
    // {
    //     code: 'es',
    //     name: 'Español'
    // },

]

const Lang = () => {

  


    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguageCode = coockies.get('i18next') || 'en'
    const currentLanguage =  languages.find(lan=>lan.code == currentLanguageCode)
    useEffect(() =>{
        document.querySelector('html').dir = currentLanguage.dir || 'ltr'
    },[currentLanguage])




        const openNotification = () => {
        notification.open({
            message: t("Language changed successfully!"),
            description: t('lang_chang_msg'),
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
        };

    return (
        <select
            value={i18n.language}
            onChange={(e) =>{
                i18n.changeLanguage(e.target.value);
                openNotification();
            }
                
            }
            className="form-select form-select-sm lang"
        >
            {languages.map(item =>(
                <option value={item.code}>{item.name}</option>
            ))}
        </select>
    )
}

export default Lang;
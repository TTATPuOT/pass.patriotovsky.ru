import React, { useCallback, useState } from 'react';
import styles from './IndexPage.module.sass';
import Checkbox from '@elements/Checkbox';
import Input from '@elements/Input';
import useGeneratePassword, { GeneratorSettings } from '@hooks/useGeneratePassword';
import RefreshButton from '@templates/IndexPage/RefreshButton';
import Alert from '@templates/IndexPage/Alert';

const IndexPage = () => {
    const [settings, setSettings] = useState<GeneratorSettings>({
        length: 8,
        symbols: false,
        uppercase: true,
        excludeSimilar: false
    });
    const { password, refreshPassword } = useGeneratePassword(settings);
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const handleChangeInput = useCallback(({ target }) => {
        const length = parseInt(target.value);
        if (isNaN(length)) return;

        setSettings({ ...settings, length })
    }, [settings]);
    const handleChangeCheckbox = useCallback(({ target }) => {
        const name = target.name;
        const value = !!target.checked;
        if (!name) return;

        setSettings({ ...settings, [name]: value })
    }, [settings]);
    const handleCopy = useCallback(() => {
        setShowAlert(!showAlert);
        return navigator.clipboard.writeText(password);
    }, [password, showAlert]);

    return <div className={"container text-center " + styles.container}>
        <h1 className={styles.header}>Generate password</h1>

        <div className={styles.main}>
            <div className={styles.password} onClick={handleCopy}>
                {password}
                <Alert show={showAlert} />
            </div>
            <RefreshButton refreshPassword={refreshPassword} />
        </div>

        <div className={styles.input}>
            Make password with
            <Input
                size={settings.length.toString().length}
                value={settings.length}
                onChange={handleChangeInput}
            />
            length
        </div>
        <div className={styles.checkboxes}>
            <Checkbox name="symbols" onChange={handleChangeCheckbox} checked={settings.symbols}>
                Include symbols <span className="muted">(e.g. @#$%)</span>
            </Checkbox>
            <Checkbox name="uppercase" onChange={handleChangeCheckbox} checked={settings.uppercase}>
                Include Uppercase Characters <span className="muted">(e.g. ABCDEFGH)</span>
            </Checkbox>
            <Checkbox name="excludeSimilar" onChange={handleChangeCheckbox} checked={settings.excludeSimilar}>
                Exclude Similar Characters <span className="muted">(e.g. i, l, 1, L, o, 0, O)</span>
            </Checkbox>
        </div>
    </div>;
};

export default IndexPage;

import React, { useState, useEffect, ReactElement, Dispatch, SetStateAction } from 'react';
import { Menu, Button } from 'antd';
import {
	VideoCameraTwoTone,
	GithubFilled,
	LinkedinFilled,
	BgColorsOutlined,
	BulbTwoTone,
	ExperimentTwoTone,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	ThunderboltTwoTone
} from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { SubMenu } = Menu;

interface Props {
	darkTheme: boolean;
	setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export function NavOverlay(props: Props): ReactElement {
	const [menuCollapsed, setMenuCollapsed] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			toast.dark("Welcome! Use the menu on the left to view stuff! :)")
		}, 1000);
	}, [])

	function toggleCollapseMenu(): void {
		setMenuCollapsed(prevState => (!prevState))
	}

	function selectProject(): void {
		if (!menuCollapsed) {
			setTimeout(() => {
				toggleCollapseMenu();
			}, 300);
		}
	}

	function setDarkTheme(): void {
		props.setDarkTheme(prevState => !prevState)
	}

	const { darkTheme } = props;

	return (
		<div className={darkTheme
			? styles.navOverlayContainerDark
			: styles.navOverlayContainer}
		>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				pauseOnHover
			/>
			<div className={styles.menuContainer}>
				<Button
					type="primary"
					onClick={toggleCollapseMenu}
					className={styles.navExpandButton}
					icon={menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				/>
				<Menu
					//defaultSelectedKeys={['0']}
					//defaultOpenKeys={['sub1']}
					mode="inline"
					theme={darkTheme ? "dark" : "light"}
					inlineCollapsed={menuCollapsed}
					//style={{ marginTop: '1%' }}
					className={styles.navMenu}
				>
					<SubMenu key="sub1" icon={<ThunderboltTwoTone />} title="Projects" >
						<Menu.Item key="5" icon={<VideoCameraTwoTone />} onClick={selectProject}>Fleeting</Menu.Item>
						<Menu.Item key="6" icon={<ExperimentTwoTone />} onClick={selectProject}>Dumpstr</Menu.Item>
					</SubMenu>
					<Menu.Item key="1" icon={<BulbTwoTone />}>
						About Me
					</Menu.Item>
					<Menu.Item key="2" icon={<GithubFilled />}>
						GitHub
					</Menu.Item>
					<Menu.Item key="3" icon={<LinkedinFilled />}>
						LinkedIn
					</Menu.Item>
				</Menu>
			</div>
			<Button
				type="primary"
				size="large"
				onClick={setDarkTheme}
				icon={<BgColorsOutlined />}
				className={styles.themeButton}
			/>
		</div>
	)
}

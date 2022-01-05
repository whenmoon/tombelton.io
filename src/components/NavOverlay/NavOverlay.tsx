import React, { useState, useEffect, ReactElement, Dispatch, SetStateAction } from 'react';
import { Menu, Button } from 'antd';
import {
	VideoCameraTwoTone,
	GithubFilled,
	LinkedinFilled,
	BulbTwoTone,
	ExperimentTwoTone,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	ThunderboltTwoTone
} from '@ant-design/icons';
import styles from './styles.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { SubMenu } = Menu;

interface Props {
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

	return (
		<div className={styles.navOverlayContainer}>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				pauseOnHover
			/>
			<div className={styles.navMenuContainer}>
				<Button
					type="primary"
					onClick={toggleCollapseMenu}
					icon={menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				/>
				<Menu
					//defaultSelectedKeys={['0']}
					//defaultOpenKeys={['sub1']}
					mode="inline"
					theme="light"
					inlineCollapsed={menuCollapsed}
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
		</div>
	)
}

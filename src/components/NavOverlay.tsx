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
import { MenuInfo } from 'rc-menu/lib/interface';

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

	function toggleCollapseMenu() {
		setMenuCollapsed(prevState => (!prevState))
	}

	function selectProject(e: MenuInfo) {
		if (!menuCollapsed) {
			setTimeout(() => {
				toggleCollapseMenu();
			}, 300);
		}
	}

	const { darkTheme, setDarkTheme } = props;

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
			<div style={{ width: '15%', marginLeft: '1%' }}>
				<Button
					type="primary"
					onClick={toggleCollapseMenu}
					style={{ marginBottom: '1%', marginTop: '20%' }}
					icon={menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				/>
				<Menu
					//defaultSelectedKeys={['0']}
					//defaultOpenKeys={['sub1']}
					mode="inline"
					theme={darkTheme ? "dark" : "light"}
					inlineCollapsed={menuCollapsed}
					style={{ marginTop: '1%' }}
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
				onClick={() => setDarkTheme(prevState => !prevState)}
				icon={<BgColorsOutlined />}
				style={{
					marginLeft: '1%',
					marginTop: '50%',
					position: 'absolute',
					top: 0,
					bottom: 0
				}}
			/>
		</div>
	)
}

// width: 256, position: "absolute", top: '2%', left: '2%', right: 0 
// position: "absolute", bottom: '2%', left: '2%', right: 0 
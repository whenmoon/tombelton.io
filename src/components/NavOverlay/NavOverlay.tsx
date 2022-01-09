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
import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from '../../hooks/useWindowSize';

const { SubMenu } = Menu;

export function NavOverlay(): ReactElement {
	const [menuCollapsed, setMenuCollapsed] = useState(true);

	const windowDimensions = useWindowDimensions()

	const smallScreen = windowDimensions.width < 1000;
	const showDropdownNavMenu = (smallScreen && !menuCollapsed) || !smallScreen;

	useEffect(() => {
		if (smallScreen && !menuCollapsed) {
			setMenuCollapsed(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [smallScreen])

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

	return (
		<div className={styles.navOverlayContainer}>
			<div className={styles.navMenuContainer}>
				<Button
					type="primary"
					onClick={toggleCollapseMenu}
					icon={menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				/>
				{showDropdownNavMenu &&
					<Menu
						mode="inline"
						theme="light"
						inlineCollapsed={menuCollapsed || smallScreen}
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
				}
			</div>
		</div>
	)
}

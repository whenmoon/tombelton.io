import type { NextPage } from 'next'
import React from 'react';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { SubMenu } = Menu;

const Home: NextPage = () => {
	const [loading, setLoading] = useState(true);
	const [darkTheme, setDarkTheme] = useState(false)
	const [menuCollapsed, setMenuCollapsed] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			toast.dark("Welcome! Use the menu on the left to view stuff! :)")
		}, 1000);
	}, [])

	return (
		<div className={darkTheme ? styles.containerDark : styles.container}>
			<main className={styles.main}>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					pauseOnHover
				/>
				<div style={{ width: 256, position: "absolute", top: '2%', left: '2%', right: 0 }}>
					<Button
						type="primary"
						onClick={() => setMenuCollapsed(prevTheme => (!prevTheme))}
						style={{ marginBottom: 16 }}
						icon={menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					/>
					<Menu
						defaultSelectedKeys={['0']}
						defaultOpenKeys={['sub1']}
						mode="inline"
						theme={darkTheme ? "dark" : "light"}
						inlineCollapsed={menuCollapsed}
					>
						<SubMenu key="sub1" icon={<ThunderboltTwoTone />} title="Projects">
							<Menu.Item key="5" icon={<VideoCameraTwoTone />}>Fleeting</Menu.Item>
							<Menu.Item key="6" icon={<ExperimentTwoTone />}>Dumpstr</Menu.Item>
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
					onClick={() => setDarkTheme(prevTheme => (!prevTheme))}
					icon={<BgColorsOutlined />}
					style={{ position: "absolute", bottom: '2%', left: '2%', right: 0 }}
				/>
			</main>
			{/*<footer className={styles.footer}>
				<p>
					Built with NextJS and TypeScript by Tom Belton
				</p>
			</footer>*/}
		</div >
	)
}

export default Home

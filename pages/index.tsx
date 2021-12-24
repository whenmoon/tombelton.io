import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const Home: NextPage = () => {
	const [selectedNavItem, setSelectedNavItem] = useState({ current: '' });
	const [loading, setLoading] = useState(true);
	useEffect(() => {

	}, [])

	const handleClick = (e: any) => {
		console.log('click ', e);
		setSelectedNavItem({ current: e.key });
	};

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Menu onClick={handleClick} selectedKeys={[selectedNavItem.current]} mode="horizontal">
					<Menu.Item key="mail" icon={<MailOutlined />}>
						Me
					</Menu.Item>
					<Menu.Item key="app" icon={<AppstoreOutlined />}>
						Projects
					</Menu.Item>
					<Menu.Item key="app" icon={<AppstoreOutlined />}>
						GitHub
					</Menu.Item>
					<Menu.Item key="app" icon={<AppstoreOutlined />}>
						LinkedIn
					</Menu.Item>
				</Menu>
				<a href="https://nextjs.org/docs" >
					<h1 className={styles.title}>
						Projects
					</h1>
				</a>
				{/*<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h2>About &rarr;</h2>
						<p>What I do..</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h2>Projects &rarr;</h2>
						<p>What I've built..</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className={styles.card}
					>
						<h2>GitHub &rarr;</h2>
						<p>Codes 'n' stuff..</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h2>LinkedIn &rarr;</h2>
						<p>
							Where I've worked..
						</p>
					</a>
				</div>*/}
			</main>
			{/*<footer className={styles.footer}>
				<p>
					Built with NextJS and TypeScript by Tom Belton
				</p>
			</footer>*/}
		</div>
	)
}

export default Home

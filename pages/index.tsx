import Footer from 'components/Footer';
import Header from 'components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				{/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link> */}
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex flex-col items-center justify-center flex-1 min-h-screen py-16 bg-gradient-to-r from-slate-700 to-blue-700">
				<h1 className="m-0 text-6xl text-center">
					Welcome to{' '}
					<a
						href="https://nextjs.org"
						target="_blank"
						className="text-blue-400 no-underline hover:underline active:underline focus:underline"
						rel="noreferrer">
						Next.js!
					</a>
				</h1>
				<h1 className="mt-3 text-3xl italic font-bold">
					with{' '}
					<a
						href="https://tailwindcss.com/"
						target="_blank"
						className="text-sky-400 hover:underline"
						rel="noreferrer">
						tailwindcss~!
					</a>
				</h1>
			</main>

			{/* change hidden to flex to show footer */}
			<Footer />
			<footer className="items-center justify-center flex-1 hidden py-8 border-t border-gray-500">
				<a
					className="flex items-center justify-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by{' '}
					<span className="h-4 ml-2">
						<Image
							className="invert"
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Home;
